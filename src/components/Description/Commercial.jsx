import React from "react";

const CommercialVehiclePage = () => {
    return (
        <div className="px-6 py-10 space-y-14 max-w-7xl mx-auto font-sans bg-white">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-[2rem] overflow-hidden shadow-xl">
                <img
                    src="https://asia.daimlertruck.com/uploads/files/211022_LineUP_03_Ys-compressed.jpg"
                    alt="Commercial Vehicles"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/30 flex flex-col justify-center px-10 text-white">
                    <h1 className="text-5xl font-extrabold">Powering Progress</h1>
                    <p className="text-xl mt-2">Explore India’s Most Trusted Commercial Vehicles</p>
                </div>
            </section>

            {/* Introduction */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">What are Commercial Vehicles?</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Commercial vehicles are specifically built for transporting goods and passengers. From mini trucks and pickups to buses and heavy-duty haulers, these vehicles are essential to industries, logistics, and public transport.
                    </p>
                </div>
                <img
                    src="https://achatespower.com/wp-content/uploads/2019/12/iStock-1156528620.jpg"
                    alt="Goods Vehicle"
                    className="rounded-3xl h-72 w-full object-cover shadow-lg"
                />
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Goods Transportation", icon: "🚚" },
                        { title: "Passenger Transit", icon: "🚌" },
                        { title: "Construction & Utility", icon: "🏗️" },
                    ].map((item) => (
                        <div key={item.title} className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center space-y-4">
                            <div className="text-5xl">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pros & Cons */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Pros</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Durable and built for heavy usage</li>
                            <li>High load-carrying capacity</li>
                            <li>Essential for logistics and public transit</li>
                            <li>Many segment options: light, medium, heavy</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-800 mb-3">Cons</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Lower mileage due to heavy loads</li>
                            <li>Higher maintenance & service costs</li>
                            <li>Limited comfort features</li>
                            <li>Requires commercial driving license</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Commercial Vehicle Brands */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top Brands in India</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Tata Motors", logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png", link: "https://www.tatamotors.com" },
                        { name: "Ashok Leyland", logo: "https://wallpaperaccess.com/full/2229709.png", link: "https://www.ashokleyland.com" },
                        { name: "EICHER", logo: "https://static.wixstatic.com/media/f2bf43_ee7bf2a90ef14c92917917ce26b11513~mv2.png", link: "https://www.eichertrucksandbuses.com" },
                        { name: "Mahindra", logo: "https://logos-world.net/wp-content/uploads/2022/12/Mahindra-Logo.png", link: "https://www.mahindra.com" }
                    ].map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-xl shadow hover:shadow-xl flex flex-col items-center space-y-3"
                        >
                            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                            <span className="text-center font-medium text-gray-800">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Popular Vehicles by Segment */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Popular small duty Vehicles </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Tata Ace Gold", img: "https://images.news18.com/ibnlive/uploads/2021/07/1627624836_tata-ace-gold-cx-1600x900.png" },
                        { name: "Mahindra Jeeto", img: "https://trucksbuses.com/uploads/15619_cab755187c4e436eaaf649a8ccca92eegallery-2-removebg-preview.png" },
                        { name: "Ashok Leyland Dost+", img: "https://tse1.mm.bing.net/th?id=OIP.jYChU0KFN-lfpsv1zzoXqQAAAA&pid=Api&P=0&h=180" },
                    ].map((vehicle) => (
                        <div key={vehicle.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={vehicle.img} alt={vehicle.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{vehicle.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature-Rich & Heavy Duty Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Heavy-Duty & Feature-Rich Options</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.rushlane.com/wp-content/uploads/2020/09/tata-signa-5525-s.jpg"
                            alt="Tata Signa Truck"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Heavy-Duty Pick: Tata Signa 5530.S</h3>
                        <p>Designed for long-haul logistics, it’s equipped with a powerful engine and best-in-class payload capacity.</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://assets.tractorjunction.com/truck-junction/assets/images/vehicles/tata-starbus-ultra-sub-urban.jpg??format=webp&width=527&height=270"
                            alt="Starbus Ultra"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Passenger Pick: Tata Starbus Ultra</h3>
                        <p>Spacious, safe, and reliable—ideal for intercity or corporate transport fleets.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <h2 className="text-3xl font-bold">Drive Business Forward</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Commercial vehicles are the backbone of the economy. Choose one that matches your business needs and ensures profitability with performance.
                </p>
            </section>
        </div>
    );
};

export default CommercialVehiclePage;
