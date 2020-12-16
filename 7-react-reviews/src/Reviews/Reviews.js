import React, { useState } from "react"
import People from "./data"
import "./Reviews.css"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Reviews = () => {
  // This toggles the index from the data
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = People[index]

  const checkIndex = (index) => {
    if (index > People.length - 1) {
      return 0
    }
    if (index < 0) {
      return People.length - 1
    }
    return index
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkIndex(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkIndex(newIndex)
    })
  }
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * People.length)
    if (randomIndex === index) {
      randomIndex = index + 1
    }
    setIndex(checkIndex(randomIndex))
  }
  return (
    <main>
      <section className="container">
        <div class="title">
          <h1>Honest Reviews</h1>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div class="image-container">
            <img src={image} alt={name} className="image" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h2 className="name">{name}</h2>
          <h2 className="job">{job}</h2>
          <p className="text">{text}</p>
          <div class="buttons">
            <button onClick={prevPerson} class="prevPerson">
              <FaChevronLeft />
            </button>
            <button onClick={nextPerson} className="nextPerson">
              <FaChevronRight />
            </button>
          </div>
          <button onClick={randomPerson} className="random">
            Surprise Me
          </button>
        </article>
      </section>
    </main>
  )
}

export default Reviews
