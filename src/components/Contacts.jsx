// ContactUs.js
import React, { useRef } from 'react';

const ContactUs = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // You can add email sending logic here
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            ref={messageRef}
                            id="message"
                            className="border border-gray-300 p-2 w-full rounded h-32"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
