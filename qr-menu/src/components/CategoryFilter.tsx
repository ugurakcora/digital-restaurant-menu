import React from "react";
import { Category } from "../types";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="categories">
      <button
        className={activeCategory === null ? "active" : ""}
        onClick={() => onCategoryChange(null)}
      >
        Tüm Menü
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={activeCategory === category.id ? "active" : ""}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
