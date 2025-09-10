(function renderHome() {
  const listEl = document.getElementById('product-list');
  if (!listEl) return;

  const template = document.getElementById('product-card-template');

  PRODUCTS.forEach(p => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.thumb').src = p.img;
    node.querySelector('.thumb').alt = p.title;
    node.querySelector('.title').textContent = p.title;
    node.querySelector('.desc').textContent = p.desc;
    node.querySelector('.price').textContent = `${p.price} TL`;
    node.querySelector('.add-to-cart').addEventListener('click', () => Cart.add(p.id, 1));
    listEl.appendChild(node);
  });
})();


