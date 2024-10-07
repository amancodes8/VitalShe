import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Home = () => {



  const articles = [
    {
      id: 1,
      title: "Myth 1: Do Menstrual Cycles Sync When Women Live Together? ",
      description: `This idea, known as "menstrual synchrony," is largely unsupported by scientific evidence.
      Research shows that any perceived synchronization is more likely a coincidence than a
      biological phenomenon. The variations in cycle length and environmental factors lead to this
      perception, but studies have not found consistent evidence to back up the claim. The body’s
      natural rhythms aren’t influenced by proximity to other women, as previously thought.`,
      image: "./images/1.jpeg",
      alt: "Nutrition",
    },
    {
      id: 2,
      title: "Myth 2: Is It Unhealthy to Skip Periods With Birth Control?",
      description: `It’s actually safe to skip periods when using hormonal contraceptives, like birth control pills,
      IUDs, or implants. These methods work by thinning the uterine lining, making periods lighter
      or even absent. Medical professionals agree that skipping periods with birth control does not
      negatively impact your health. In fact, it can reduce the risk of anemia, alleviate symptoms of
      endometriosis, and improve quality of life for women with painful periods.`,
      image: "./images/2.jpeg",
      alt: "Mental Health",
    },
    {
      id: 3,
      title: "Myth 3: Does a Missed Period Always Mean Pregnancy?",
      description: `While pregnancy is a common cause, many other factors can result in a missed period.
      Stress, changes in weight, polycystic ovary syndrome (PCOS), excessive exercise, or
      thyroid problems can all disrupt the menstrual cycle. If missed periods occur regularly, it’s
      essential to consult a healthcare provider to investigate potential underlying health issues.`,
      image: "./images/3.jpeg",
      alt: "Fitness",
    },
    {
      id: 4,
      title: `Myth 4: Are Painful Periods Normal for Everyone?`,
      description: `While mild cramps are typical, severe pain that interferes with daily life is not. Intense
      cramps, especially those lasting beyond the first two days of the cycle, can indicate
      conditions such as endometriosis, fibroids, or adenomyosis. These conditions are treatable
      with medications, therapies, or minimally invasive surgery, and it’s important to seek help
      rather than accept excessive pain as the norm.`,
      image: "./images/4.jpeg"
    },
    {
      id: 5,
      title: `Myth 5: Can Stress Affect Your Menstrual Cycle?`,
      description: `In reality, stress can significantly impact your menstrual cycle. High stress levels trigger the
      release of hormones like cortisol, which can interfere with the reproductive hormones that
      regulate the menstrual cycle. This can lead to delayed periods or missed cycles entirely. It’s
      essential to manage stress levels for overall hormonal balance and regular menstrual cycles.`,
      image: "./images/5.jpeg"
    }
  ];

  const healthCategories = [
    {
      id: 1,
      title: "Nutrition",
      description:
        "Discover the best dietary practices for a healthy life. Learn about balanced meals, essential nutrients, and superfoods.",
    },
    {
      id: 2,
      title: "Mental Health",
      description:
        "Mental health is vital for a balanced life. Find resources and tools to improve your mental well-being and cope with stress.",
    },
    {
      id: 3,
      title: "Fitness",
      description:
        "Stay active and fit with these simple workout routines designed for all ages. No gym required—just the will to move.",
    },
    {
      id: 4,
      title: "Women's Health",
      description:
        "Women’s health requires special attention. Learn more about reproductive health, hormonal balance, and staying active.",
    },
    {
      id: 5,
      title: "Healthy Aging",
      description:
        "Aging gracefully is possible with the right practices. Discover the best tips for maintaining health as you age.",
    },
    {
      id: 5,
      title: "Healthy Aging",
      description:
        "Aging gracefully is possible with the right practices. Discover the best tips for maintaining health as you age.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Vital She: Empowering Women's Health
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your one-stop destination for health resources, articles, and
            guidance. Empower yourself with the knowledge to live a healthy,
            happy life.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition">
            Explore Resources
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide you with reliable health information and
            guidance. Whether it's nutrition, fitness, or mental health, we are
            here to support your well-being every step of the way.
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className={`left-card bg-white flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  } rounded-lg shadow-lg p-6`}
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="md:w-1/2 w-full sm:h-96 h-48 object-cover rounded-md mb-4 md:mb-0"
                />
                <div className="md:w-1/2 md:pl-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-lg mt-10 text-center mx-auto">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
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
                className="right-card bg-pink-200 p-6 rounded-lg shadow-lg"
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

      {/* Special Section for Women's Health */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Focus on Women's Health
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Women's health is unique. Learn about reproductive health, hormonal
            balance, and specific tips for maintaining well-being.
          </p>
          <div className="mid-card bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Take Control of Your Health</h3>
            <p className="text-lg mb-4">
              Explore our specialized resources for women, focusing on physical
              and mental well-being.
            </p>
            <button className="bg-white text-pink-500 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
