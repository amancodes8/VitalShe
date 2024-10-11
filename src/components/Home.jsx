import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [healthCategories, setHealthCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/homedata.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setHealthCategories(data.healthCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCatefory = () => {
    navigate('/nutrition');
  };

  const handleResources = () => {
    navigate('/resources');
  }

  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      {/* Hero Section */}
   <div className="bg w-screen h-screen flex">
   <section className=" py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 mb-4 updock-regular">
            Vital She: Empowering Women's Health
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your one-stop destination for health resources, articles, and guidance. Empower yourself with the knowledge to live a healthy, happy life.
          </p>
          <button onClick={handleResources} className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition">
            Explore Resources
          </button>
        </div>
      </section>

      {/* Community Engagement Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Community Engagement
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto playfair">
            Join our community of empowered women! Participate in workshops, webinars, and support groups designed to promote health and well-being. Together, we can achieve more!
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition mt-4">
            Get Involved
          </button>
        </div>
      </section> */}
   </div>

      {/* Featured Articles Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-semibold text-gray-800 text-center updock-regular mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className={`left-card bg-white flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 ease-linear duration-200 hover:shadow-2xl`}
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="md:w-1/2 w-full sm:h-96 h-48 object-cover rounded-md mb-4 md:mb-0"
                />
                <div className="md:w-1/2 md:pl-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 playfair">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-lg mt-10 text-center mx-auto font-mukta-regular">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 ">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Health Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Explore Health Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthCategories.map((category) => (
              <div
                key={category.id}
                className="right-card bg-pink-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ease-linear duration-200 cursor-pointer"
                onClick={handleCatefory}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border border-t-black  py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-800 text-lg mb-4">
            &copy; {new Date().getFullYear()} Vital She. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
