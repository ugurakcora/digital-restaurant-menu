import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Category, MenuItem } from "./types";

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Örnek kategoriler
  const categories: Category[] = [
    { id: "tatli", name: "Tatlılar" },
    { id: "icecek", name: "İçecekler" },
    { id: "kahvalti", name: "Kahvaltı" },
    { id: "ana-yemek", name: "Ana Yemekler" },
  ];

  // Örnek menü öğeleri
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Profiterol",
      description: "Çikolata soslu profiterol",
      price: 75,
      category: "tatli",
      image:
        "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZml0ZXJvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Cheesecake",
      description: "Frambuazlı cheesecake",
      price: 85,
      category: "tatli",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Türk Kahvesi",
      description: "Geleneksel Türk kahvesi",
      price: 30,
      category: "icecek",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVya2lzaCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Latte",
      description: "Sütlü espresso",
      price: 40,
      category: "icecek",
      image:
        "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdHRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Serpme Kahvaltı",
      description: "2 kişilik serpme kahvaltı",
      price: 250,
      category: "kahvalti",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2lzaCUyMGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Köfte",
      description: "Izgara köfte porsiyon",
      price: 120,
      category: "ana-yemek",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdGJhbGxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="app-container">
      <Header
        title="Lezzet Durağı"
        subtitle="En taze malzemelerle hazırlanan özel lezzetlerimizi keşfedin"
      />

      <Main
        categories={categories}
        menuItems={menuItems}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <Footer
        copyright="© 2023 Lezzet Durağı - Tüm Hakları Saklıdır"
        address="Atatürk Cad. No:123 İstanbul/Türkiye"
        contact="Tel: (0212) 123 45 67 | info@lezzetduragi.com"
      />
    </div>
  );
}

export default App;
