// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [status, setStatus] = useState('');

//     const { name, email, message } = formData;
//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         setStatus('Sending...');
//         try {
//             const backendUrl = 'http://localhost:5001/api/contact';
//             await axios.post(backendUrl, formData);
//             setStatus('Message sent successfully!');
//             setFormData({ name: '', email: '', message: '' });
//         } catch (err) {
//             setStatus('Failed to send message. Please try again.');
//         }
//     };

//     return (
//         <section id="contact" className="py-20 bg-transparent text-white">
//             <div className="container mx-auto px-6 max-w-lg">
//                 <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
//                 <form onSubmit={onSubmit} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
//                     <div className="mb-6">
//                         <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
//                         <input type="text" name="name" value={name} onChange={onChange} required className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender" />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
//                         <input type="email" name="email" value={email} onChange={onChange} required className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender" />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
//                         <textarea name="message" value={message} onChange={onChange} required rows="5" className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-lavender"></textarea>
//                     </div>
//                     <div className="text-center">
//                         <button type="submit" className="bg-lavender text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-500 transition-colors w-full">
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//                 {status && <p className="text-center mt-4">{status}</p>}
//             </div>
//         </section>
//     );
// };

// export default Contact;

// import React from 'react';
// import { motion } from 'framer-motion';
// // Importing the icons we need
// import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

// // Your contact information
// const contactInfo = [
//     {
//         name: "LinkedIn",
//         icon: <FaLinkedin size={40} />,
//         link: "https://www.linkedin.com/in/sneha-96228632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" // TODO: Add your LinkedIn URL
//     },
//     {
//         name: "Email",
//         icon: <FaEnvelope size={40} />,
//         link: "snhea044l2005@gmail.com" // TODO: Add your email address
//     },
//     {
//         name: "Instagram",
//         icon: <FaInstagram size={40} />,
//         link: "https://www.instagram.com/snehuhh_?igsh=ODU4Z2hkNDUyNnFj&utm_source=qr" // TODO: Add your Instagram URL
//     },
// ];

// const Contact = () => {
//     return (
//         <section id="contact" className="py-20 bg-slate-900 text-white">
//             <div className="container mx-auto px-6 text-center">

//                 <motion.h2
//                     className="text-4xl font-bold mb-4"
//                     initial={{ opacity: 0, y: -50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                 >
//                     Get In <span className="text-accent">Touch</span>
//                 </motion.h2>

//                 <motion.p
//                     className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     viewport={{ once: true }}
//                 >
//                     I’m always excited to collaborate on innovative projects, brainstorm creative ideas, or join hands with passionate teams. Let’s connect and create something impactful!
//                 </motion.p>

//                 {/* Grid of Contact Icons */}
//                 <div className="flex justify-center items-center space-x-8 md:space-x-12">
//                     {contactInfo.map((item, index) => (
//                         <motion.a
//                             key={item.name}
//                             href={item.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110"
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
//                             viewport={{ once: true }}
//                         >
//                             {item.icon}
//                         </motion.a>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
// Importing the icons we need
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Your contact information, now with labels
const contactInfo = [
    {
        name: "LinkedIn",
        label: "sneha-96228632b",
        icon: <FaLinkedin size={30} />,
        link: "https://www.linkedin.com/in/sneha-96228632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Email",
        label: "sneha044l2005@gmail.com",
        icon: <FaEnvelope size={28} />,
        link: "mailto:sneha044l2005@gmail.com"
    },
    {
        name: "Instagram",
        label: "@snehuhh_",
        icon: <FaInstagram size={30} />,
        link: "https://www.instagram.com/snehuhh_?igsh=ODU4Z2hkNDUyNnFj&utm_source=qr"
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6 text-center">

                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In <span className="text-accent">Touch</span>
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I’m always excited to collaborate on innovative projects, brainstorm creative ideas, or join hands with passionate teams. Let’s connect and create something impactful!
                </motion.p>

                {/* --- UPDATED: Grid of Creative Contact Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/40 text-left flex items-center space-x-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-accent text-4xl">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white">{item.name}</h4>
                                <p className="text-gray-400">{item.label}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;