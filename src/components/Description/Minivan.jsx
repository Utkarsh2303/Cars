import React from "react";

const MinivanPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://s1.cdn.autoevolution.com/images/news/gallery/chrysler-celebrates-35-years-of-minivans-at-2019-chicago-auto-show_2.jpg"
          alt="Minivan on road"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Room for Everyone</h1>
          <p className="text-lg md:text-xl mt-2">Explore the Comfort and Space of Minivans</p>
        </div>
      </section>

      {/* What is a Minivan */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Minivan?</h2>
        <img
          src="https://cms-i.autodaily.vn/du-lieu/2023/09/22/toyota-sienna-2024-autodaily-1.jpg"
          alt="Toyota Sienna"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          A minivan is designed for families and groups, offering maximum seating and cargo space. With sliding doors, comfortable interiors, and great fuel efficiency, minivans are perfect for long trips and daily commutes alike.
        </p>
      </section>

      {/* Top Brands */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Toyota", logo: "https://logos-world.net/wp-content/uploads/2021/03/Toyota-Logo.png", url: "https://www.toyota.com/" },
            { name: "Honda", logo: "https://wallpapers.com/images/hd/silver-honda-logo-3ue41s7ervwlcmte.png", url: "https://www.honda.com/" },
            { name: "Kia", logo: "https://freelogopng.com/images/all_img/1686590079kia-logo-png.png", url: "https://www.kia.com/" },
            { name: "Chrysler", logo: "https://purepng.com/public/uploads/large/purepng.com-chrysler-logochryslerfiat-chrysler-automobilesfiatcarschrysler-logo-1701527440936uvdpg.png", url: "https://www.chrysler.com/" },
            { name: "Hyundai", logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png", url: "https://www.hyundai.com/" },
            { name: "Renault", logo: "https://www.carlogos.org/logo/Renault-logo-2015-2048x2048.png", url: "https://www.renault.com/" },
            { name: "Tata", logo: "https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png", url: "https://www.tatamotors.com/" },
            { name: "Maruti Suzuki", logo: "https://companieslogo.com/img/orig/MARUTI.NS-9974f2f4.png?t=1593961147", url: "https://www.marutisuzuki.com/" },
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
              <li>Ample passenger and cargo space</li>
              <li>Sliding doors for easy access</li>
              <li>Comfortable ride for long trips</li>
              <li>Family-oriented features and safety</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Not ideal for off-roading</li>
              <li>Large size can be tricky to park</li>
              <li>Lower ground clearance</li>
              <li>Less stylish than SUVs or crossovers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Minivans by Price */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Minivans by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/Triber/10066/1705906309105/front-left-side-47.jpg"
              alt="Renault Triber"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹6–10 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Renault Triber</li>
                <li>Maruti Suzuki Ertiga</li>
                <li>Datsun GO+</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="http://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http:%2f%2fcdni.autocarindia.com%2fReviews%2fmaruti-xl6-3.jpg&c=0"
              alt="Maruti Suzuki XL6"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹10–20 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Maruti Suzuki XL6</li>
                <li>Kia Carens</li>
                <li>Toyota Innova Crysta</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://s1.cdn.autoevolution.com/images/news/gallery/2018-chrysler-pacifica-minivan-suits-up-with-s-appearance-package_2.jpg"
              alt="Chrysler Pacifica"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹35 Lakhs+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Chrysler Pacifica</li>
                <li>Toyota Vellfire</li>
                <li>Mercedes-Benz V-Class</li>
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
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190918110857_renault-triber-18.jpg&h=578&w=872&c=1"
              alt="Renault Triber"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Renault Triber</p>
            <p><strong>Price:</strong> ₹6–9 Lakhs</p>
            <p><strong>Highlights:</strong> Modular seating, best-in-class boot, touchscreen infotainment</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/drxu2t07fhyheu66fi2i"
              alt="Toyota Vellfire"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream Minivan</h3>
            <p><strong>Model:</strong> Toyota Vellfire</p>
            <p><strong>Price:</strong> ₹1.2 Cr+</p>
            <p><strong>Highlights:</strong> Ultra-luxurious interiors, reclining captain seats, hybrid powertrain</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinivanPage;
