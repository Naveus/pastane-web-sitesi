(function renderCartPage() {
  const listEl = document.getElementById('cart-list');
  if (!listEl) return;

  const template = document.getElementById('cart-item-template');
  const subtotalEl = document.getElementById('subtotal');
  const grandEl = document.getElementById('grandtotal');

  function formatTL(v) { return `${v} TL`; }

  function computeTotals(items) {
    const subtotal = items.reduce((sum, it) => sum + (it.product.price * it.qty), 0);
    return { subtotal, total: subtotal };
  }

  function getSortedItems() {
    const items = Cart.getDetailed();
    // Otomatik olarak yüksek fiyattan düşük fiyata sırala
    items.sort((a, b) => b.product.price - a.product.price);
    return items;
  }

  function render() {
    listEl.innerHTML = '';
    const items = getSortedItems();
    
    if (items.length === 0) {
      listEl.innerHTML = '<p class="empty-cart">Sepetiniz boş. <a href="./menus.html">Ürünlere göz atın</a></p>';
      subtotalEl.textContent = formatTL(0);
      grandEl.textContent = formatTL(0);
      return;
    }
    
    items.forEach(it => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.querySelector('.thumb').src = it.product.img;
      node.querySelector('.thumb').alt = it.product.title;
      node.querySelector('.title').textContent = it.product.title;
      node.querySelector('.unit-price').textContent = `Birim: ${formatTL(it.product.price)} • ${it.product.weight || ''}`;
      node.querySelector('.count').textContent = String(it.qty);
      node.querySelector('.line-total').textContent = formatTL(it.product.price * it.qty);

      // Counter butonları
      const minusBtn = node.querySelector('.minus');
      const plusBtn = node.querySelector('.plus');
      const countEl = node.querySelector('.count');
      
      minusBtn.addEventListener('click', () => { 
        Cart.set(it.productId, it.qty - 1); 
        render(); 
      });
      
      plusBtn.addEventListener('click', () => { 
        Cart.set(it.productId, it.qty + 1); 
        render(); 
      });
      
      node.querySelector('.remove').addEventListener('click', () => { 
        Cart.remove(it.productId); 
        render(); 
      });

      listEl.appendChild(node);
    });

    const totals = computeTotals(items);
    subtotalEl.textContent = formatTL(totals.subtotal);
    grandEl.textContent = formatTL(totals.total);
  }

  window.addEventListener('storage', render);
  render();

  const checkout = document.getElementById('checkout-btn');
  checkout.addEventListener('click', () => {
    if (Cart.read().length === 0) { alert('Sepet boş.'); return; }
    alert('Siparişiniz alındı! (Demo)');
    Cart.clear();
    render();
  });
})();


