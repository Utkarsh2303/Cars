import React from "react";

const ToyotaPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
        <img
          src="https://i.pinimg.com/originals/7b/2e/9c/7b2e9c25dd3744a64fb0b96df2c4c7ff.jpg"
          alt="Toyota Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Toyota</h1>
          <p className="text-sm sm:text-base text-gray-600">Quality Revolution — Reliability, Durability & Safety</p>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-red-700 underline underline-offset-4">About the Brand</h2>
        <p className="text-gray-700 leading-relaxed">
          Toyota, the world's largest car manufacturer, has been serving the Indian market through Toyota Kirloskar Motor since 1997. Known for its long-lasting vehicles,
          Toyota focuses on durability, fuel efficiency, and advanced safety features.
        </p>
        <p className="text-gray-700">
          With models like the Innova Crysta, Fortuner, and Glanza, Toyota serves both family and performance needs with excellence.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        <div style={{ background: "linear-gradient(to right, #00416A, #E4E5E6)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🛡️ Unmatched Reliability</h3>
          <p>Known globally for cars that last decades with minimal issues.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #F7971E, #FFD200)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🔋 Hybrid Leadership</h3>
          <p>Pioneers in hybrid tech with models like the Camry and Urban Cruiser Hyryder.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #3A6073, #16222A)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🚙 Rugged SUVs</h3>
          <p>Fortuner and Hilux known for performance in the toughest conditions.</p>
        </div>
      </section>

      {/* Best Cars */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">Popular Toyota Cars in India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Innova Crysta",
              image: "https://stat.overdrive.in/wp-content/odgallery/2020/11/58040_2021_Toyota_innova_crysta_1.jpg",
              desc: "The benchmark MPV for Indian families, known for comfort, power and durability."
            },
            {
              name: "Fortuner",
              image: "https://imgcdn.zigwheels.co.th/large/gallery/exterior/33/3435/toyota-fortuner-leader-front-angle-low-view-895192.jpg",
              desc: "A beastly SUV with road presence, performance, and legendary off-roading capability."
            },
            {
              name: "Urban Cruiser Hyryder",
              image: "https://www.financialexpress.com/wp-content/uploads/2022/07/Toyota-Urban-Cruiser-Hyryder-1-1.jpg?w=1024",
              desc: "Hybrid SUV with excellent mileage, stylish looks, and Toyota tech."
            },
            {
              name: "Glanza",
              image: "https://imgd.aeplcdn.com/0x0/n/cw/ec/44099/toyota-glanza-left-front-three-quarter-63.jpeg",
              desc: "A premium hatchback that blends efficiency and refinement."
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
        <h2 className="text-2xl font-semibold text-green-700 underline underline-offset-4">Toyota’s Achievements in India</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Over 10 lakh Innova units sold in India</li>
          <li>Fortuner dominates premium SUV market for a decade</li>
          <li>Hyryder popularized hybrid SUVs in India</li>
          <li>Top-ranked in customer satisfaction & resale value</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-center text-red-700 underline underline-offset-4 mb-10">
          Toyota India Journey
        </h2>
        <div className="relative border-l-4 border-red-600 pl-6 space-y-12">
          {[
            { year: "1997", icon: "🏭", event: "Toyota Kirloskar Motor founded in India" },
            { year: "2005", icon: "🚙", event: "Launch of Innova MPV — changed the Indian MPV scene" },
            { year: "2009", icon: "⛰️", event: "Fortuner launched — instant hit in SUV segment" },
            { year: "2015", icon: "🌱", event: "Camry Hybrid gains popularity for hybrid lovers" },
            { year: "2022", icon: "🔋", event: "Hyryder hybrid SUV launched with Maruti collaboration" },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-1.5 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="bg-red-50 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-xl font-semibold text-red-800">{item.year}</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Toyota’s Powerful Lineup</h2>
        <p className="text-base sm:text-lg mb-6">
          Reliability, innovation, and a legacy of excellence — Toyota is built for the road ahead.
        </p>
        <a
          href="https://www.toyotabharat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-red-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Visit Official Website
        </a>
      </section>
    </div>
  );
};

export default ToyotaPage;
