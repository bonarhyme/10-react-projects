import React from "react"
import Home from "./Home"
import Sidebar from "./Sidebar"
import Modal from "./Modal"
import "./ModalSidebar.css"

const ModalSidebar = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default ModalSidebar
