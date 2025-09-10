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
    const found = items.find(i => i.productId === productId);
    if (found) { found.qty += qty; } else { items.push({ productId, qty }); }
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
    return read().map(i => ({ ...i, product: getProductById(i.productId) })).filter(i => i.product);
  }

  window.Cart = { read, write, add, set, remove, clear, getDetailed };
})();


