import React, { useState } from "react";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header";
import Items from "./Components/Items";

const App = () => {
  const [categories, setCategories] = useState([
    {
      gender: "male",
      name: "Ring",
      items: [
        {
          name: "wedding ring",
          img: "",
          price: 50,
        },
      ],
      img: "https://www.pngall.com/wp-content/uploads/2016/07/Ring-PNG-File.png",
      id: Math.floor(Math.random() * 10000),
      subCategories: ["asd", "zxv"],
    },
    {
      gender: "female",
      name: "Necklace",
      items: [
        {
          name: "wedding ring",
          img: "",
          price: 50,
        },
      ],
      img: "https://www.pngall.com/wp-content/uploads/8/Silver-Necklace.png",
      id: Math.floor(Math.random() * 10000),
      subCategories: ["dkj", "jbjbj"],
    },
  ]);
console.log(categories)
  return (
    <div>
      <Header />
      <Categories categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default App;
