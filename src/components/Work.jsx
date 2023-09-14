import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../assets/data.json'
const Work = () => {
  return (
    <div id='work'>
      <h2>Work</h2>
      <section>
        <article>
            <Carousel showThumbs={false}  swipeable={false}  stopOnHover={true}infiniteLoop={true} transitionTime={1}interval={2000}autoPlay={true}   showIndicators={false}showArrows={true}>
            {
                data.projects.map(i=>(
                    <div key={i.title} className='workitems'>
                        <img src={i.imgSrc} alt={i.title} />
                        <aside>
                            <h3>{i.title}</h3>
                            <p>{i.description}</p>
                            <a href={i.url} target='demo'>Veiw Demo</a>
                        </aside>
                    </div>
                ))
            }
            </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work
