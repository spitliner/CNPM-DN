import React from "react";
import "./Categories.css";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container categories-wrapper">
      {" "}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {" "}
            {category}{" "}
          </button>
        );
      })}{" "}
    </div>
  );
};

export default Categories;
