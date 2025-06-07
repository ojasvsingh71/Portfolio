import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#8DD8FF]">Hi, I’m Ojasv Singh</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-xl">
                A passionate Web Developer crafting sleek and scalable web experiences.
            </p>
            <a
                href="#projects"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
                View Projects
            </a>
        </div>
    );
};

export default Hero;