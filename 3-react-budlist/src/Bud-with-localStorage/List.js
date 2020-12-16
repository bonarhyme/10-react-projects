import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

const List = ({ items, removeItem, editItem }) => {
  return (
    <article>
      {items.map((item) => {
        const { id, name } = item
        return (
          <div className="single-item" key={id}>
            <p>{name}</p>
            <button type="submit" className="edit" onClick={() => editItem(id)}>
              <FaEdit />
            </button>
            <button
              type="submit"
              className="trash"
              onClick={() => removeItem(id)}
            >
              <FaTrash />
            </button>
          </div>
        )
      })}
    </article>
  )
}

export default List
