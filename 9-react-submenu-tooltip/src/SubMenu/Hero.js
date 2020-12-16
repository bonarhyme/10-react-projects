import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./Context"

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes from startups tp fortune 500s-use
            Stripes software and APIs to accept payment, send payouts and manage
            their business online
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero
