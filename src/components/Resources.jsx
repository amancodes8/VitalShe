import React from "react";
import { useNavigate } from "react-router-dom";


const Resources = () => {


    const navigate = useNavigate();

    const handleSubscribe = () => {
        navigate('/plus')
    }


    const resources = [
        {
            id: 1,
            title: "Health & Wellness Articles",
            description:
                "Access a wide variety of articles on women's health, mental wellness, nutrition, fitness, and more. Stay informed and empowered.",
            icon: "📚", // Placeholder emoji for visual interest
        },
        {
            id: 2,
            title: "Live Consultation",
            description:
                "Get real-time advice and personalized guidance from health and wellness experts. Our live consultation sessions allow you to address your specific concerns and receive tailored recommendations from professionals in women's health, nutrition, mental well-being, and fitness.",
            icon: "💬",
        },

        {
            id: 3,
            title: "Community Support",
            description:
                "Be part of our supportive community of women sharing their health journeys, tips, and encouragement.",
            icon: "🤝",
        },
        {
            id: 4,
            title: "Personalized Plans",
            description:
                "Get personalized nutrition and wellness plans tailored to your specific health goals and lifestyle needs.",
            icon: "📝",
        },
    ];

    return (
        <div className="bg-gray-50 p-8">
            {/* Hero Section */}
            <section className="text-center py-12 bg-blue-100 rounded-md shadow-lg mb-12">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Resources</h1>
                <p className="text-lg text-gray-700">
                    Explore the resources we provide to help you lead a healthy and empowered life. From expert advice to community support, we have you covered.
                </p>
            </section>

            {/* Resources List Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {resources.map((resource) => (
                        <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                            <span className="text-4xl mr-4">{resource.icon}</span>
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600">{resource.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-100 py-12 text-center rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Subscribe to Access All Resources</h2>
                <p className="text-gray-700 mb-6">
                    Unlock all our health and wellness resources by subscribing today. Get personalized advice, community support, and exclusive workshops.
                </p>
                <button
                    onClick={handleSubscribe}
                    className="bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-900">
                    Subscribe Now
                </button>
            </section>
        </div>
    );
};

export default Resources;
