import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import Infinity from '../assets/infnity.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    return (
        <div className="pt-12 pl-4 md:pl-20 min-h-screen flex flex-col md:flex-row justify-between items-center text-center px-4 md:px-20 bg-gradient-to-b ">
            <div className='flex-1 text-left mb-10 md:mb-0'>
                <div className="mt-6 flex gap-6 text-white mb-10 text-2xl">
                    <a href="https://github.com/ojasvsingh71" className="hover:text-[#4E71FF]">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ojasv-singh-b80b52326/" className="hover:text-[#4E71FF]">
                        <FaLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/ojasvsingh1971/" className="hover:text-[#4E71FF]">
                        <SiLeetcode />
                    </a>
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold text-white">
                    Hi There! <br />I’m
                    <span className='ml-4 text-[#4E71FF]'>
                        Ojasv Singh
                    </span>
                    <br /><br />
                </h1>

                <h1 className="text-4xl  md:text-6xl  text-[#4E71FF]">
                    <Typewriter
                        words={['MERN Stack Developer','DSA Enthusiast', 'Open Source Contributor','Tech Explorer']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        delaySpeed={2000}
                        deleteSpeed={50}
                    />
                </h1>
            </div>
            <div className='mr-10 mb-40 flex-1 max-w-md md:max-w-lg lg:max-w-xl'>
                <Lottie animationData={Infinity} loop={true} />
            </div>
        </div>
    );
};

export default Hero;