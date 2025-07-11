import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs.send(
            'service_p5m05o9',
            'template_5mntav8',
            form,
            'mi5mbj2rLBUfNW197'
        ).then(
            (res) => {
                alert('Message sent successfully!');
                setForm({ name: '', email: '', message: '' })
                setLoading(false);
            },
            (error) => {
                alert('Failed to send massage, please try again later');
                console.error(error);
                setLoading(false)
            }
        )

        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl font-bold text-center text-white mt-5 mb-12">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg backdrop-blur border border-white/30">
                    <div className="mb-6">
                        <label className="block mb-2 text-white font-semibold" htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
                            type="text"
                            placeholder="Enter your name"
                        />

                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-white font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-white/20 backdrop-blur text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-white font-semibold" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full h-35 px-4 py-2 bg-white/20 backdrop-blur text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full text-center hover:bg-white text-blue-400 border border-white  font-semibold py-2 px-4 rounded transition"
                    >
                        {loading ? "Sending Message..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;