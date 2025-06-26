import React from 'react';
import { Bot } from 'lucide-react';

const OptexButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
        >
            <Bot size={24} />
        </button>
    );
};

export default OptexButton;