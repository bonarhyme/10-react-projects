import React, { useState, useEffect } from "react"
import Alert from "./Alert"
import List from "./List"
import "./Bud.css"

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return []
  }
}
const Bud = () => {
  const [name, setName] = useState("")
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // Display Alert
      showAlert(true, "danger", "Please enter value")
    } else if (name && isEditing) {
      //  Deal with edit functioonalit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, name: name }
          }
          return item
        })
      )
      setName("")
      setIsEditing(false)
      setEditId(null)
      showAlert(true, "success", "Value changed")
    } else {
      //   Deal with adding Item
      showAlert(true, "success", "Item added to the list")
      const newItem = { id: new Date().getTime().toString(), name }
      setList([...list, newItem])
      setName("")
    }
  }
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type })
  }
  const clearList = () => {
    setList([])
    showAlert(true, "danger", "Empty list")
  }
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, "danger", "Item removed")
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.name)
    console.log(specificItem.name)
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  return (
    <section className="section-center">
      <div className="bud-container">
        <form className="form-container" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Bud Lists</h3>
          <div className="form-control">
            <input
              type="text"
              className="bud"
              placeholder="E.g Books"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="list-containerr">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              Clear items
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Bud
