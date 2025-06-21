import React from "react";

const ElectricVehiclePage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">


            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://cdn.mozo.com.au/images/atwood/14293/shifting-gears-on-electric-cars-evx-targets-ev-charging.png"
                    alt="Luxury Sedans"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Go Electric⚡</h1>
                    <p className="text-lg md:text-xl mt-2">Drive the Future</p>
                </div>
            </section>



            {/* What is an EV */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What is an Electric Vehicle?</h2>
                    <p className="text-lg text-gray-700">
                        An Electric Vehicle (EV) uses one or more electric motors powered by a battery pack instead of a traditional internal combustion engine. EVs offer a cleaner, quieter, and often more efficient alternative to petrol or diesel vehicles.
                    </p>
                </div>
                <img
                    src="https://stroebelautomotive.com/wp-content/uploads/2020/12/AdobeStock_377905344-2048x1536.jpeg"
                    alt="What is an EV"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* How it works */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="https://www.evengineeringonline.com/wp-content/uploads/2023/11/EV_Sensor_Placement.jpeg"
                    alt="EV Working"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">How Do Electric Vehicles Work?</h2>
                    <p className="text-lg text-gray-700">
                        EVs draw power from rechargeable battery packs. These batteries send electricity to motors that turn the wheels. When braking or slowing down, some EVs use regenerative braking to convert energy back into the battery.
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
                            <li>Zero emissions – environment friendly</li>
                            <li>Lower running costs (₹ per km)</li>
                            <li>Less maintenance – fewer moving parts</li>
                            <li>Government incentives available</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Higher initial cost</li>
                            <li>Limited range in cheaper models</li>
                            <li>Charging infrastructure still growing</li>
                            <li>Battery replacement is expensive</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top EV Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Tesla",
                            logo: "http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png",
                            link: "https://www.tesla.com",
                        },
                        {
                            name: "Tata Motors",
                            logo: "https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png",
                            link: "https://www.tatamotors.com",
                        },
                        {
                            name: "Hyundai",
                            logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
                            link: "https://www.hyundai.com",
                        },
                        {
                            name: "MG Motor",
                            logo: "https://loghi-famosi.com/wp-content/uploads/2021/09/MG-Motor-Logo-2010-2021.png",
                            link: "https://www.mgmotor.co.in",
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

            {/* Budget-Friendly EVs */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Budget-Friendly Picks (Under ₹15L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Tata Tiago EV",
                            img: "https://images.hindustantimes.com/img/2022/09/28/1600x900/tiago_1664352635402_1664352635613_1664352635613.JPG",
                        },
                        {
                            name: "MG Comet EV",
                            img: "https://tse2.mm.bing.net/th?id=OIP.n1DgfWMPl7BwTYuJvFEhvwHaEK&pid=Api&P=0&h=180",
                        },
                        {
                            name: "Citroen eC3",
                            img: "https://tse2.mm.bing.net/th?id=OIP.0WGTe9B0hS7Xl7neVhOLbgHaEo&pid=Api&P=0&h=180",
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
                            src="https://tse4.mm.bing.net/th?id=OIP.b1jPqVnOEbP_80FYtnLi6wHaEK&pid=Api&P=0&h=180"
                            alt="Tata Nexon EV"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Feature-Rich Pick: Tata Nexon EV LR</h3>
                        <p>Modern features, excellent range, Indian value king.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://cdn.motor1.com/images/mgl/qpGBL/s1/tesla-model-3-gray-2.jpg"
                            alt="Tesla Model 3"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Luxury Pick: Tesla Model 3</h3>
                        <p>Global benchmark for electric performance & innovation.</p>
                    </div>
                </div>
            </section>

            {/* CTA / Suggestion Box */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold">Thinking of Going Electric?</h2>
                <p className="text-gray-700">EVs aren't just the future — they’re the present. Whether you're looking to save money, go green, or drive tech-forward — there's an electric car for you.</p>
            </section>

        </div>
    );
};

export default ElectricVehiclePage;
