import React, { useState } from "react"

const Question = ({ id, title, info }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article key={id}>
      <div>
        <h4>{title}</h4>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "-" : "+"}
        </button>
      </div>
      <div>
        <p>{readMore && info}</p>
      </div>
    </article>
  )
}

export default Question
