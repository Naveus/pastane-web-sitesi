(function renderMenusPage() {
  const productContainer = document.getElementById('menu-products');
  const packageContainer = document.getElementById('menu-package-list');
  if (!productContainer || !packageContainer) return;

  const productTemplate = document.getElementById('product-card-template');
  const packageTemplate = document.getElementById('menu-package-template');
  const buttons = document.querySelectorAll('.menu-selector [data-menu]');

  // Menü paketlerini render et
  function renderPackages() {
    packageContainer.innerHTML = '';
    Object.keys(MENU_PACKAGES).forEach(key => {
      const pkg = MENU_PACKAGES[key];
      const pricing = calculatePackagePrice(key);
      
      const node = packageTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector('.package-title').textContent = pkg.title;
      node.querySelector('.package-desc').textContent = pkg.description;
      
      // Paket içeriği
      const itemsContainer = node.querySelector('.package-items');
      itemsContainer.innerHTML = '<h4>Paket İçeriği:</h4><ul class="package-item-list"></ul>';
      const itemList = itemsContainer.querySelector('.package-item-list');
      
      pkg.products.forEach(item => {
        const product = getProductById(item.productId);
        if (product) {
          const li = document.createElement('li');
          li.textContent = `${item.quantity}x ${product.title}`;
          itemList.appendChild(li);
        }
      });
      
      // Fiyat bilgileri
      node.querySelector('.original-price').textContent = `${pricing.originalPrice} TL`;
      node.querySelector('.package-price').textContent = `${pricing.discountedPrice} TL`;
      
      // Sepete ekle butonu
      node.querySelector('.add-package-to-cart').addEventListener('click', () => {
        Cart.addPackage(key);
        // Toast mesajı göster (opsiyonel)
        alert(`${pkg.title} sepete eklendi!`);
      });
      
      packageContainer.appendChild(node);
    });
  }

  // Tekli ürünleri render et
  function showProducts(category = 'all') {
    productContainer.innerHTML = '';
    const products = getProductsByCategory(category);
    
    products.forEach(p => {
      const node = productTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector('.thumb').src = p.img;
      node.querySelector('.thumb').alt = p.title;
      node.querySelector('.title').textContent = p.title;
      node.querySelector('.desc').textContent = `${p.desc} • ${p.weight}`;
      node.querySelector('.price').textContent = `${p.price} TL`;
      node.querySelector('.add-to-cart').addEventListener('click', () => Cart.add(p.id, 1));
      
      // Masonry hover efekti ekle
      node.classList.add('masonry-item');
      
      productContainer.appendChild(node);
    });
  }

  // Kategori butonları
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showProducts(btn.getAttribute('data-menu'));
  }));

  // İlk yükleme
  renderPackages();
  showProducts('all');
})();


