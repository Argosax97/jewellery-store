import React from "react";

const Items = ({ categories }) => {
  return (
    <div>
      {categories.map((element) => {
        return element.items.map((el) => {
          return (
            <div key={element.id}>
              <img src={el.img} alt="" />
              <p>{el.name}</p>
              <span>
                {el.price} <b>$</b>
              </span>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Items;
