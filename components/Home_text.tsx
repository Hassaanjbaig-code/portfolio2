"use client";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import Typewriter from 'typewriter-effect';

const Home_text = () => {
    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="Home__left">
            <h2 className="Home__left__title text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#34222e] to-[#75c2f6]">Hassaan Baig</h2>
            <div className='text-4xl font-Belanosima text-center'>
                <Typewriter
                    options={{
                        strings: [
                            "I'm a <span class='blue'>Full-stack developer</span>",
                            "All Wanted to learn new thing by helpful and collaborative"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 80,
                    }}
                />
            </div>
        </div>
    )
}

export default Home_text
