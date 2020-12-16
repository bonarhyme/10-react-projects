import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext, useGlobalContext } from "./Context"

const Home = () => {
//   const data = useContext(AppContext) This method means that you have to import useContext and AppContext
    // This method uses a custom hook
    const {openSidebar, openModal} = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>SHOW MODAL</button>
    </main>
  )
}

export default Home
