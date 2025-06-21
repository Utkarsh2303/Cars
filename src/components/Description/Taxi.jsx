import React from "react";

const TaxiCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://tse3.mm.bing.net/th?id=OIP.1kFemD4gt3vM5sT_05IB6QHaFj&pid=Api&P=0&h=180"
                    alt="Taxi Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black/70 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">Efficient. Reliable. Ride-Ready.</h1>
                    <p className="text-xl mt-3 font-medium">The best cars for taxis and commercial use</p>
                </div>
            </section>

            {/* What is a Taxi Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Taxi Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Taxi cars are vehicles chosen for their exceptional fuel efficiency, comfort, durability, and low maintenance. Commonly seen in city rides and long-distance travel, these cars offer convenience for passengers and cost-effectiveness for owners.
                    </p>
                </div>
                <img
                    src="https://live.staticflickr.com/65535/49492184453_a110fd867c_b.jpg"
                    alt="Taxi Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Taxi Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://cdn.zeebiz.com/sites/default/files/2022/09/05/198606-toyota-innova-crysta-5.jpg"
                    alt="Why Choose Taxi"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Taxi-Friendly Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Designed for commercial use, these cars offer exceptional mileage, passenger comfort, and long-lasting performance — making them perfect for cab aggregators, rental fleets, and independent taxi operators.
                    </p>
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-700 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>High fuel efficiency</li>
                            <li>Low maintenance costs</li>
                            <li>Great for long distances</li>
                            <li>Spacious & passenger-friendly</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Basic interiors in budget models</li>
                            <li>Not always powerful for hills</li>
                            <li>Limited luxury feel</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Taxi Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Brands for Taxi Use</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Maruti Suzuki",
                        logo: "https://pngimg.com/uploads/suzuki/suzuki_PNG12291.png",
                        link: "https://www.marutisuzuki.com",
                    }, {
                        name: "Hyundai",
                        logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
                        link: "https://www.hyundai.com/in/en",
                    }, {
                        name: "Toyota",
                        logo: "https://clipground.com/images/toyota-logo-png-9.png",
                        link: "https://www.toyotabharat.com",
                    }, {
                        name: "Tata Motors",
                        logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png",
                        link: "https://www.tatamotors.com",
                    }].map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center space-y-3"
                        >
                            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                            <span className="text-center font-medium text-gray-800">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Budget-Friendly Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Budget-Friendly Taxi Picks (Under ₹12L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Maruti Suzuki Dzire",
                        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire/10243/1686044076724/front-left-side-47.jpg",
                    }, {
                        name: "Hyundai Aura",
                        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20200121060227_hyundai-aura-4.jpg&w=730&h=484&q=75&c=1",
                    }, {
                        name: "Tata Tigor CNG",
                        img: "https://cdni.autocarindia.com/ExtraImages/20220119121003_Tiago_iCNG_Exterior_1.jpg",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Premium Taxi Cars</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://stat.overdrive.in/wp-content/odgallery/2020/11/58040_2021_Toyota_innova_crysta_1.jpg"
                            alt="Toyota Innova Crysta"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Toyota Innova Crysta</h3>
                        <p>Known for unmatched reliability, comfort, and ample space. A favorite for intercity and luxury taxi services.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://stat.overdrive.in/wp-content/odgallery/2018/11/48428_2019-Maruti-Suzuki-Ertiga.jpg"
                            alt="Maruti Suzuki Ertiga"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">MPV Pick: Maruti Suzuki Ertiga</h3>
                        <p>Fuel-efficient 7-seater with hybrid/CNG options. Affordable comfort for large groups and ride shares.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-yellow-600 to-gray-800 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Start Your Taxi Journey Right</h2>
                <p className="text-lg max-w-2xl mx-auto">Whether you're a fleet owner or solo cabbie, these cars deliver what matters — efficiency, comfort, and peace of mind.</p>
            </section>
        </div>
    );
};

export default TaxiCarPage;
