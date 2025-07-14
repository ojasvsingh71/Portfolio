


const projects = [
    {
        title: 'DSA Tracker Leaderboard',
        description:
            'Full-stack web app to track and display student DSA progress (from LeetCode) via public leaderboards. Encourages consistency with real-time updates.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        link: 'https://github.com/ojasvsingh71/DSA-Tracker-LeaderBoard'
    },
    {
        title: 'MiniMoo - Friendly Chatbot',
        description:
            'A quirky, endlessly talkative AI chatbot powered by OpenAI API. Designed for fun, friendly conversations.',
        tech: ['React', 'Node.js', 'Express', 'OpenAI API'],
        link: 'https://github.com/ojasvsingh71/MiniMoo'
    },
    {
        title: 'Samaj Sandesh',
        description:
            'A community-focused web platform that delivers and displays announcements/news in one place — accessible to all.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        link: 'https://github.com/ojasvsingh71/Samaj-Sandesh'
    },
    {
        title: 'Habit Builder App',
        description:
            'A productivity-focused MERN app to help users track and build daily habits with JWT auth and progress tracking.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        link: 'https://github.com/ojasvsingh71/Habit-Builder'
    },
    {
        title: 'SheGuard - Deepfake Detection',
        description:
            'AI-powered web app that detects deepfake images using TensorFlow and Google Vision API. A step toward combating misinformation.',
        tech: ['React', 'Flask', 'TensorFlow'],
        link: 'https://github.com/ojasvsingh71/SheGuard'
    },
    {
        title: 'EcoQuest',
        description:
            'Gamified React app that rewards users for eco-friendly actions like reducing carbon footprint and completing green quests.',
        tech: ['React'],
        link: 'https://github.com/ojasvsingh71/ecoquest'
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen px-6 py-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    PROJECTS
                </h2>

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className=" backdrop-blur border border-white/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center hover:bg-white border border-blue-500 text-blue-300 font-semibold py-2 px-4 rounded transition"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Projects;