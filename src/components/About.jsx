import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-16">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">About Me</h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          I’m <span className="font-semibold text-blue-600">Ojasv Singh</span>, a passionate Web Developer based in India.
          I specialize in building modern, responsive, and user-friendly web applications using technologies like
          <span className="font-medium text-indigo-600"> React</span>, <span className="font-medium text-indigo-600">Node.js</span>,
          and <span className="font-medium text-indigo-600">MongoDB</span>. I enjoy turning complex problems into simple,
          elegant solutions.
        </p>

        <p className="mt-6 text-gray-200 text-lg leading-relaxed">
          When I’m not coding, you’ll find me exploring new tech, contributing to open source, or working on creative side projects.
          I believe in lifelong learning and constantly strive to grow both personally and professionally.
        </p>
      </div>
    </div>
  );
};

export default About;