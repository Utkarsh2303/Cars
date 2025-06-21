import React from "react";

const SedanPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://cdn.motor1.com/images/mgl/Okw4B/s1/2022-mercedes-maybach-s680.jpg"
          alt="Luxury Sedans"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Comfort Meets Class</h1>
          <p className="text-lg md:text-xl mt-2">Explore the World of Sedans</p>
        </div>
      </section>

     
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Sedan?</h2>
        <img
          src="https://www.bmw.com/content/dam/bmw/marketAU/bmw_com/images/overview/bmw-7-series-sedan-ms-G70.jpg"
          alt="Luxury Sedan"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Sedans are traditional passenger cars known for their balanced proportions, comfortable interiors, and smooth rides. Ideal for daily commutes and long drives, sedans typically offer four doors, ample boot space, and seating for five.
        </p>
      </section>

      {/* Top Brands */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              name: "Hyundai",
              logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
              url: "https://www.hyundai.com/",
            },
            {
              name: "Honda",
              logo: "https://freelogopng.com/images/all_img/1686370109honda-car-logo.png",
              url: "https://www.honda.com/",
            },
            {
              name: "Toyota",
              logo: "https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png",
              url: "https://www.toyota.com/",
            },
            {
              name: "Skoda",
              logo: "https://logodix.com/logo/1058614.png",
              url: "https://www.skoda-auto.com/",
            },
            {
              name: "Volkswagen",
              logo: "https://www.pikpng.com/pngl/b/235-2353865_volkswagen-logo-png-transparent-transparent-vw-logo-png.png",
              url: "https://www.vw.com/",
            },
            {
              name: "BMW",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
              url: "https://www.bmw.com/",
            },
            {
              name: "Mercedes-Benz",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
              url: "https://www.mercedes-benz.com/",
            },
            {
              name: "Audi",
              logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png",
              url: "https://www.audi.com/",
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
              <li>Spacious interiors</li>
              <li>Great ride quality</li>
              <li>Fuel-efficient models</li>
              <li>Elegant design</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Lower ground clearance</li>
              <li>Not ideal for rough terrain</li>
              <li>Limited cargo space vs SUVs</li>
              <li>Not as trendy as SUVs</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Sedans by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg"
              alt="Honda City"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹10–15 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Honda City</li>
                <li>Hyundai Verna</li>
                <li>Skoda Slavia</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_1280.jpg"
              alt="BMW 3 Series"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹40–80 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>BMW 3 Series</li>
                <li>Audi A4</li>
                <li>Mercedes-Benz C-Class</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0c6b9950-5ded-5bfa-86cc-3272c6850000"
              alt="Mercedes-Maybach S-Class"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹2 Cr+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Mercedes-Maybach S-Class</li>
                <li>BMW 7 Series</li>
                <li>Audi A8L</li>
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
              src="https://asset.honda-indonesia.com/media-library/514431fa-21c3-49bb-b55b-113a0f1fe75a/SdVLFIFmYSaLNuuCGioe4x8ZEqc5Xu1oBsIlOaVY.jpg"
              alt="Honda City"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Honda City ZX</p>
            <p><strong>Price:</strong> ₹14 Lakhs approx</p>
            <p><strong>Highlights:</strong> Sunroof, LED lighting, advanced safety tech</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg"
              alt="Mercedes S-Class"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream Car</h3>
            <p><strong>Model:</strong> Mercedes-Benz S-Class</p>
            <p><strong>Price:</strong> ₹2 Cr+</p>
            <p><strong>Highlights:</strong> Unparalleled comfort, tech-loaded, chauffeur-style luxury</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SedanPage;
