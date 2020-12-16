import React from "react"

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="button">
      {categories.map((category, i) => {
        return (
          <button key={i} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
