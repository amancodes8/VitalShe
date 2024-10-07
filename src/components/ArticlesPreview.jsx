// ArticlesPreview.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const ArticlesPreview = ({ articles }) => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
                    Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(0, 3).map((article) => (
                        <div key={article.id} className="bg-white rounded-lg shadow-lg p-6">
                            <img
                                src={article.image}
                                alt={article.alt}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {article.title}
                            </h3>
                            <p className="text-gray-600">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <NavLink to="/articles">
                        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                            View All Articles
                        </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ArticlesPreview;
