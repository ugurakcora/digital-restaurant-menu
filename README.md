# Lezzet Durağı - QR Menü Uygulaması

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Lezzet+Durağı+QR+Menü" alt="Lezzet Durağı QR Menü" width="600" />
</p>

## 📑 İçindekiler

- [Lezzet Durağı - QR Menü Uygulaması](#lezzet-durağı---qr-menü-uygulaması)
  - [📑 İçindekiler](#-i̇çindekiler)
  - [🍽 Proje Hakkında](#-proje-hakkında)
  - [✨ Özellikler](#-özellikler)
  - [🛠 Teknolojiler](#-teknolojiler)
  - [🚀 Kurulum](#-kurulum)
  - [📱 Kullanım](#-kullanım)
  - [📂 Proje Yapısı](#-proje-yapısı)
  - [👥 Katkıda Bulunma](#-katkıda-bulunma)
  - [📄 Lisans](#-lisans)
  - [📞 İletişim](#-i̇letişim)

## 🍽 Proje Hakkında

Lezzet Durağı QR Menü, kafe ve restoranlar için modern, kullanıcı dostu bir dijital menü çözümüdür. Bu uygulama, müşterilerin QR kodu tarayarak menüye erişmesini sağlar ve işletmelere menülerini kolayca güncelleyebilme imkanı sunar.

Uygulama, tatlılar, içecekler, kahvaltı ve ana yemekler gibi kategorilere ayrılmış menü öğelerini görüntüler. Kullanıcılar, kategorilere göre filtreleme yapabilir ve her bir menü öğesinin detaylarını (fiyat, açıklama, görsel) görebilir.

## ✨ Özellikler

- **Kategori Filtreleme**: Menü öğelerini kategorilere göre filtreleme
- **Duyarlı Tasarım**: Tüm cihazlarda (masaüstü, tablet, mobil) mükemmel görünüm
- **Modern UI/UX**: Şık ve kullanıcı dostu arayüz
- **Hızlı Yükleme**: Vite.js ile optimize edilmiş performans
- **Görsel Zenginlik**: Her menü öğesi için yüksek kaliteli görseller
- **Modüler Yapı**: Kolay bakım ve genişletme için modüler kod yapısı

## 🛠 Teknolojiler

- **Frontend**: React, TypeScript
- **Build Tool**: Vite.js
- **Styling**: CSS3 (Custom Properties)
- **Deployment**: Vercel

## 🚀 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone https://github.com/ugurakcora/digital-restaurant-menu.git

# Proje dizinine gidin
cd digital-restaurant-menu

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 📱 Kullanım

1. Ana sayfada tüm menü öğeleri görüntülenir
2. Kategoriler arasında geçiş yapmak için üst kısımdaki kategori butonlarını kullanın
3. Her menü öğesi için detaylı bilgileri (fiyat, açıklama) görüntüleyin
4. Mobil cihazlarda yatay kaydırma ile tüm kategorilere erişebilirsiniz

## 📂 Proje Yapısı

```
qr-menu/
├── public/             # Statik dosyalar
├── src/                # Kaynak kodları
│   ├── components/     # React bileşenleri
│   │   ├── Header.tsx  # Başlık bileşeni
│   │   ├── Main.tsx    # Ana içerik bileşeni
│   │   ├── Footer.tsx  # Alt bilgi bileşeni
│   │   ├── Logo.tsx    # Logo bileşeni
│   │   ├── MenuItem.tsx # Menü öğesi bileşeni
│   │   └── CategoryFilter.tsx # Kategori filtreleme bileşeni
│   ├── types/          # TypeScript tip tanımlamaları
│   ├── App.tsx         # Ana uygulama bileşeni
│   ├── App.css         # Ana stil dosyası
│   ├── index.css       # Global stiller
│   └── main.tsx        # Uygulama giriş noktası
├── index.html          # HTML şablonu
├── package.json        # Proje bağımlılıkları
├── tsconfig.json       # TypeScript yapılandırması
└── vite.config.ts      # Vite yapılandırması
```

## 👥 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Katkıda bulunmak için:

1. Bu repoyu forklayın
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

## 📞 İletişim

Uğur Akçora - [GitHub](https://github.com/ugurakcora) - [LinkedIn](https://linkedin.com/in/ugurakcora) - info@lezzetduragi.com

Proje Linki: [https://github.com/ugurakcora/digital-restaurant-menu](https://github.com/ugurakcora/digital-restaurant-menu)

---

<div align="center">
  <p>❤️ ile Türkiye'de geliştirilmiştir</p>
</div>
