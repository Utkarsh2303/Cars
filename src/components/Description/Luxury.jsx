import React from "react";

const LuxuryCarPage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://static3.therichestimages.com/wordpress/wp-content/uploads/2015/11/1622053-4961x3307-2013-Mercedes-Benz-Vision-Gran-Turismo-concept-e1446483647459.jpg"
                    alt="Luxury Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Luxury in Motion</h1>
                    <p className="text-lg md:text-xl mt-2">Experience the Pinnacle of Automotive Elegance</p>
                </div>
            </section>

            {/* What is a Luxury Car */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What Defines a Luxury Car?</h2>
                    <p className="text-lg text-gray-700">
                        A luxury car provides superior performance, comfort, technology, and design. These vehicles are often manufactured with high-end materials and are equipped with the latest in safety and infotainment systems.
                    </p>
                </div>
                <img
                    src="https://static2.hotcarsimages.com/wordpress/wp-content/uploads/2020/11/Bentley-Flying-Spur-Front-Side-e1606140352139.jpg"
                    alt="Luxury Sedan"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* Design and Performance */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="https://i.redd.it/8l71f4ab29h31.jpg"
                    alt="Mercedes Interior"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Design Meets Performance</h2>
                    <p className="text-lg text-gray-700">
                        Luxury cars are crafted with precision and attention to detail. From leather interiors to adaptive suspensions, they offer a balanced blend of comfort and exhilarating performance.
                    </p>
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Pros</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Top-notch interiors and materials</li>
                            <li>Advanced technology and features</li>
                            <li>Refined driving experience</li>
                            <li>Prestigious brand image</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>High purchase and maintenance costs</li>
                            <li>Lower fuel efficiency</li>
                            <li>Costly insurance</li>
                            <li>Limited practicality in rough terrains</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Luxury Car Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Luxury Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        { name: "Mercedes-Benz", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png", link: "https://www.mercedes-benz.com" },
                        { name: "BMW", logo: "https://www.freepnglogos.com/uploads/bmw-brands-logo-image-1.png", link: "https://www.bmw.com" },
                        { name: "Audi", logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png", link: "https://www.audi.com" },
                        { name: "Lexus", logo: "https://www.pngmart.com/files/22/Lexus-Logo-PNG-HD.png", link: "https://www.lexus.com" },
                        { name: "Jaguar", logo: "https://www.pngplay.com/wp-content/uploads/13/Jaguar-Logo-PNG-Images-HD.png", link: "https://www.jaguar.com" },
                        { name: "Volvo", logo: "https://www.pngmart.com/files/23/Volvo-Logo-PNG-Image.png", link: "https://www.volvocars.com" },
                        { name: "Genesis", logo: "https://www.pngkit.com/png/full/252-2522720_hyundai-genesis-logo-png-gallery-genesis-open-2018.png", link: "https://www.genesis.com" },
                        { name: "Porsche", logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png   ", link: "https://www.porsche.com" }
                    ].map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-xl shadow hover:bg-gray-50 flex flex-col items-center space-y-2"
                        >
                            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                            <span className="text-center font-medium">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Feature-Rich & Elite Luxury Cars */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Elite Feature-Rich Models</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://vrelegume.rs/wp-content/uploads/2021/04/audi-a8-horch.jpg"
                            alt="Audi A8"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Audi A8</h3>
                        <p>Luxury, performance, and technology meet in this executive sedan.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://showroomex.com/wp-content/uploads/2023/03/Mercedes-benz-India-s-class-price-1024x512.webp"
                            alt="Mercedes S-Class"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Mercedes-Benz S-Class</h3>
                        <p>The gold standard of luxury cars with advanced tech and unmatched comfort.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold text-white">Redefine Your Drive</h2>
                <p className="text-gray-100">Luxury cars are more than just transportation — they are statements of success, sophistication, and cutting-edge innovation.</p>
            </section>
        </div>
    );
};

export default LuxuryCarPage;
