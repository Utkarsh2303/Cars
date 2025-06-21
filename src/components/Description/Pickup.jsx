import React from "react";

const PickupTruckPage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a73897802ba9a3625b68eb3eafd3a77d.png"
                    alt="Pickup Trucks"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Power & Versatility</h1>
                    <p className="text-lg md:text-xl mt-2">Explore the World of Pickup Trucks</p>
                </div>
            </section>

            {/* What is a Pickup Truck */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What is a Pickup Truck?</h2>
                    <p className="text-lg text-gray-700">
                        A pickup truck is a light-duty vehicle with an enclosed cab and an open cargo area with low sides and tailgate. Known for their ruggedness and utility, pickups are ideal for transporting goods, towing, and off-road adventures.
                    </p>
                </div>
                <img
                    src="https://cdn.motor1.com/images/mgl/3KVzA/s1/fastest-trucks-lead.jpg"
                    alt="What is a Pickup Truck"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* How it works (Utility & Design) */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="https://media.ed.edmunds-media.com/ford/f-150/2021/oem/2021_ford_f-150_crew-cab-pickup_lariat_fq_oem_1_1600.jpg"
                    alt="Pickup Truck Design"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Why Choose a Pickup?</h2>
                    <p className="text-lg text-gray-700">
                        Pickup trucks offer unmatched versatility, from hauling heavy loads to tackling tough terrains. Modern pickups combine powerful engines, advanced safety features, and comfortable interiors, making them suitable for both work and family life.
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
                            <li>Exceptional towing and payload capacity</li>
                            <li>Off-road capability</li>
                            <li>Spacious interiors in crew cab models</li>
                            <li>Highly customizable for work or leisure</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Larger size can make city driving challenging</li>
                            <li>Lower fuel efficiency compared to sedans</li>
                            <li>Higher maintenance costs</li>
                            <li>Parking can be difficult in tight spaces</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Pickup Truck Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Pickup Truck Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Ford",
                            logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png",
                            link: "https://www.ford.com",
                        },
                        {
                            name: "Toyota",
                            logo: "https://clipground.com/images/toyota-logo-png-9.png",
                            link: "https://www.toyota.com",
                        },
                        {
                            name: "Chevrolet",
                            logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png",
                            link: "https://www.chevrolet.com",
                        },
                        {
                            name: "RAM",
                            logo: "https://1000logos.net/wp-content/uploads/2023/03/Ram-Logo.png",
                            link: "https://www.ramtrucks.com",
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

            {/* Budget-Friendly Picks */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Budget-Friendly Picks (Under ₹30L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Toyota Hilux",
                            img: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/06/resize_screenshot-2023-06-06-at-22-24-33.jpg",
                        },
                        {
                            name: "Isuzu D-Max",
                            img: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/12/2023-isuzu-d-max-x-terrain.jpeg",
                        },
                        {
                            name: "Mahindra Scorpio Getaway",
                            img: "https://i.ndtvimg.com/i/2018-02/new-gen-mahindra-scorpio-getaway_827x510_71517565941.jpeg",
                        },
                    ].map((truck) => (
                        <div key={truck.name} className="bg-white p-3 rounded-xl shadow space-y-2">
                            <img src={truck.img} alt={truck.name} className="w-full h-40 object-cover rounded" />
                            <p className="text-center font-medium">{truck.name}</p>
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
                            src="https://www.motorbiscuit.com/wp-content/uploads/2022/09/Ford-F-150-Limited.jpg?w=1200"
                            alt="Ford F-150 Limited"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Feature-Rich Pick: Ford F-150 Limited</h3>
                        <p>Top-tier luxury, technology, and towing capability in a legendary package.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://www.motorbiscuit.com/wp-content/uploads/2022/11/2023-Toyota-Tundra-Platinum.jpg?w=1200"
                            alt="Toyota Tundra Platinum"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Luxury Pick: Toyota Tundra Platinum</h3>
                        <p>Premium comfort, advanced safety, and robust performance for every journey.</p>
                    </div>
                </div>
            </section>

            {/* CTA / Suggestion Box */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold">Need Power and Practicality?</h2>
                <p className="text-gray-700">Pickup trucks deliver unmatched utility, durability, and versatility—perfect for work, adventure, and family alike.</p>
            </section>

        </div>
    );
};

export default PickupTruckPage;
