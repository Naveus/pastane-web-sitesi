# 🥐 Pastane Web Sitesi

Basit bir sipariş sistemi mantığıyla çalışan pastane web sitesi. Kullanıcılar tıpkı Getir veya benzeri uygulamalarda olduğu gibi pastane ürünlerini görüntüleyip, sepete ekleyebilir ve sipariş verebilir.

## ✨ Özellikler

- **Anasayfa**: Ürünler 3'lü sıralar halinde listelenir
- **Menüler**: 2 Kişilik, 4 Kişilik ve Karışık menü seçenekleri
- **Sepet**: Ürün ekleme/çıkarma, sıralama, toplam hesaplama
- **Responsive tasarım**: Mobil ve masaüstü uyumlu
- **LocalStorage**: Sepet verilerini tarayıcıda saklar

## 🚀 Kullanım

1. `index.html` dosyasını tarayıcınızda açın
2. Ürünleri inceleyin ve "Sepete Ekle" butonuna tıklayın
3. Üst menüden "Menüler" sayfasında özel menüleri keşfedin
4. "Siparişim" sayfasında sepetinizi yönetin

## 📁 Proje Yapısı

```
Basic.Web/
├── index.html          # Anasayfa
├── menus.html          # Menüler sayfası
├── cart.html           # Sepet sayfası
├── css/
│   └── styles.css      # Ana stil dosyası
└── js/
    ├── common.js       # Ortak fonksiyonlar
    ├── data.js         # Ürün ve menü verileri
    ├── cart.js         # Sepet yönetimi
    └── pages/
        ├── home.js     # Anasayfa logic
        ├── menus.js    # Menüler sayfası logic
        └── cart-page.js # Sepet sayfası logic
```

## 🛠️ Teknolojiler

- **HTML5**: Sayfa yapısı
- **CSS3**: Stil ve responsive tasarım
- **Vanilla JavaScript**: Dinamik işlevsellik
- **LocalStorage**: Veri saklama

## 📱 Sayfalar

### Anasayfa
- Tüm ürünlerin 3 sütunlu gösterimi
- Her ürün için fotoğraf, açıklama ve fiyat
- "Sepete Ekle" butonu

### Menüler
- 3 farklı menü seçeneği
- Menü seçildikten sonra ürünlerin gösterimi
- Her ürün için "Sepete Ekle" işlevi

### Sepet
- Eklenen ürünlerin listesi
- Fiyata göre sıralama (artan/azalan)
- Adet artırma/azaltma (+/-)
- Toplam fiyat hesaplama
- Sipariş onaylama

## 🎨 Tasarım

- Modern dark tema
- Responsive grid sistemi
- Smooth hover efektleri
- Kullanıcı dostu arayüz

---

*Bu proje, basit bir pastane sipariş sistemi örneğidir.*
