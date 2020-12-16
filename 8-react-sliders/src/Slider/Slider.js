import React, { useState, useEffect } from "react"
import Data from "./data"
import "./Slider.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Slider = () => {
  const [index, setIndex] = useState(0)
  const { name, image, title, quote } = Data[index]

  const checkIndex = (index) => {
    if (index < 0) {
      return Data.length - 1
    }
    if (index > Data.length - 1) {
      return 0
    }
    return index
  }
  const prevSlider = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return checkIndex(newIndex)
    })
  }
  const nextSlider = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return checkIndex(newIndex)
    })
  }
  useEffect(() => {
    const autoSlider = setInterval(() => {
      setIndex(checkIndex(index + 1))
    }, 5000)
    return () => {
      clearInterval(autoSlider)
    }
  }, [index])

  return (
    <section>
      <div className="container">
        <div className="prev-button">
          <button type="button" onClick={prevSlider}>
            <FaAngleLeft />
          </button>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={image} alt={title} />
          </div>
          <div className="text">
            <h2>{name} </h2>
            <h3>{title}</h3>
            <p>{quote} </p>
          </div>
        </div>
        <div className="prev-button">
          <button type="button" onClick={prevSlider}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Slider
