(function renderMenusPage() {
  const container = document.getElementById('menu-products');
  if (!container) return;

  const template = document.getElementById('product-card-template');
  const buttons = document.querySelectorAll('.menu-selector [data-menu]');

  function showMenu(key) {
    const menu = MENUS[key];
    if (!menu) return;
    container.innerHTML = '';
    menu.products.forEach(mp => {
      const p = getProductById(mp.productId);
      if (!p) return;
      const node = template.content.firstElementChild.cloneNode(true);
      node.querySelector('.thumb').src = p.img;
      node.querySelector('.thumb').alt = p.title;
      node.querySelector('.title').textContent = p.title;
      node.querySelector('.desc').textContent = p.desc;
      node.querySelector('.price').textContent = `${p.price} TL`;
      node.querySelector('.add-to-cart').addEventListener('click', () => Cart.add(p.id, 1));
      container.appendChild(node);
    });
  }

  buttons.forEach(btn => btn.addEventListener('click', () => showMenu(btn.getAttribute('data-menu'))));
  showMenu('two');
})();


