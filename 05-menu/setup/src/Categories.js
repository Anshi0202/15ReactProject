import React from "react";

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, i) => {
        return (
          <button
            key={i}
            onClick={() => filterCategory(cat)}
            className="filter-btn"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
