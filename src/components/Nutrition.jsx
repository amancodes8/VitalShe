import React from "react";

const Nutrition = () => {
    const nutritionArticles = [
        {
            id: 1,
            title: "Balanced Meals for Every Day",
            description:
                "Learn how to prepare balanced meals that provide all essential nutrients to keep you healthy and energized.",
            image: "/images/nutrition1.jpg",
            alt: "Balanced Meals",
        },
        {
            id: 2,
            title: "Superfoods: A Beginner's Guide",
            description:
                "Discover the health benefits of superfoods like quinoa, kale, and chia seeds. These nutrient-dense foods can boost your diet!",
            image: "/images/nutrition2.jpg",
            alt: "Superfoods",
        },
        {
            id: 3,
            title: "Meal Prep Tips for Busy Women",
            description:
                "Busy schedule? No problem. Meal prep strategies can help you stay healthy without spending too much time in the kitchen.",
            image: "/images/nutrition3.jpg",
            alt: "Meal Prep",
        },
    ];

    return (
        <div className="bg-white p-8">
            {/* Hero Section */}
            <section className="text-center py-12 bg-purple-100 rounded-md shadow-lg mb-12">
                <h1 className="text-4xl font-bold text-purple-800 mb-4">Nutrition</h1>
                <p className="text-lg text-gray-700">
                    Your guide to eating healthy and feeling great! Explore tips, recipes, and essential nutrients for a balanced diet.
                </p>
            </section>

            {/* Articles Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-8"> Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nutritionArticles.map((article) => (
                        <div key={article.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.alt}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600">{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Nutrition Tips Section */}
            <section className="my-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nutrition Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Hydrate Regularly</h3>
                        <p className="text-gray-600">
                            Drink at least 8 glasses of water daily to stay hydrated and keep your body functioning at its best.
                        </p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-2">Eat a Rainbow</h3>
                        <p className="text-gray-600">
                            Incorporate fruits and vegetables of different colors into your meals for a range of nutrients and vitamins.
                        </p>
                    </div>
                    <div className="bg-red-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Limit Processed Foods</h3>
                        <p className="text-gray-600">
                            Minimize the intake of processed foods high in sugar, salt, and unhealthy fats for long-term health benefits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-purple-100 py-12 text-center rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Get Personalized Nutrition Tips</h2>
                <p className="text-gray-700 mb-6">
                    Sign up for our newsletter and receive tips tailored to your health goals and lifestyle.
                </p>
                <button className="bg-purple-800 text-white py-2 px-6 rounded-lg hover:bg-purple-900">
                    Subscribe Now
                </button>
            </section>
        </div>
    );
};

export default Nutrition;
