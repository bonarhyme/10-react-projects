 import React, { useState, useEffect } from "react"
import Data from "./data"
import "./Lorem.css"

const Lorem = () => {
  const [data, setData] = useState(Data.slice(0, 1))
  const [number, setNumber] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    let newNumber = parseInt(number)
    if (number <= 0) {
      newNumber = 1
    }
    if (number > Data.length - 1) {
      newNumber = Data.length - 1
    }
    setData(Data.slice(0, newNumber))
  }

  return (
    <section>
      <div className="container">
        <h1>Tired of boring Lorem ipsums?</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Enter Paragraph No: </label>
          <input
            type="number"
            id="number"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>
        <div className="content">
          {data.map((text, i) => {
            return <p key={i}>{text}</p>
          })}
        </div>
      </div>
    </section>
  )
}

export default Lorem
