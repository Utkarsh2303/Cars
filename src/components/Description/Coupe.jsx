import React from "react";

const CoupesPage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://car-images.bauersecure.com/wp-images/166860/081-mercedes-cle.jpg"
                    alt="Coupes"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Sleek & Stylish</h1>
                    <p className="text-lg md:text-xl mt-2">Experience the thrill of Coupes</p>
                </div>
            </section>

            {/* What is a Coupe */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What is a Coupe?</h2>
                    <p className="text-lg text-gray-700">
                        A coupe is a passenger car with a sloping rear roofline and two doors. Coupes are designed for sporty looks and performance, often offering a more dynamic driving experience compared to sedans or hatchbacks.
                    </p>
                </div>
                <img
                    src="https://cdn.motor1.com/images/mgl/g4AXYP/s3/2023-mercedes-amg-gt-coupe-renderings.jpg"
                    alt="What is a Coupe"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* How it works (Driving Dynamics) */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="https://cdn.motor1.com/images/mgl/koBgQM/s1/mercedes-benz-cle-2023.jpg"
                    alt="Coupe Driving Dynamics"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Driving Dynamics</h2>
                    <p className="text-lg text-gray-700">
                        Coupes are often lower to the ground, with tighter suspension and lighter weight than typical cars, giving them agile handling and powerful acceleration. They're perfect for driving enthusiasts seeking thrill and control.
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
                            <li>Sporty aesthetics and performance</li>
                            <li>Better aerodynamics</li>
                            <li>Great driving experience</li>
                            <li>Typically lighter and faster</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Limited rear seat space</li>
                            <li>Less cargo capacity</li>
                            <li>Usually more expensive</li>
                            <li>Not ideal for families</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Coupe Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Coupe Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            name: "BMW",
                            logo: "http://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png.png",
                            link: "https://www.bmw.com",
                        },
                        {
                            name: "Audi",
                            logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png",
                            link: "https://www.audi.com",
                        },
                        {
                            name: "Mercedes-Benz",
                            logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
                            link: "https://www.mercedes-benz.com",
                        },
                        {
                            name: "Porsche",
                            logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png",
                            link: "https://www.porsche.com",
                        },
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

            {/* Budget-Friendly Coupes */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Budget-Friendly Picks (Under ₹25L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Hyundai Elantra N Line",
                            img: "https://cdn.motor1.com/images/mgl/GxoB1/s1/2022-hyundai-elantra-n.jpg",
                        },
                        {
                            name: "Mini Cooper 3-Door",
                            img: "https://vehiclephotos.b-cdn.net/photos/vehicles/274921/6302659-large.jpg",
                        },
                        {
                            name: "Volkswagen Polo GTI",
                            img: "https://content.presspage.com/uploads/1397/f824aeb5-9113-4495-8719-bbbafb86a624/1920_pologtiedition251.jpg?10000",
                        },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-3 rounded-xl shadow space-y-2">
                            <img src={car.img} alt={car.name} className="w-full h-40 object-cover rounded" />
                            <p className="text-center font-medium">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury Picks */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Luxury & Performance Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://www.carspecs.us/photos/5d522b73273babd605c32c0c6a823ba1aa143978-2000.jpg"
                            alt="Audi A5 Coupe"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Feature-Rich Pick: Audi A5 Coupe</h3>
                        <p>Elegant, tech-loaded, and performance-driven daily luxury.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://s1.cdn.autoevolution.com/images/news/minty-fresh-bmw-m4-competition-coupe-is-an-m-festooned-extravaganza-206769_1.jpg"
                            alt="BMW M4 Coupe"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Luxury Pick: BMW M4 Coupe</h3>
                        <p>High-performance beast with aggressive styling and unmatched control.</p>
                    </div>
                </div>
            </section>

            {/* CTA / Suggestion Box */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold">Ready to Ride in Style?</h2>
                <p className="text-gray-700">If you're after elegance, speed, and a head-turning design — Coupes deliver all that and more.</p>
            </section>

        </div>
    );
};

export default CoupesPage;
