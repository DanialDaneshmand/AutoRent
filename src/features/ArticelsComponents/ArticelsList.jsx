import React from "react";
import ArticelItem from "../Articels/ArticelItem";
import { articles } from "../../../data/data";
import LatestArticles from "./LatestArticles";

function ArticelsList() {
  return (
    <div className=" grid grid-cols-12 w-full max-w-screen-xl">
      <div className="col-span-12 sm:col-span-8 pl-0 sm:pl-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((item) => (
            <div key={item.id}>
              <ArticelItem item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-4 sm:mt-0 col-span-12 sm:col-span-4">
        <LatestArticles/>
      </div>
    </div>
  );
}

export default ArticelsList;
