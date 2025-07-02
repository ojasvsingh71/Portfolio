import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const OptexChatBox = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/chat`, {
                messages: [
                    ...messages.map(msg => ({
                        role: msg.role === "user" ? "user" : "assistant",
                        content: msg.text
                    })),
                    { role: "user", content: input }
                ]
            });
            const botMessage = { role: 'assistant', text: res.data.reply };
            setMessages(prev => [...prev, botMessage]);
        } catch (err) {
            console.log("Chat Error:", err?.response?.data || err.message || err);
            setMessages(prev => [...prev, { role: 'assistant', text: 'Oops! Something went wrong.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-20 right-4 w-[90vw] sm:w-[400px] max-h-[75vh] border border-white/30 backdrop-blur text-white rounded-lg shadow-2xl overflow-hidden z-50">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 flex justify-between items-center px-4 py-3">
                <h2 className="font-bold text-4xl sm:text-base">OPTEX</h2>
                <button onClick={onClose}>
                    <X className="text-white" />
                </button>
            </div>

            <div className="p-4 space-y-2 overflow-y-auto max-h-[45vh] scrollbar-thin scrollbar-thumb-white/30">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`p-2 rounded-md text-sm sm:text-base break-words ${msg.role === 'user'
                            ? 'bg-blue-500 self-end ml-auto text-white'
                            : 'bg-white/30 text-white'
                            }`}
                    >
                        {msg.role === 'assistant' ? (
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        ) : (
                            msg.text
                        )}
                        <div ref={chatEndRef} />
                    </div>
                ))}
            </div>


            <div className="p-4 border-t border-white/20 flex gap-2">
                <input
                    className="flex-1 px-3 py-2 rounded-lg bg-white/30 backdrop-blur text-white placeholder-white/60 focus:outline-none text-sm sm:text-base"
                    placeholder="Ask Optex anything..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="px-3 py-2 sm:px-4 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm sm:text-base"
                >
                    {loading ? '...' : 'Ask'}
                </button>
            </div>
        </div>
    );
};

export default OptexChatBox;