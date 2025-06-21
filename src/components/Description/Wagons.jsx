import React from "react";

const StationWagonPage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://cdn.dealeraccelerate.com/gaa/25/13235/38729/1920x1440/1972-american-motors-station-wagon"
                    alt="Station Wagons"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Spacious & Smart</h1>
                    <p className="text-lg md:text-xl mt-2">Discover the Utility of Station Wagons</p>
                </div>
            </section>

            {/* What is a Station Wagon */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What is a Station Wagon?</h2>
                    <p className="text-lg text-gray-700">
                        A Station Wagon, also known as an estate car, is a passenger vehicle that combines the comfort of a sedan with the cargo capacity of an SUV. They are known for their extended rear cargo area and flat-folding rear seats.
                    </p>
                </div>
                <img
                    src="https://heritagemuseumsandgardens.org/wp-content/uploads/2021/01/SFD_4271-scaled.jpg"
                    alt="What is a Station Wagon"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* How it works (Utility & Design) */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="http://www.plan59.com/images/JPGs/chv59sw01.jpg"
                    alt="Station Wagon Design"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Why Choose a Wagon?</h2>
                    <p className="text-lg text-gray-700">
                        Station wagons offer superior cargo space without compromising on fuel efficiency or handling. With a lower center of gravity than SUVs, they provide a car-like driving experience with SUV-like practicality.
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
                            <li>Ample cargo space</li>
                            <li>Better fuel efficiency than SUVs</li>
                            <li>Great road stability</li>
                            <li>Perfect for long-distance road trips</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Less ground clearance than SUVs</li>
                            <li>Not very popular in some markets</li>
                            <li>Somewhat conservative design</li>
                            <li>Fewer model choices available</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Station Wagon Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Wagon Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Volvo",
                            logo: "https://www.pngmart.com/files/23/Volvo-Logo-PNG-Image.png",
                            link: "https://www.volvocars.com",
                        },
                        {
                            name: "Subaru",
                            logo: "https://clipartcraft.com/images/subaru-logo-transparent-2.png",
                            link: "https://www.subaru.com",
                        },
                        {
                            name: "Audi",
                            logo: "https://www.pngall.com/wp-content/uploads/13/Audi-Logo-PNG-File.png",
                            link: "https://www.audi.com",
                        },
                        {
                            name: "Mercedes-Benz",
                            logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
                            link: "https://www.mercedes-benz.com",
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

            {/* Budget-Friendly Wagons */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Budget-Friendly Picks (Under ₹30L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Skoda Octavia Combi",
                            img: "https://s1.cdn.autoevolution.com/images/gallery/SKODA-Octavia-Combi-RS-4877_23.jpg",
                        },
                        {
                            name: "Subaru Outback",
                            img: "https://i.pinimg.com/originals/5e/d1/87/5ed187c0a04821a79fa56dd8dfea6e20.jpg",
                        },
                        {
                            name: "Volvo V40 Cross Country",
                            img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/volvo-v40-cross-country-1.jpg?itok=8vMXgSl_",
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
                            src="https://www.hdcarwallpapers.com/walls/2020_audi_rs6_avant_4k-HD.jpg"
                            alt="Audi RS6 Avant"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Feature-Rich Pick: Audi RS6 Avant</h3>
                        <p>Supercar performance wrapped in a family-friendly wagon.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/v90-cc-web-128_0.jpg"
                            alt="Volvo V90 Cross Country"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Luxury Pick: Volvo V90 Cross Country</h3>
                        <p>Scandinavian elegance, off-road confidence, and elite comfort.</p>
                    </div>
                </div>
            </section>

            {/* CTA / Suggestion Box */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold">Need Space Without the Bulk?</h2>
                <p className="text-gray-700">Station wagons strike the perfect balance between space, style, and efficiency. A smart alternative to SUVs for families and travelers alike.</p>
            </section>

        </div>
    );
};

export default StationWagonPage;
