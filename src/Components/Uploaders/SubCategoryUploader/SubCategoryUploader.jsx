import React, { useState } from "react";
import Button from "../../../Styles/Button";
import "./SubCategoryUploader.scss";

const SubCategoryUploader = ({
  selectedCategory,
  categories,
  setCategories,
  setToggleSubCategoryUploader,
}) => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const addSubCategory = () => {
    const newCategories = [...categories];
    const filterdNewCategories = newCategories.filter(
      (el) => el.id === selectedCategory.id
    );
    if (
      !filterdNewCategories[0].subCategories.includes(subCategoryName) &&
      subCategoryName
    ) {
      filterdNewCategories[0].subCategories = [
        ...filterdNewCategories[0].subCategories,
        subCategoryName,
      ];
      setSubCategoryName("");
    } else {
      alert(subCategoryName + "is alredy exist / or it is empty");
    }
    
    setCategories([...newCategories]);
  };

  return (
    <div className="subCategoryUploader">
      <div className="subUploaderTitle">
        <h3>{selectedCategory.name}: Add Subcategory</h3>
        <span onClick={() => setToggleSubCategoryUploader(false)}>
          <i className="fas fa-x"></i>
        </span>
      </div>
      <div className="subUploaderCategory">
        <input
          type="text"
          value={subCategoryName}
          placeholder="Add SubCategory"
          onChange={(e) => setSubCategoryName(e.target.value)}
        />
      </div>
      <div className="add-btn">
        <Button type="add" onClickHandler={addSubCategory}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default SubCategoryUploader;
