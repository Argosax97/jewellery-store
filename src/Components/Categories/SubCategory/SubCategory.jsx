import React, { useState }from "react";
import "./SubCategory.scss";
const SubCategory = ({ categories, selectedCategory }) => {
  const [selectedSub, setselectedSub] = useState(false);
  return (
    <div >
      {categories
        .find((element) => element.id === selectedCategory.id)
        .subCategories.map((el, index) => {
          return (
            <div
              key={index}
              className="sub-category"
              onClick={() => setselectedSub(!selectedSub)}
            >
              {el}
              <div
                className={selectedSub ? "bot-line-selected" : "bot-line"}
              ></div>
            </div>
          );
        })}
    </div>
  );
};

export default SubCategory;
