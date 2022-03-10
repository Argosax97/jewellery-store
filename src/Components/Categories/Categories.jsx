import React, { useState } from "react";
import "./Categories.scss";
import Button from "../../Styles/Button";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import MainCategoryUploader from "../Uploaders/MainCategoryUploader/MainCategoryUploader";
import SubCategoryUploader from "../Uploaders/SubCategoryUploader/SubCategoryUploader";

const Categories = ({ categories, setCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    idx:null,
    name: null,
    selected: false,
  });
  const [selectGender, setSelectGender] = useState("")
  const [toggleMainCategoryUploader, setToggleMainCategoryUploader] =
    useState(false);
  const [toggleSubCategoryUploader, setToggleSubCategoryUploader] =
    useState(false);
  return (
    <div className="categories-container">
      <div className="genders">
        <Button
          type={selectGender === "male" ? "genderSelected" : "gender"}
          onClickHandler={() => setSelectGender("male")}
        >
          <i className="fa fa-mars" aria-hidden="true"></i>
          Male
        </Button>
        <Button
          type={selectGender === "female" ? "genderSelected" : "gender"}
          onClickHandler={() => setSelectGender("female")}
        >
          <i className="fa fa-venus" aria-hidden="true"></i>
          Female
        </Button>
      </div>
      <div className="categories">
        <MainCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {selectedCategory.selected && (
          <SubCategory
            categories={categories}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
      <div className="uploaderBtns">
        <div style={{ position: "relative" }}>
          <Button
            type="plus-lg"
            onClickHandler={() =>
              setToggleMainCategoryUploader(!toggleMainCategoryUploader)
            }
          />
          {toggleMainCategoryUploader && (
            <MainCategoryUploader
              categories={categories}
              setCategories={setCategories}
              setToggleMainCategoryUploader={setToggleMainCategoryUploader}
            />
          )}
        </div>
        <div style={{ position: "relative" }}>
          {selectedCategory.selected && (
            <Button
              type="plus-sm"
              onClickHandler={() =>
                setToggleSubCategoryUploader(!toggleSubCategoryUploader)
              }
            />
          )}
          {toggleSubCategoryUploader && (
            <SubCategoryUploader
              selectedCategory={selectedCategory}
              categories={categories}
              setCategories={setCategories}
              setToggleSubCategoryUploader={setToggleSubCategoryUploader}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
