import React from 'react';
import { useLocation } from 'react-router-dom';

const dummyArticles = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        alt: 'Article Image',
        title: 'Sample Article 1',
        description: 'This is a description of article 1.',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        alt: 'Article Image',
        title: 'Sample Article 2',
        description: 'This is a description of article 2.',
    },
];

// Pass dummy data directly to test ArticlesPage
{/* <ArticlesPage articles={dummyArticles} /> */ }


const ArticlesPage = () => {
    const location = useLocation();

    const articles = location.state?.articles || [];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
                    All Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.length > 0 ? (
                        articles.map((article) => (
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
                        ))
                    ) : (
                        <p>No articles available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ArticlesPage;
