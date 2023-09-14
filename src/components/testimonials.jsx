import React from 'react'

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>
      <section>
        <TestimonialCard name={"Yash"} feedback={"Always Trying Something"}/>
        <TestimonialCard name={"Tanya"} feedback={"Great Person with Great Logic"}/>
        <TestimonialCard name={"Anushk"} feedback={"have the Best Idea in the Folks "}/>
      </section>
    </div>
  )
}
const TestimonialCard=({name,feedback})=>(
    <article id='cardheu'>
        <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonials
