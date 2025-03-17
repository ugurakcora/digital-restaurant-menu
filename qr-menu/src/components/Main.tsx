import React from "react";
import CategoryFilter from "./CategoryFilter";
import MenuItem from "./MenuItem";
import { Category, MenuItem as MenuItemType } from "../types";

interface MainProps {
  categories: Category[];
  menuItems: MenuItemType[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const Main: React.FC<MainProps> = ({
  categories,
  menuItems,
  activeCategory,
  onCategoryChange,
}) => {
  const filteredItems = activeCategory
    ? menuItems.filter((item) => item.category === activeCategory)
    : menuItems;

  return (
    <main className="main-content">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className="menu-items">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
