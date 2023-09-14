import React, { useRef, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsChevronDown } from 'react-icons/bs';
import me from '../assets/main.jpg';

const Home = () => {
    const Clientcount = useRef(null);
    const projectcount = useRef(null);

    const AnimationClient = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (Clientcount.current.textContent = v.toFixed())
        });
    };
    const Animationproject = () => {
        animate(0, 40, {
            duration: 1,
            onUpdate: (v) => (projectcount.current.textContent = v.toFixed())
        });
    };

    useEffect(() => {
        AnimationClient();
    }, []);

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 initial={{
                        x: "-100%",
                        opacity: '0',
                    }}
                    whileInView={{
                        x: "0",
                        opacity: '1',
                    }}>
                    Hi i am <br />Harshit Goyal
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["Developer", "Tech-enthuaist", "Weeb"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href="mailto:harshitgo0409@gmail.com"> Hire Me</a>
                        <a href="#work"> <button>Projects</button></a>
                    </div>
                </div>
                <article>
                    <p>
                        <motion.span className="motiontext" ref={Clientcount} whileInView={AnimationClient}></motion.span>
                        <span>Clients Worldwide</span>
                    </p>
                </article>
                <aside>
                    <article>
                        <p>
                        <motion.span className="motiontext" ref={projectcount} whileInView={Animationproject}></motion.span>
                            <span>Projects Developed</span>
                        </p>
                    </article>
                    <article data-special>
                        <p>
                            <span>Contact Me</span>
                            <span>harshitgo0409@gmail.com</span>
                        </p>
                    </article>
                </aside>
            </section>
            <section>
                <img src={me} alt="Harshit Goyal" />
            </section>
            <BsChevronDown />
        </div>
    );
};

export default Home;
