// Sepet yardımcıları (localStorage)
(function initCartLib() {
  const STORAGE_KEY = 'bakery_cart_v1';

  function read() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
  }
  function write(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  }

  function add(productId, qty = 1) {
    const items = read();
    const found = items.find(i => i.productId === productId && !i.isPackage);
    if (found) { found.qty += qty; } else { items.push({ productId, qty, isPackage: false }); }
    write(items);
  }
  
  function addPackage(packageKey) {
    const items = read();
    const packageId = `package-${packageKey}`;
    const found = items.find(i => i.productId === packageId && i.isPackage);
    if (found) { found.qty += 1; } else { 
      items.push({ 
        productId: packageId, 
        qty: 1, 
        isPackage: true,
        packageKey: packageKey 
      }); 
    }
    write(items);
  }
  function set(productId, qty) {
    let items = read();
    items = items.map(i => i.productId === productId ? { ...i, qty } : i).filter(i => i.qty > 0);
    write(items);
  }
  function remove(productId) {
    const items = read().filter(i => i.productId !== productId);
    write(items);
  }
  function clear() { write([]); }

  function getDetailed() {
    return read().map(i => {
      if (i.isPackage) {
        const pkg = MENU_PACKAGES[i.packageKey];
        if (!pkg) return null;
        const pricing = calculatePackagePrice(i.packageKey);
        return {
          ...i,
          isPackage: true,
          package: pkg,
          pricing: pricing,
          displayPrice: pricing.discountedPrice
        };
      } else {
        const product = getProductById(i.productId);
        return product ? { ...i, product, displayPrice: product.price } : null;
      }
    }).filter(i => i !== null);
  }

  window.Cart = { read, write, add, addPackage, set, remove, clear, getDetailed };
})();


