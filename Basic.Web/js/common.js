(() => {
  const CART_KEY = 'bakery_cart_v1';
  function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; }
  }
  function countItems() {
    const items = readCart();
    return items.reduce((sum, it) => sum + (it.qty || 0), 0);
  }
  function updateCartBadge() {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = String(countItems());
  }
  document.addEventListener('visibilitychange', updateCartBadge);
  window.addEventListener('storage', updateCartBadge);
  updateCartBadge();
})();


