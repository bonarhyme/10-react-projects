import React, { useState } from "react"
import Data from "./data"
import "./Menu.css"
import Categories from "./Categories"
import Menu from "./Menu"

const allCategories = ["all", ...new Set(Data.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(Data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Data)
      return
    }
    const newItems = Data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section>
        <h1>Menu Items</h1>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
