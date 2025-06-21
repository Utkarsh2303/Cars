import React from "react";

const SportsCarPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">

      
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://img.freepik.com/premium-photo/red-ferrari-car-driving-road-with-ocean-background_915071-2178.jpg"
          alt="Red Ferrari on road"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Unleash the Thrill</h1>
          <p className="text-lg md:text-xl mt-2">Explore the World of Sports Cars</p>
        </div>
      </section>

      
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Sports Car?</h2>
        <img
          src="https://img.goodfon.com/wallpaper/nbig/8/cc/porsche-911-s-t-porsche-911-side-view.webp"
          alt="Porsche 911 side view"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          A sports car is a performance-oriented vehicle designed for agility, speed, and driving pleasure. They feature aerodynamic designs, powerful engines, and precision handling — offering an unmatched driving experience.
        </p>
      </section>

      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              name: "Ferrari",
              logo: "https://logos-world.net/wp-content/uploads/2020/06/Ferrari-Logo.png",
              url: "https://www.ferrari.com/",
            },
            {
              name: "Lamborghini",
              logo: "https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png",
              url: "https://www.lamborghini.com/",
            },
            {
              name: "Porsche",
              logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png",
              url: "https://www.porsche.com/",
            },
            {
              name: "Chevrolet",
              logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png",
              url: "https://www.chevrolet.com/",
            },
            {
              name: "BMW",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
              url: "https://www.bmw.com/",
            },
            {
              name: "Audi",
              logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png",
              url: "https://www.audi.com/",
            },
            {
              name: "Jaguar",
              logo: "https://www.pngmart.com/files/22/Jaguar-Logo-PNG-Pic.png",
              url: "https://www.jaguar.com/",
            },
            {
              name: "Nissan",
              logo: "https://pluspng.com/img-png/nissan-logo-png-nissan-logo-the-most-famous-brands-and-company-logos-in-the-world-3840x2160.png",
              url: "https://www.nissan-global.com/",
            },
            {
              name: "McLaren",
              logo: "https://pngimg.com/uploads/Mclaren/Mclaren_PNG47.png",
              url: "https://cars.mclaren.com/",
            },
            {
              name: "Aston Martin",
              logo: "https://logos-world.net/wp-content/uploads/2021/03/Aston-Martin-Logo-2003-2021.png",
              url: "https://www.astonmartin.com/",
            },
            {
              name: "Bugatti",
              logo: "https://www.pngmart.com/files/22/Bugatti-Logo-PNG-Image.png",
              url: "https://www.bugatti.com/",
            },
            {
              name: "Mercedes-Benz",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
              url: "https://www.mercedes-benz.com/",
            },
          ].map(({ name, logo, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-4 text-center text-lg font-medium shadow-sm transition-colors duration-300 flex flex-col items-center space-y-2 no-underline hover:shadow-lg hover:bg-gray-100"
            >
              <img src={logo} alt={`${name} logo`} className="h-12 object-contain" />
              <span className="text-black">{name}</span>
            </a>
          ))}
        </div>
      </section>

      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Pros and Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 bg-green-50">
            <h3 className="text-xl font-bold mb-3 text-green-700">Pros</h3>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>Exceptional performance and speed</li>
              <li>Stunning designs</li>
              <li>Precision handling</li>
              <li>Symbol of luxury and status</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Expensive to buy and maintain</li>
              <li>Low practicality</li>
              <li>Poor fuel economy</li>
              <li>Not ideal for rough roads</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Sports Cars by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://cdn.motor1.com/images/mgl/4yEvZ/s1/toyota-gr-86-gr-parts-concept.jpg"
              alt="Toyota GR86"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹20–40 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Toyota GR86</li>
                <li>Mazda MX-5 Miata</li>
                <li>Hyundai i20 N / VW Polo GTI</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://images.caricos.com/b/bmw/2023_bmw_z4/images/2560x1440/2023_bmw_z4_3_2560x1440.jpg"
              alt="BMW Z4 M40i"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹40–1.2 Cr)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>BMW Z4 M40i</li>
                <li>Jaguar F-Type P300</li>
                <li>Porsche 718 Cayman</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://s2-autoesporte.glbimg.com/ok_hAXxmpfPIjNfY8KljUAUwstQ=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/x/f/QFDrleRJCNQwmhk0GCHg/2019-01-08-lamborghini-huracan-evo-2019-1600-01.jpg"
              alt="Lamborghini Huracán EVO"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹2 Cr+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Lamborghini Huracán EVO</li>
                <li>Ferrari Roma</li>
                <li>Porsche 911 Turbo S</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      <section>
        <h2 className="text-3xl font-semibold mb-4">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://media.ed.edmunds-media.com/porsche/718-cayman/2024/oem/2024_porsche_718-cayman_coupe_gt4-rs_fq_oem_1_1280.jpg"
              alt="Porsche 718 Cayman"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Porsche 718 Cayman</p>
            <p><strong>Price:</strong> ₹90 Lakhs – ₹1.2 Cr</p>
            <p><strong>Highlights:</strong> Mid-engine, premium interior, precision handling</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://mediacloud.carbuyer.co.uk/image/private/s--4K8lVNgg--/v1579646734/carbuyer/2019/05/ferrari_sf90_stradale_5_0.jpg"
              alt="Ferrari SF90 Stradale"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream Car</h3>
            <p><strong>Model:</strong> Ferrari SF90 Stradale</p>
            <p><strong>Price:</strong> ₹7.5 Cr+</p>
            <p><strong>Highlights:</strong> Plug-in hybrid, 1000+ hp, iconic styling</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsCarPage;


