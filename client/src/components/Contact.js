import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const { name, email, message } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const backendUrl = 'http://localhost:5001/api/contact';
            await axios.post(backendUrl, formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6 max-w-lg">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
                <form onSubmit={onSubmit} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} required className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                        <textarea name="message" value={message} onChange={onChange} required rows="5" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-lavender text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-500 transition-colors w-full">
                            Send Message
                        </button>
                    </div>
                </form>
                {status && <p className="text-center mt-4">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;