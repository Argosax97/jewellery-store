import React from "react";
import "./MainCategory.scss";

const MainCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const selectItemHandler = (e) => {
    if (selectedCategory.selected && selectedCategory.id === e.id) {
      setSelectedCategory({ id: null, name: null, selected: false });
    } else {
      setSelectedCategory({ id: e.id, name: e.name, selected: true });
    }
  };
  return (
    <div className="main-category-container">
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            className={
              selectedCategory.id === item.id
                ? "selected-category-items"
                : "category-items"
            }
            onClick={() => selectItemHandler(item)}
          >
            <img src={item.img} alt={item.name} width={100} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainCategory;
