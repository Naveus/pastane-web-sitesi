(function renderHome() {
  const listEl = document.getElementById('product-list');
  if (!listEl) return;

  const template = document.getElementById('product-card-template');

  HOME_PRODUCTS.forEach(p => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.thumb').src = p.img;
    node.querySelector('.thumb').alt = p.title;
    node.querySelector('.title').textContent = p.title;
    node.querySelector('.desc').textContent = p.desc;
    node.querySelector('.price').textContent = `${p.price} TL`;
    
    // Sepete ekleme butonu yerine "Menüye Git" butonu
    const button = node.querySelector('.add-to-cart');
    button.textContent = 'Menüye Git';
    button.addEventListener('click', () => window.location.href = './menus.html');
    
    // Ürün kartına tıklandığında da menüye yönlendir
    node.style.cursor = 'pointer';
    node.addEventListener('click', (e) => {
      if (e.target === button) return; // Buton tıklamasında çift yönlendirme olmasın
      window.location.href = './menus.html';
    });
    
    listEl.appendChild(node);
  });
})();


