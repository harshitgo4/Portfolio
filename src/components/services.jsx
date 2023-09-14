import React from 'react'
import {motion} from "framer-motion"
import {AiFillAmazonCircle,AiFillWindows,AiFillCiCircle} from 'react-icons/ai'
const Services = () => {
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className='servicesbox1'>
        <h3>6+</h3>
        <p>Months experience</p>
        </motion.div>
        <motion.div className='servicesbox2'>
      <AiFillCiCircle/>
      <span>Web Devlopment </span>
        </motion.div>
        <motion.div className='servicesbox3'>
      <AiFillWindows/>
      <span>Data Structures And Algorithms </span>
        </motion.div>
        <motion.div className='servicesbox4'>
      <AiFillAmazonCircle/>
      <span>Python</span>
        </motion.div>
      </section>
    </div>
  )
}

export default Services;
