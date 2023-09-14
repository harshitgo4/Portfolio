import React from 'react'
import {AiFillInstagram,AiFillGithub,AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div>
            <img src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png" alt="Founder" />
        <h2>Harshit Goyal</h2>
        <p>Learning Something Daily</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/harshit.goyal04/" target='blank'> <AiFillInstagram/></a>
                <a href="www.linkedin.com/in/harshit-goyal-2a1812227" target='blank' > <AiFillLinkedin/></a>
                <a href="https://github.com/harshitgo4" target='blank'> <AiFillGithub/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
       
    </footer>
    
  )
}

export default Footer
