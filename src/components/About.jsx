import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-16">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        <div className='m-4 p-4 backdrop-blur-xs'>
          <p className="text-gray-200 text-lg leading-relaxed">
            I’m <span className="font-semibold text-blue-500">Ojasv Singh</span>, a passionate web developer.
            I specialize in crafting modern, responsive, and user-focused web applications using technologies like
            <span className="font-medium text-indigo-400"> React</span>, <span className="font-medium text-indigo-400">Node.js</span>,
            and <span className="font-medium text-indigo-400">MongoDB</span>. I like transforming complex challenges into clean,
            intuitive solutions.
          </p>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Beyond coding, I enjoy exploring emerging technologies, contributing to open source, and building creative side projects.
            I’m a firm believer in lifelong learning and continually strive to grow—both personally and professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;