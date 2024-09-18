import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <div className=" flex justify-center">
      <div className="my-32 mt-[700px]  md:mt-32 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 gap-16 w-full max-w-screen-lg mx-4">
        <CategoryItem title=" کوپه" />
        <CategoryItem title=" اسپورت" />
        <CategoryItem title=" کروک" />
        <CategoryItem title="سدان" />
      </div>
    </div>
  );
}

export default CategoryList;
