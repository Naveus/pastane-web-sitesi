// Basit veri modeli ve örnek veriler
const PRODUCTS = [
  { id: 'borek-kiymali', title: 'Kıymalı Börek', desc: 'El açması, tereyağlı', price: 95, img: 'https://images.unsplash.com/photo-1617195737496-0f37f631749a?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-peynirli', title: 'Peynirli Börek', desc: 'Taze beyaz peynir', price: 85, img: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6d7?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-kasarli', title: 'Kaşarlı Poğaça', desc: 'Yumuşacık, günlük', price: 35, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-zeytinli', title: 'Zeytinli Poğaça', desc: 'Siyah zeytinli', price: 32, img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-sutlac', title: 'Sütlaç', desc: 'Fırın sütlaç', price: 60, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-baklava', title: 'Fıstıklı Baklava (100g)', desc: 'Geleneksel', price: 120, img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=900&auto=format&fit=crop' },
];

const MENUS = {
  two: {
    id: 'menu-two',
    title: '2 Kişilik Menü',
    products: [
      { productId: 'borek-peynirli' },
      { productId: 'pogaca-kasarli' },
      { productId: 'tatli-sutlac' },
    ],
  },
  four: {
    id: 'menu-four',
    title: '4 Kişilik Menü',
    products: [
      { productId: 'borek-kiymali' },
      { productId: 'borek-peynirli' },
      { productId: 'pogaca-zeytinli' },
      { productId: 'tatli-baklava' },
    ],
  },
  mix: {
    id: 'menu-mix',
    title: 'Karışık Menü',
    products: [
      { productId: 'borek-kiymali' },
      { productId: 'pogaca-kasarli' },
      { productId: 'pogaca-zeytinli' },
    ],
  },
};

function getProductById(id) { return PRODUCTS.find(p => p.id === id); }


