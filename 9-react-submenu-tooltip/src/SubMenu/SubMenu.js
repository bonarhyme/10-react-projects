import React, { useState, useRef, useEffect } from "react"
import { useGlobalContext } from "./Context"

const SubMenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  // I destructured page and links from page. Note, I can still destructure it as a seperate variable.
  const containerRef = useRef(null)
  const [columns, setColumns] = useState("col-2")

  useEffect(() => {
    setColumns("col-2")
    const ExactSubmenu = containerRef.current
    const { center, bottom } = location
    ExactSubmenu.style.left = `${center}px`
    ExactSubmenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns("col-3")
    }
    if (links.length > 3) {
      setColumns("col-4")
    }
  }, [location, links])
  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={containerRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default SubMenu
