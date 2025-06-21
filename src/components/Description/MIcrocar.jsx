import React from "react";

const MicrocarPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://www.autoloisirs.com/wp-content/uploads/sites/21/2023/03/herobanner-page-myli-1920px-1920x900.jpg"
          alt="Microcar Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Small Size, Big Impact</h1>
          <p className="text-lg md:text-xl mt-2">Explore the Charm of Microcars</p>
        </div>
      </section>

      {/* What is a Microcar */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Microcar?</h2>
        <img
          src="https://cdn.motor1.com/images/mgl/XB2EPp/s1/smart-eq-fortwo-edition-one.jpg"
          alt="Smart Fortwo"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Microcars are ultra-compact vehicles designed for city use, offering incredible fuel efficiency, easy parking, and affordability. They are ideal for solo commuters and urban environments where space is at a premium.
        </p>
      </section>

      {/* Top Brands */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Smart", logo: "http://www.carlogos.org/logo/Smart-logo-1994-1366x768.png", url: "https://www.smart.com/" },
            { name: "Tata", logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png", url: "https://www.tatamotors.com/" },
            { name: "Maruti Suzuki", logo: "https://companieslogo.com/img/orig/MARUTI.NS-9974f2f4.png?t=1593961147", url: "https://www.marutisuzuki.com/" },
            { name: "Renault", logo: "https://pngimg.com/uploads/renault/renault_PNG39.png", url: "https://www.renault.co.in/" }
          ].map(({ name, logo, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="border rounded-lg p-4 text-center text-lg font-medium shadow-sm transition-colors duration-300 flex flex-col items-center space-y-2 no-underline hover:shadow-lg hover:bg-gray-100">
              <img src={logo} alt={`${name} logo`} className="h-12 object-contain" />
              <span className="text-black">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Pros and Cons */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Pros and Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 bg-green-50">
            <h3 className="text-xl font-bold mb-3 text-green-700">Pros</h3>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>Extremely fuel-efficient</li>
              <li>Perfect for tight city spaces</li>
              <li>Low maintenance cost</li>
              <li>Affordable pricing</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Limited passenger capacity</li>
              <li>Less storage space</li>
              <li>Not highway-friendly</li>
              <li>Minimal safety features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Microcars by Price */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Microcars by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://www.carblogindia.com/wp-content/uploads/2015/04/2015-tata-nano-genx-pics-red-image-1024x683.jpg"
              alt="Tata Nano"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (Under ₹5 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tata Nano</li>
                <li>Maruti Alto 800</li>
                <li>Datsun Redi-GO</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://www.elcarrocolombiano.com/wp-content/uploads/2022/08/20220818-SUZUKI-ALTO-K10-2023-NUEVA-GENERACION-LANZAMIENTO-MUNDIAL-01.jpg"
              alt="Suzuki Alto"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹5–8 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Maruti Alto K10</li>
                <li>Renault Kwid</li>
                <li>Maruti Celerio</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://cdn.motor1.com/images/mgl/Jexwg/s1/smart-presents-eq-lineup-restyling-ahead-of-frankfurt-motor-show.jpg"
              alt="Smart EQ ForTwo"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹10 Lakhs+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Smart EQ Fortwo</li>
                <li>Mini Electric (entry trim)</li>
                <li>Citroën Ami (EU markets)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature-Rich & Dream Car */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/05/Renault-Kwid-E-Tech-Eletrico-Brasil-2.jpg?resize=680"
              alt="Renault Kwid"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Renault Kwid Climber</p>
            <p><strong>Price:</strong> ₹6–7 Lakhs</p>
            <p><strong>Highlights:</strong> Digital console, dual-tone, touchscreen, rugged look</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://performancedrive.com.au/wp-content/uploads/2019/07/2019-MNI-Cooper-SE.jpg"
              alt="Mini Electric"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream Microcar</h3>
            <p><strong>Model:</strong> Mini Electric</p>
            <p><strong>Price:</strong> ₹35 Lakhs+</p>
            <p><strong>Highlights:</strong> Electric drive, iconic design, premium features</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicrocarPage;
