import React from "react"

const Menu = ({ menuItems }) => {
  return (
    <div className="container">
      {menuItems.map((item) => {
        const { id, title, img, desc, price } = item
        return (
          <article key={id}>
            <div className="image-container">
              <img src={img} alt={title} />
            </div>
            <div className="text">
              <header>
                <h4>{title}</h4>
                <h4>N{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
