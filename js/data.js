// Pastane ürünleri - Anasayfa için vitrin ürünleri (daha fazla çeşit)
const HOME_PRODUCTS = [
  { id: 'croissant-tereyagli', title: 'Tereyağlı Kruvasan', desc: 'Çıtır kabuk, yumuşak iç', price: 45, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-su', title: 'Su Böreği', desc: 'Ev yapımı, katmerli', price: 85, img: 'https://images.unsplash.com/photo-1617195737496-0f37f631749a?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-patatesli', title: 'Patatesli Poğaça', desc: 'Baharatlı patates', price: 38, img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-profiterol', title: 'Profiterol', desc: 'Çikolatalı sos', price: 75, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'ekmek-somun', title: 'Somun Ekmek', desc: 'Günlük fırın', price: 25, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop' },
  { id: 'pasta-cilek', title: 'Çilekli Pasta', desc: 'Dilim pasta', price: 95, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop' },
  { id: 'kurabiye-tereyagli', title: 'Tereyağlı Kurabiye', desc: 'El yapımı', price: 55, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
  { id: 'simit-susam', title: 'Susamlı Simit', desc: 'Taze, çıtır', price: 15, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop' },
  { id: 'muffin-cikolata', title: 'Çikolatalı Muffin', desc: 'Damla çikolatalı', price: 42, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-peynirli-home', title: 'Peynirli Börek', desc: 'Taze beyaz peynir', price: 80, img: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6d7?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-kasarli-home', title: 'Kaşarlı Poğaça', desc: 'Yumuşacık, günlük', price: 35, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'acma-susam', title: 'Susamlı Açma', desc: 'Yumuşak hamur', price: 28, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-sutlac-home', title: 'Fırın Sütlaç', desc: 'Geleneksel tarif', price: 60, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'sandwich-tost', title: 'Tost Sandviç', desc: 'Kaşar, domates', price: 48, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop' },
  { id: 'pasta-cikolata-home', title: 'Çikolatalı Pasta', desc: 'Ganajlı dilim', price: 105, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop' },
];

// Menü sayfası için detaylı ürünler (20+ adet)
const MENU_PRODUCTS = [
  { id: 'borek-kiymali', title: 'Kıymalı Börek', desc: 'El açması, tereyağlı', price: 95, weight: '250g', img: 'https://images.unsplash.com/photo-1617195737496-0f37f631749a?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-peynirli', title: 'Peynirli Börek', desc: 'Taze beyaz peynir', price: 85, weight: '220g', img: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6d7?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-ispanak', title: 'Ispanaklı Börek', desc: 'Taze ıspanak, ricotta', price: 90, weight: '240g', img: 'https://images.unsplash.com/photo-1617195737496-0f37f631749a?q=80&w=900&auto=format&fit=crop' },
  { id: 'borek-patates', title: 'Patatesli Börek', desc: 'Baharatlı patates', price: 80, weight: '260g', img: 'https://images.unsplash.com/photo-1617195737496-0f37f631749a?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-kasarli', title: 'Kaşarlı Poğaça', desc: 'Yumuşacık, günlük', price: 35, weight: '120g', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-zeytinli', title: 'Zeytinli Poğaça', desc: 'Siyah zeytinli', price: 32, weight: '110g', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-patatesli-menu', title: 'Patatesli Poğaça', desc: 'Baharatlı patates', price: 38, weight: '130g', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=900&auto=format&fit=crop' },
  { id: 'pogaca-kiymali', title: 'Kıymalı Poğaça', desc: 'Baharatlı kıyma', price: 42, weight: '140g', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=900&auto=format&fit=crop' },
  { id: 'croissant-sade', title: 'Sade Kruvasan', desc: 'Klasik Fransız', price: 40, weight: '80g', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'croissant-cikolata', title: 'Çikolatalı Kruvasan', desc: 'Bitter çikolata', price: 48, weight: '90g', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'croissant-badem', title: 'Bademli Kruvasan', desc: 'Kavrulmuş badem', price: 52, weight: '95g', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-sutlac', title: 'Sütlaç', desc: 'Fırın sütlaç', price: 60, weight: '180g', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-baklava', title: 'Fıstıklı Baklava', desc: 'Geleneksel', price: 120, weight: '100g', img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-kunefe', title: 'Künefe', desc: 'Peynirli, şerbetli', price: 85, weight: '200g', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'tatli-kazandibi', title: 'Kazandibi', desc: 'Geleneksel tarif', price: 65, weight: '150g', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=900&auto=format&fit=crop' },
  { id: 'ekmek-kepekli', title: 'Kepekli Ekmek', desc: 'Tam buğday', price: 28, weight: '500g', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop' },
  { id: 'ekmek-cevizli', title: 'Cevizli Ekmek', desc: 'Kuru cevizli', price: 35, weight: '400g', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop' },
  { id: 'pasta-cilek-menu', title: 'Çilekli Pasta', desc: 'Dilim pasta', price: 95, weight: '120g', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop' },
  { id: 'pasta-cikolata', title: 'Çikolatalı Pasta', desc: 'Ganajlı', price: 105, weight: '130g', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop' },
  { id: 'kurabiye-findik', title: 'Fındıklı Kurabiye', desc: 'Kavrulmuş fındık', price: 58, weight: '150g', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
  { id: 'kurabiye-ceviz', title: 'Cevizli Kurabiye', desc: 'İç cevizli', price: 62, weight: '160g', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
  { id: 'muffin-muzlu', title: 'Muzlu Muffin', desc: 'Taze muz', price: 38, weight: '100g', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
  { id: 'muffin-vanilyali', title: 'Vanilyalı Muffin', desc: 'Vanilya aromalı', price: 40, weight: '95g', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop' },
];

const MENUS = {
  two: {
    id: 'menu-two',
    title: '2 Kişilik Menü',
    description: 'İki kişi için ideal porsiyon',
    products: [
      { productId: 'borek-kiymali' },
      { productId: 'borek-peynirli' },
      { productId: 'croissant-sade' },
      { productId: 'pogaca-kasarli' },
      { productId: 'pogaca-zeytinli' },
      { productId: 'tatli-sutlac' },
    ],
  },
  four: {
    id: 'menu-four',
    title: '4 Kişilik Menü',
    description: 'Aile boyu doyurucu seçenekler',
    products: [
      { productId: 'borek-kiymali' },
      { productId: 'borek-peynirli' },
      { productId: 'borek-ispanak' },
      { productId: 'pogaca-kasarli' },
      { productId: 'pogaca-zeytinli' },
      { productId: 'pogaca-patatesli-menu' },
      { productId: 'croissant-sade' },
      { productId: 'croissant-cikolata' },
      { productId: 'tatli-baklava' },
      { productId: 'tatli-sutlac' },
      { productId: 'ekmek-kepekli' },
    ],
  },
  mix: {
    id: 'menu-mix',
    title: 'Karışık Menü',
    description: 'Çeşitli lezzetlerden oluşan başlangıç menüsü',
    products: [
      { productId: 'borek-kiymali' },
      { productId: 'pogaca-kasarli' },
      { productId: 'pogaca-zeytinli' },
      { productId: 'pogaca-patatesli-menu' },
      { productId: 'croissant-sade' },
      { productId: 'croissant-cikolata' },
      { productId: 'muffin-muzlu' },
      { productId: 'kurabiye-findik' },
      { productId: 'tatli-kazandibi' },
    ],
  },
};

function getProductById(id) { 
  return MENU_PRODUCTS.find(p => p.id === id) || HOME_PRODUCTS.find(p => p.id === id); 
}

function getMenuProductById(id) { 
  return MENU_PRODUCTS.find(p => p.id === id); 
}


