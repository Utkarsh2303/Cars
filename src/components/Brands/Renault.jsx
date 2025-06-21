import React from "react";

const RenaultPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
        <img
          src="https://media.istockphoto.com/id/1434618793/photo/showroom-of-renault-showroom-and-car-of-dealership-renault.jpg?s=170667a&w=0&k=20&c=hwH3FgpzoK9eWjD3sNqLyj5f2-QwlVIwMYigS8RK5Rw="
          alt="Renault Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Renault</h1>
          <p className="text-sm sm:text-base text-gray-600">Passion for Life — Practical Innovation & Affordability</p>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-yellow-800 underline underline-offset-4">About the Brand</h2>
        <p className="text-gray-700 leading-relaxed">
          Renault India, a subsidiary of Groupe Renault, entered the Indian market in 2005. Known for its unique French
          design and affordability, Renault has made a mark by offering stylish and practical vehicles suited for Indian conditions.
        </p>
        <p className="text-gray-700">
          With models like the Kwid and Kiger, Renault has brought together bold styling, smart features, and cost-effectiveness for Indian consumers.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        <div style={{ background: "linear-gradient(to right, #373B44, #4286f4)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🚙 Affordable Innovation</h3>
          <p>Renault focuses on providing value-packed cars at accessible price points.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #1F1C2C, #928DAB)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🇫🇷 Distinctive French Styling</h3>
          <p>Bold, modern designs that stand out on Indian roads.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #c31432, #240b36)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🛡️ Practicality & Safety</h3>
          <p>Smart features, SUV-inspired stance, and functional cabin layouts.</p>
        </div>
      </section>

      {/* Best Cars by Renault */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">Best Cars by Renault</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Kwid",
              image: "https://cdn.autopapo.com.br/box/uploads/2022/01/20033717/renault-kwid-outsider-azul-2023-de-frente-em-movimento-21.jpg",
              desc: "A compact, stylish hatchback with SUV-inspired design and impressive mileage."
            },
            {
              name: "Kiger",
              image: "https://www.cartoq.com/wp-content/uploads/2024/09/renault-kiger-su.jpg.webp",
              desc: "A feature-rich compact SUV with turbo engine option and modern interiors."
            },
            {
              name: "Triber",
              image: "https://cdni.autocarindia.com/ExtraImages/20220218064618_Triber.jpg",
              desc: "A spacious 7-seater MPV that combines utility with affordability."
            },
            {
              name: "Duster (Legacy)",
              image: "https://1.bp.blogspot.com/-lPaEgECdk9k/XlnBzHVbtYI/AAAAAAAAbWw/8uG7yl_d4mIAO5SMtvuJky_CIxLqoe_pwCLcBGAsYHQ/s1600/Novo-Renault-Duster-2021%2B%25285%2529.jpg",
              desc: "Once a trendsetter in India’s SUV segment; rugged, reliable, and off-road capable."
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
        <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Over 9 lakh Kwid units sold in India</li>
          <li>Renault Triber recognized for versatility and innovation</li>
          <li>Kiger received multiple design awards</li>
          <li>Export presence in over 14 countries from India</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-center text-green-700 underline underline-offset-4 mb-10">
          Renault India Timeline
        </h2>
        <div className="relative border-l-4 border-green-600 pl-6 space-y-12">
          {[
            { year: "2005", icon: "🏢", event: "Renault enters India with Mahindra partnership." },
            { year: "2011", icon: "🚘", event: "Launch of Fluence and Koleos — Renault's first solo products." },
            { year: "2012", icon: "🌟", event: "Duster launched — becomes an instant hit in SUV segment." },
            { year: "2015", icon: "💡", event: "Launch of the Kwid — revolutionized entry-level hatchback market." },
            { year: "2019", icon: "🚗", event: "Triber introduced as India’s most affordable 7-seater." },
            { year: "2021", icon: "🚀", event: "Launch of the Kiger SUV — modern, bold, and value-driven." },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-1.5 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="bg-green-50 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-xl font-semibold text-green-800">{item.year}</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-600 to-red-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Discover Renault Today</h2>
        <p className="text-base sm:text-lg mb-6">
          Bold design. Great value. Built for India. Check out Renault’s offerings now.
        </p>
        <a
          href="https://www.renault.co.in"
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

export default RenaultPage;
