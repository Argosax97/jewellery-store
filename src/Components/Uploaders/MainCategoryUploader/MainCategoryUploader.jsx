import React, { useState } from "react";
import Button from "../../../Styles/Button";
import "./MainCategoryUploader.scss";
import defaultImage from "../../../assets/images/default-img.png";
const MainCategoryUploader = ({
  categories,
  setCategories,
  setToggleMainCategoryUploader,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [imgUploader, setImgUploader] = useState(defaultImage);
  const imageUploadHandler = (e) => {
    const selectedIMG = URL.createObjectURL(e.target.files[0]);
    if (selectedIMG) {
      setImgUploader(selectedIMG);
    }
  };
  const addCategory = () => {
    if (selectedGender && categoryName && imgUploader !== defaultImage) {
      setCategories([
        ...categories,
        {
          gender: selectedGender,
          name: categoryName,
          items: [
            {
              name: null,
              img: null,
              price: null,
            },
          ],
          img: imgUploader,
          id: Math.floor(Math.random() * 10000),
          subCategories: [],
        },
      ]);
      setToggleMainCategoryUploader(false);
    } else {
      alert("something is wrong");
    }
  };
  return (
    <div className="mainCategoryUploader">
      <div className="mainUploaderTitle">
        <h3>Add Category</h3>
        <span onClick={() => setToggleMainCategoryUploader(false)}>
          <i className="fa-thin fa-x"></i>
        </span>
      </div>
      <div className="mainUploaderGender">
        <Button
          type={selectedGender === "male" ? "genderSelected" : "gender"}
          onClickHandler={() => setSelectedGender("male")}
        >
          <i className="fa fa-mars" aria-hidden="true"></i>Male
        </Button>
        <Button
          type={selectedGender === "female" ? "genderSelected" : "gender"}
          onClickHandler={() => setSelectedGender("female")}
        >
          <i className="fa fa-venus" aria-hidden="true"></i>Female
        </Button>
      </div>
      <div className="mainUploaderCategory">
        <input
          type="text"
          placeholder="Add Category"
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <div className="mainUploaderImage">
        <label htmlFor="file-input">
          <img src={imgUploader} alt="" width="100%" />
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={imageUploadHandler}
          className="img-uploader"
        />
      </div>
      <div className="add-btn">
        <Button type="add" onClickHandler={addCategory}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default MainCategoryUploader;
