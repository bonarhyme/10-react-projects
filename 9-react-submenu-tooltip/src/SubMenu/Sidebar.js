import React from "react"
import Sublinks from "./Data"
import { useGlobalContext } from "./Context"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside
      className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
    >
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {Sublinks.map((item, index) => {
            const { page, links } = item
            return (
              <article key="index">
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a href={url} key={index}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
