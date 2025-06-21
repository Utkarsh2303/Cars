import React from "react";

const CrossoverCarPage = () => {
  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/11/Screen-Shot-2022-11-22-at-93132-AM3.jpg"
          alt="Crossover on road"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Versatile Adventures</h1>
          <p className="text-lg md:text-xl mt-2">Discover the Power of Crossover Cars</p>
        </div>
      </section>

      {/* What is a Crossover */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">What is a Crossover?</h2>
        <img
          src="https://s1.cdn.autoevolution.com/images/news/gallery/hyundai-tucson-refresh-informally-steals-palisades-dna-has-ample-color-choice_10.jpg"
          alt="Hyundai Tucson"
          className="w-full max-w-4xl rounded-lg mb-4 shadow-md mx-auto"
        />
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          A crossover blends the comfort of a sedan with the rugged appeal of an SUV. Built on a car chassis, it offers better fuel efficiency, easier handling, and higher ground clearance—ideal for urban families and adventurers alike.
        </p>
      </section>

      {/* Top Brands */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Hyundai", logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png", url: "https://www.hyundai.com/" },
            { name: "Kia", logo: "https://freelogopng.com/images/all_img/1686590079kia-logo-png.png", url: "https://www.kia.com/" },
            { name: "Toyota", logo: "https://logos-world.net/wp-content/uploads/2021/03/Toyota-Logo.png", url: "https://www.toyota.com/" },
            { name: "Honda", logo: "https://wallpapers.com/images/hd/silver-honda-logo-3ue41s7ervwlcmte.png", url: "https://www.honda.com/" },
            { name: "Nissan", logo: "https://logodownload.org/wp-content/uploads/2014/09/nissan-logo-1.png", url: "https://www.nissanusa.com/" },
            { name: "Ford", logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png", url: "https://www.ford.com/" },
            { name: "Volkswagen", logo: "https://www.freepnglogos.com/uploads/vw-png-logo/brand-volkswagen-png-logo-17.png", url: "https://www.vw.com/" },
            { name: "Mazda", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Mazda-Logo.png", url: "https://www.mazda.com/" }
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
              <li>High driving position</li>
              <li>Good ground clearance</li>
              <li>Family-friendly utility</li>
              <li>More fuel-efficient than SUVs</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-red-50">
            <h3 className="text-xl font-bold mb-3 text-red-700">Cons</h3>
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>Less rugged than full SUVs</li>
              <li>Higher price than sedans</li>
              <li>Not ideal for extreme off-roading</li>
              <li>Limited towing capacity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Crossover Cars by Price */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Best Crossovers by Price</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex space-x-6 items-center">
            <img
              src="https://st.automobilemag.com/uploads/sites/11/2019/04/2020-Hyundai-Venue-front-side-view-parked.jpg"
              alt="Hyundai Venue"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Budget-Friendly (₹8–12 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Hyundai Venue</li>
                <li>Tata Nexon</li>
                <li>Kia Sonet</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/12/231124_Toyota-Rav4-XSE-Hybrid_Still-7.jpg"
              alt="Toyota RAV4"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Mid-Range (₹15–30 Lakhs)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Toyota RAV4</li>
                <li>Honda CR-V</li>
                <li>Hyundai Tucson</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <img
              src="https://cdn.motor1.com/images/mgl/3W41Jx/s1/audi-q5-2024.jpg"
              alt="Audi Q5"
              className="w-48 rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold">Luxury (₹50 Lakhs+)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Audi Q5</li>
                <li>BMW X3</li>
                <li>Mercedes-Benz GLC</li>
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
              src="https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/Kia-Seltos-GT-Line_HERO-16x9-1.jpg"
              alt="Kia Seltos"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Feature-Rich Pick</h3>
            <p><strong>Model:</strong> Kia Seltos</p>
            <p><strong>Price:</strong> ₹11–20 Lakhs</p>
            <p><strong>Highlights:</strong> Touchscreen, ADAS, panoramic sunroof, turbo variant</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <img
              src="https://media.zigcdn.com/media/model/2023/Jul/front-1-4-left-1308844902_930x620.jpg"
              alt="BMW X5"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Ultimate Dream Crossover</h3>
            <p><strong>Model:</strong> BMW X5</p>
            <p><strong>Price:</strong> ₹1 Cr+</p>
            <p><strong>Highlights:</strong> Luxury interior, xDrive AWD, strong road presence</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrossoverCarPage;
