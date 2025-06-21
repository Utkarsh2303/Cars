import React from "react";

const KiaPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/images/discover-kia/kia-in-india/dealer-application/1920x1080-Dealer.jpg"
          alt="Kia Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Kia</h1>
          <p className="text-sm sm:text-base text-gray-600">Movement that Inspires — Style, Tech, and Reliability</p>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">About the Brand</h2>
        <p className="text-gray-700 leading-relaxed">
          Kia Motors, a South Korean automotive giant, entered the Indian market in 2019 and quickly became one of the most trusted car brands. It combines
          futuristic design, class-leading technology, and strong performance tailored for Indian roads.
        </p>
        <p className="text-gray-700">
          With popular models like the Seltos and Sonet, Kia delivers bold aesthetics, advanced features, and superior comfort.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        <div style={{ background: "linear-gradient(to right, #0f2027, #2c5364)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🚘 Tech-Forward Design</h3>
          <p>Premium interiors, smart infotainment, and futuristic exteriors.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #ff5f6d, #ffc371)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">⚙️ Reliable Performance</h3>
          <p>Turbocharged engines, great mileage, and smooth handling.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #42275a, #734b6d)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🛡️ Safety & Trust</h3>
          <p>Best-in-class safety features and a trusted after-sales network.</p>
        </div>
      </section>

      {/* Best Cars */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-green-800 underline underline-offset-4">Top Kia Cars in India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Seltos",
              image: "https://i.gaw.to/content/photos/55/10/551046-kia-seltos-2024-plus-de-puissance-et-une-nouvelle-transmission.jpeg",
              desc: "A premium compact SUV with futuristic design, ventilated seats, and a heads-up display."
            },
            {
              name: "Sonet",
              image: "https://images.hindustantimes.com/auto/img/2022/09/01/1600x900/Sonet_X-line_1662011611372_1662011619370_1662011619370.jpg",
              desc: "Subcompact SUV loaded with features like Bose speakers and sunroof at an affordable price."
            },
            {
              name: "Carens",
              image: "https://cdni.autocarindia.com/ExtraImages/20220104122528_Kia_Carens_front.jpg",
              desc: "A versatile 6/7-seater MPV ideal for Indian families looking for space and comfort."
            },
            {
              name: "EV6",
              image: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/12/Kia-EV6-GT_First-Look_01.jpg",
              desc: "Kia’s all-electric, futuristic crossover with blazing performance and global recognition."
            }
          ].map((car) => (
            <div key={car.name} className="rounded-xl overflow-hidden shadow-lg bg-white border">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" loading="lazy" />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-purple-700 underline underline-offset-4">Kia Achievements in India</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Fastest brand to reach 1 lakh sales in India</li>
          <li>Seltos awarded ICOTY 2020 (Indian Car of the Year)</li>
          <li>Established state-of-the-art manufacturing in Anantapur</li>
          <li>EV6 received international design and performance awards</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-center text-indigo-700 underline underline-offset-4 mb-10">
          Kia India Timeline
        </h2>
        <div className="relative border-l-4 border-indigo-600 pl-6 space-y-12">
          {[
            { year: "2019", icon: "🚗", event: "Kia launches Seltos — immediate blockbuster success." },
            { year: "2020", icon: "🏆", event: "Sonet launched — wins compact SUV hearts across India." },
            { year: "2021", icon: "👨‍👩‍👧‍👦", event: "Carens MPV launched with strong safety and utility." },
            { year: "2022", icon: "⚡", event: "EV6 electric crossover launched with global acclaim." },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="bg-indigo-50 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-xl font-semibold text-indigo-800">{item.year}</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Kia’s Dynamic Lineup</h2>
        <p className="text-base sm:text-lg mb-6">
          Discover bold innovation, futuristic tech, and performance with Kia’s cars today.
        </p>
        <a
          href="https://www.kia.com/in/home.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Visit Official Website
        </a>
      </section>
    </div>
  );
};

export default KiaPage;
