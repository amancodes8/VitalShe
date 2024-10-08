import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 mb-4 updock-regular">
            About Vital She
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering women with the right knowledge and resources to make
            informed health decisions. At Vital She, we aim to provide expert
            advice, resources, and live consultations to support women's
            well-being in every stage of life.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto playfair">
            Our mission is to educate, inspire, and empower women by offering
            accurate and reliable health information. We provide expert insights
            on nutrition, mental health, fitness, reproductive health, and much
            more, all tailored to women’s unique needs. Through our resources,
            we aim to help women lead healthy, happy lives.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            At Vital She, we offer a wide range of resources to support women's
            health. From expert articles and live consultations to wellness tips
            and personalized programs, our goal is to provide women with all the
            tools they need to take control of their health journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Articles</h3>
              <p className="text-gray-600">
                Access scientifically-backed articles on topics ranging from
                nutrition to mental health, curated by professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Personalized Programs</h3>
              <p className="text-gray-600">
                Get personalized health and wellness plans tailored to your
                unique needs and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Live Consultations</h3>
              <p className="text-gray-600">
                Connect with health professionals in real-time for guidance on
                your health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="./images/kirti.jpeg"
                alt="Founder 1"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kirti</h3>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/kirti-sharma-705a77305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-600 hover:text-pink-500" />
                </a>
                <a href="https://www.instagram.com/kirtisharma_ss?igsh=MWRudnNscGx2ZTE5NA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-600 hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="./images/saara.jpeg"
                alt="Founder 2"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Saara</h3>
              <div className="flex justify-center space-x-4">

                <a href="https://www.linkedin.com/in/saara-v-0bbb55282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-600 hover:text-pink-500" />
                </a>
                <a href="https://www.instagram.com/sleeping._.saara?igsh=MWp2enZ3NnR4dXYweQ==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-600 hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="./images/aryan.jpeg"
                alt="Founder 3"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Aryan</h3>
              <div className="flex justify-center space-x-4">

                <a href="https://www.linkedin.com/in/aryan-kumar-570078293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-600 hover:text-pink-500" />
                </a>
                <a href="https://www.instagram.com/realaaryann_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-600 hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="./images/aman.jpeg"
                alt="Founder 4"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Aman</h3>
              <div className="flex justify-center space-x-4">

                <a href="https://www.linkedin.com/in/aman-raj-1a318128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-600 hover:text-pink-500" />
                </a>
                <a href="https://www.instagram.com/aman.tripathi2?utm_source=qr&igsh=MWM2bmNwcmNpcWR6bA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-600 hover:text-pink-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
