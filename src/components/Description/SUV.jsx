import React from "react";

const SUVPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">

      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/05/4addcff7.jpg"
          alt="SUV on rugged terrain"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Adventure Awaits</h1>
          <p className="text-lg md:text-xl mt-2">Discover the Power of SUVs</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">What is an SUV?</h2>
        <img
          src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/FutureAndConcept/xmotion/nissan-xmotion-compact-suv-side-profile.jpg.ximg.l_full_m.smart.jpg"
          alt="SUV profile"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          SUVs (Sport Utility Vehicles) are versatile vehicles designed for both city driving and off-road adventures. They feature high ground clearance, rugged build, spacious interiors, and powerful engines, making them ideal for families and explorers alike.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              name: "Toyota",
              logo: "http://clipart-library.com/images_k/toyota-logo-transparent/toyota-logo-transparent-15.png",
              url: "https://www.toyota.com/",
            },
            {
              name: "Ford",
              logo: "https://pngimg.com/uploads/ford/ford_PNG12252.png",
              url: "https://www.ford.com/",
            },
            {
              name: "Mahindra",
              logo: "https://bootflare.com/wp-content/uploads/2024/02/Mahindra-Logo-1536x864.png",
              url: "https://www.mahindra.com/",
            },
            {
              name: "Jeep",
              logo: "https://www.pngall.com/wp-content/uploads/13/Jeep-Logo-PNG-Photo.png",
              url: "https://www.jeep.com/",
            },
            {
              name: "Tata",
              logo: "https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png",
              url: "https://www.tatamotors.com/",
            },
            {
              name: "Hyundai",
              logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
              url: "https://www.hyundai.com/",
            },
            {
              name: "Land Rover",
              logo: "https://logodownload.org/wp-content/uploads/2019/08/land-rover-logo.png",
              url: "https://www.landrover.com/",
            },
            {
              name: "Kia",
              logo: "https://tse4.mm.bing.net/th?id=OIP.pIVVFbQQY-5HGN8_LgZv9AHaCt&pid=Api&P=0&h=180",
              url: "https://www.kia.com/",
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
              <li>Spacious interiors and cargo capacity</li>
              <li>Higher ground clearance for rough roads</li>
              <li>Strong road presence</li>
              <li>All-wheel or 4-wheel drive options</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Lower fuel efficiency</li>
              <li>Larger size makes urban maneuvering tougher</li>
              <li>Higher maintenance costs</li>
              <li>More expensive than sedans or hatchbacks</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Best SUVs by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.0hlZWtkbyiCMGLqFg3QF4AHaEx&pid=Api&P=0&h=180"
              alt="Hyundai Creta"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹10–20 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Hyundai Creta</li>
                <li>Mahindra XUV300</li>
                <li>Maruti Grand Vitara</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.vpDq_k4ERgsBgSBr60_YPwHaE6&pid=Api&P=0&h=180"
              alt="Tata Harrier"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹20–35 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tata Harrier</li>
                <li>MG Hector Plus</li>
                <li>Hyundai Tucson</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.RLkVRREj4UE-vEXz6sRDVwHaEK&pid=Api&P=0&h=180"
              alt="Range Rover"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹70 Lakhs+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Land Rover Range Rover</li>
                <li>Mercedes-Benz G-Class</li>
                <li>BMW X7</li>
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
              src="https://images.carandbike.com/car-images/big/mahindra/xuv700/mahindra-xuv700.jpg"
              alt="Mahindra XUV700"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Mahindra XUV700</p>
            <p><strong>Price:</strong> ₹15–26 Lakhs</p>
            <p><strong>Highlights:</strong> ADAS, panoramic sunroof, turbo engine options</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.0mwAmk2scHzMYAt4Ms5EFgHaEo&pid=Api&P=0&h=180cd "
              alt="Mercedes G-Class"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream SUV</h3>
            <p><strong>Model:</strong> Mercedes-Benz G-Class</p>
            <p><strong>Price:</strong> ₹2.5 Cr+</p>
            <p><strong>Highlights:</strong> Iconic design, off-road legend, unmatched luxury</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SUVPage;
