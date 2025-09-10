(function renderMenusPage() {
  const container = document.getElementById('menu-products');
  if (!container) return;

  const template = document.getElementById('product-card-template');
  const buttons = document.querySelectorAll('.menu-selector [data-menu]');

  function showMenu(key) {
    const menu = MENUS[key];
    container.innerHTML = '';
    
    if (key === 'all') {
      // Tüm ürünleri göster
      MENU_PRODUCTS.forEach(p => {
        const node = template.content.firstElementChild.cloneNode(true);
        node.querySelector('.thumb').src = p.img;
        node.querySelector('.thumb').alt = p.title;
        node.querySelector('.title').textContent = p.title;
        node.querySelector('.desc').textContent = `${p.desc} • ${p.weight}`;
        node.querySelector('.price').textContent = `${p.price} TL`;
        node.querySelector('.add-to-cart').addEventListener('click', () => Cart.add(p.id, 1));
        
        // Masonry hover efekti ekle
        node.classList.add('masonry-item');
        
        container.appendChild(node);
      });
      return;
    }
    
    if (!menu) return;
    menu.products.forEach(mp => {
      const p = getProductById(mp.productId);
      if (!p) return;
      const node = template.content.firstElementChild.cloneNode(true);
      node.querySelector('.thumb').src = p.img;
      node.querySelector('.thumb').alt = p.title;
      node.querySelector('.title').textContent = p.title;
      node.querySelector('.desc').textContent = `${p.desc} • ${p.weight || ''}`;
      node.querySelector('.price').textContent = `${p.price} TL`;
      node.querySelector('.add-to-cart').addEventListener('click', () => Cart.add(p.id, 1));
      
      // Masonry hover efekti ekle
      node.classList.add('masonry-item');
      
      container.appendChild(node);
    });
  }

  buttons.forEach(btn => btn.addEventListener('click', () => {
    // Aktif butonu işaretle
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showMenu(btn.getAttribute('data-menu'));
  }));
  
  // Varsayılan olarak tüm ürünleri göster
  showMenu('all');
  document.querySelector('[data-menu="all"]')?.classList.add('active');
})();


