import React from "react";
import { CATEGORY } from "../config/constants";

const Categories = ({selectedCategory = CATEGORY.TODO,  onCategoryChange = () =>{}}) => {

  const options = [CATEGORY.TODO, CATEGORY.IN_PROGRESS, CATEGORY.COMPLETED];

  const handleChange = (selected_index) => {
    onCategoryChange(options[selected_index]);
  }

  return (
    <>
      {options.map((option, index) => (
        <div
          className={`inline-flex mr-6 p-2 border-2 rounded-2xl text-sm cursor-pointer text-center justify-center  border-[#8294C4] ${
            option === selectedCategory ? "bg-[#7077A1] border-gray-500 shadow-lg text-white" : ""
          }`}
          onClick={() => handleChange(index)}
          key={index}
        >
          {option}
        </div>
      ))}
    </>
  );
};

export default Categories;
