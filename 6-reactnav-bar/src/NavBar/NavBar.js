import React, { useState, useEffect, useRef } from "react"
import { Links, Social } from "./Data"
import { FaBars } from "react-icons/fa"
import "./NavBar.css"
import Register from "./Register"

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linkContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksRefHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksRefHeight}px`
    } else {
      linkContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <p className="logo">LOGO SPOT</p>
            <button
              onClick={() => setShowLinks(!showLinks)}
              className={showLinks ? "nav-toggle nav-toggler" : "nav-toggle "}
            >
              <FaBars />
            </button>
          </div>
          <div className="link-container" ref={linkContainerRef}>
            <ul className="links" ref={linksRef}>
              {Links.map((item) => {
                const { id, url, text } = item

                return (
                  <li key={id}>
                    <a href={url} className="anchor-tag">
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {Social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <Register />
    </>
  )
}

export default NavBar
