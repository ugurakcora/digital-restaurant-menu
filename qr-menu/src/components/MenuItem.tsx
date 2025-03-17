import React, { useState } from "react";
import { MenuItem as MenuItemType } from "../types";

type MenuItemProps = MenuItemType;

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
}) => {
  const [imageError, setImageError] = useState(false);

  // Görsel yüklenemezse yedek görsel göster
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="menu-item">
      <div className="image-container">
        <img
          src={
            imageError
              ? "https://via.placeholder.com/400x300?text=Görsel+Yüklenemedi"
              : image
          }
          alt={name}
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="item-details">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{price} ₺</p>
      </div>
    </div>
  );
};

export default MenuItem;
