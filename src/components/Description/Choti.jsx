import React from "react";

const HatchbackPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">

     
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.ctfassets.net/2sam6k0rncvg/38cE6U7nYGw6b0c1YRVXmf/be6b495dc75c52318b9a3c9db23707c2/best-hatchback-cars-in-india.png"
          alt="Modern hatchback on road"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Practical & Stylish</h1>
          <p className="text-lg md:text-xl mt-2">Discover the World of Hatchbacks</p>
        </div>
      </section>

      
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Hatchback?</h2>
        <img
          src="https://wallpaper.caricos.com/2019-Mazda3-Hatchback---Side-183620-2560x1440.jpg"
          alt="Hatchback car side view"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Hatchbacks are compact vehicles with a rear door that swings upward, providing easy access to the cargo area. They are perfect for city driving, offering excellent fuel efficiency and practicality.
        </p>
      </section>

      
      <section>
  <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
    {[
      {
        name: "Maruti Suzuki",
        logo: "https://pngimg.com/uploads/suzuki/suzuki_PNG12291.png",
        url: "https://www.marutisuzuki.com/",
      },
      {
        name: "Hyundai",
        logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
        url: "https://www.hyundai.com/",
      },
      {
        name: "Honda",
        logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png",
        url: "https://www.honda.com/",
      },
      {
        name: "Tata Motors",
        logo: "https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png",
        url: "https://www.tatamotors.com/",
      },
      {
        name: "Ford",
        logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png",
        url: "https://www.ford.com/",
      },
      {
        name: "Volkswagen",
        logo: "https://www.pikpng.com/pngl/b/235-2353865_volkswagen-logo-png-transparent-transparent-vw-logo-png.png",
        url: "https://www.vw.com/",
      },
      {
        name: "Renault",
        logo: "https://www.freepnglogos.com/uploads/renault-logo-png/renault-logo-renault-logos-vector-eps-cdr-svg-download-6.png",
        url: "https://www.renault.com/",
      },
      {
        name: "Toyota",
        logo: "http://www.pngall.com/wp-content/uploads/2016/04/Toyota-Logo.png",
        url: "https://www.toyota.com/",
      },
    ].map(({ name, logo, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-lg p-4 text-center text-lg font-medium shadow-sm transition transform duration-300 flex flex-col items-center space-y-2 no-underline hover:shadow-lg hover:bg-gray-100 hover:scale-105 cursor-pointer"
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
              <li>Compact and easy to park</li>
              <li>Fuel-efficient and economical</li>
              <li>Practical for city driving</li>
              <li>Affordable price range</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Limited rear passenger space</li>
              <li>Smaller cargo capacity compared to SUVs</li>
              <li>Less powerful engines</li>
              <li>Not ideal for off-road or rugged terrain</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Hatchbacks by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://kalingatv.com/wp-content/uploads/2021/04/Maruti-Suzuki-Swift.jpg"
              alt="Maruti Suzuki Swift"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹5–8 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Maruti Suzuki Swift</li>
                <li>Tata Tiago</li>
                <li>Hyundai Grand i10 Nios</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://paultan.org/image/2020/10/2021-Hyundai-i20-N-Exterior-7.jpg"
              alt="Hyundai i20"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹8–15 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Hyundai i20</li>
                <li>Tata Altroz</li>
                <li>Volkswagen Polo</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://media.zigcdn.com/media/content/2019/Nov/toyota_glanza-7987_1.jpg"
              alt="Toyota Glanza"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Premium (₹15 Lakhs+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Toyota Glanza</li>
                <li>Honda Jazz</li>
                <li>Volkswagen Golf</li>
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
              src="https://sf2.autojournal.fr/wp-content/uploads/autojournal/2020/10/Suzuki_Swift_2020_b03e1.jpg"
              alt="Maruti Suzuki Swift"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Maruti Suzuki Swift</p>
            <p><strong>Price:</strong> ₹5–8 Lakhs</p>
            <p><strong>Highlights:</strong> Sporty design, fuel-efficient, reliable</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://s1.cdn.autoevolution.com/images/news/gallery/refreshed-2023-hyundai-i20-debuts-with-sporty-elegant-design-and-more-technology_1.jpg"
              alt="Hyundai i20"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Popular Choice</h3>
            <p><strong>Model:</strong> Hyundai i20</p>
            <p><strong>Price:</strong> ₹8–15 Lakhs</p>
            <p><strong>Highlights:</strong> Modern features, spacious interior, good value</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HatchbackPage;
