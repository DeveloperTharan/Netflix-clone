import React from "react";
import categoryList from "./category/categoryList";
import MovieRow from "./MovieRow";

function Row() {

  return (
    <>
      {categoryList.category.map((items, index) => (
        <div key={items.id}>
          <h2 className="text-gray-400 text-xl 2xl:text-2xl font-bold p-4">
            {items.name}
          </h2>
          <MovieRow 
          categoryId={items.id}
          rowId={items.rowid} 
          />
        </div>
      ))}
    </>
  );
}

export default Row;
