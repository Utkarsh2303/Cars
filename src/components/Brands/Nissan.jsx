import React from "react";

const NissanPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
        <img
          src="https://0a411afb0c598242cc95-1df470064133d6bc5c471837468f475c.ssl.cf3.rackcdn.com/publish/wp-content/uploads/2023/03/Wessex-Nissan-Gloucester.jpeg"
          alt="Nissan Showroom"
          className="w-full h-120 object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Nissan</h1>
          <p className="text-sm sm:text-base text-gray-600">Innovation That Excites — Engineering Meets Efficiency</p>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">About the Brand</h2>
        <p className="text-gray-700 leading-relaxed">
          Nissan, a Japanese automobile manufacturer, has made a significant mark in India with a focus on innovation, 
          durability, and performance. Its partnership with Renault in India has strengthened its operations and vehicle lineup.
        </p>
        <p className="text-gray-700">
          Nissan’s Magnite SUV brought premium styling and features to budget buyers, proving the brand’s dedication to accessible innovation.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        <div style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">⚙️ Japanese Precision</h3>
          <p>Renowned for engineering excellence and reliability in every vehicle.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">🚗 Budget-Friendly SUV</h3>
          <p>Magnite redefined affordable SUVs with premium features and bold looks.</p>
        </div>
        <div style={{ background: "linear-gradient(to right, #232526, #414345)", borderRadius: "1.5rem", padding: "1.5rem" }}>
          <h3 className="text-xl font-bold mb-2">📡 Connected Tech</h3>
          <p>360-degree camera, wireless Apple CarPlay, and voice recognition.</p>
        </div>
      </section>

      {/* Best Cars by Nissan */}
      <section className="space-y-4 px-2">
        <h2 className="text-2xl font-semibold text-indigo-800 underline underline-offset-4">Best Cars by Nissan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Magnite",
              image: "https://www-europe.nissan-cdn.net/content/dam/Nissan/za/vehicles/Magnite/Reveal/Mosaic/16_9_3.jpg",
              desc: "Compact SUV with turbo engine, sporty design, and great value."
            },
            {
              name: "Kicks",
              image: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/09/Nissan-Kicks-XPlay-1.jpg?resize=600",
              desc: "Premium crossover SUV with strong road presence and safety tech."
            }
          ].map((car) => (
            <div key={car.name} className="rounded-xl overflow-hidden shadow-lg bg-white border">
              <img src={car.image} alt={car.name} className="w-full h-70 object-cover" loading="lazy" />
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
        <h2 className="text-2xl font-semibold text-green-700 underline underline-offset-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Magnite launched at India’s most competitive SUV pricing</li>
          <li>Nissan India exports vehicles to over 100 countries</li>
          <li>Global technology integration with Renault-Nissan Alliance</li>
          <li>Consistent innovation in compact SUV space</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-center text-blue-700 underline underline-offset-4 mb-10">
          Nissan India Timeline
        </h2>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
          {[
            { year: "2005", icon: "🤝", event: "Nissan entered India through a partnership with Renault." },
            { year: "2010", icon: "🏭", event: "Chennai plant set up for domestic and export manufacturing." },
            { year: "2016", icon: "🚘", event: "Launch of Redi-GO and expansion of budget segment." },
            { year: "2020", icon: "🚀", event: "Magnite launched and became an instant hit in compact SUV market." }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-1.5 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="bg-blue-50 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-xl font-semibold text-blue-800">{item.year}</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-800 to-blue-700 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Nissan Today</h2>
        <p className="text-base sm:text-lg mb-6">
          Cutting-edge innovation, safety, and dynamic styling. Find your Nissan now.
        </p>
        <a
          href="https://www.nissan.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Visit Official Website
        </a>
      </section>
    </div>
  );
};

export default NissanPage;
