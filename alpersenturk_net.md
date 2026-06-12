# 🌐 alpersenturk.net — 8-Bit İnteraktif Portföy Planı

> **Konsept:** Ziyaretçilerin girdiklerinde bir karakter seçip yön tuşlarıyla gezebildikleri, RPG esintili interaktif bir portföy ve kişisel marka sitesi.
> **Felsefe:** Klasik, sıkıcı CV sitelerinden uzak, Alper'in "experience designer" ve "storyteller" kimliğini doğrudan deneyimleten bir arayüz.

---

## 🗺️ Dünya Haritası ve Bölgeler (Sitedeki Bölümler)

Karakterin harita üzerinde yürüyerek girebileceği 4 ana yapı/bölge olacak:

### 1. 🍻 Han (The Tavern) — Narrative Design & Storytelling
*   **İçerik:** D&D / RPG DM deneyimleri, dünya kurma (world-building), kurumsal projelerdeki hikaye tasarımları.
*   **Vibe:** Loş ışıklar, ahşap masalar, şömine başında bir DM karakteri.

### 2. 🔨 Atölye (The Workshop) — Deneyim Tasarımı & Kolaylaştırıcılık
*   **İçerik:** Girişimcilik Vakfı'ndaki sistem kuruculuğu, tasarlanan değerlendirme sistemleri, etik ve deneyim odaklı atölyeler/workshoplar.
*   **Vibe:** Taslak kağıtları, çarklar, planlama tahtaları.

### 3. 📚 Kütüphane (The Library) — Yazarlık & Eserler
*   **İçerik:** `Zapır Zupur Kalem` projesinin detayları, çocuk hikayesi taslakları, yazarlık çalışmaları.
*   **Vibe:** Yüksek kitaplıklar, büyülü kalemler, parıldayan harfler.

### 4. ☕ Kahve Dükkanı (The Cafe) — İletişim & Destek
*   **İçerik:** "BuyMeACoffee" entegrasyonu (kahve ısmarlama) ve danışmanlık/tanışma randevuları için takvim entegrasyonu (Calendly vb.).
*   **Vibe:** Cozy bir kafe, bar tabureleri, kahve fincanı sprite'ları.

---

## 🛠️ Teknik Altyapı ve Stack

*   **Framework:** React + Vite (Hızlı, hafif ve kolayca deploy edilebilir).
*   **Stil/CSS:** Vanilla CSS veya Tailwind CSS (Temiz ve sade animasyonlar için).
*   **Hareket Mekaniği:** HTML5 Canvas yerine, DOM-tabanlı basit bir 2D Grid sistemi veya 2D üstten görünümlü (Top-down) basit bir JavaScript oyun döngüsü. Bu hem performansı artırır hem de SEO/erişilebilirlik açısından metinlerin taranmasını kolaylaştırır.
*   **Sprite Assets:** 8-bit piksel karakter sprite'ları (Pelin, DM, Gezgin vb.) ve basit karo (tile) setleri.

---

## 📅 Yol Haritası (Faz 1)

1.  **Varlıkların (Asset) Belirlenmesi:** Hazır piksel karakterlerin ve karo görsellerinin klasörlenmesi.
2.  **Temel Hareket Motorunun Yazılması:** Karakterin ekran üzerinde yön tuşları (W-A-S-D) ve mouse tıklaması ile engellere çarpmadan hareket etmesinin sağlanması.
3.  **Bölge Tetikleyicileri (Triggers):** Karakter bir binanın kapısına geldiğinde ekranda o bölüme ait modal/sayfanın yumuşak bir geçişle (fade-in) açılması.
4.  **İçerik Entegrasyonu:** Han, Atölye, Kütüphane ve Kahve dükkanı içeriklerinin markdown veya JSON olarak sisteme bağlanması.
