import React from "react";

const ConvertiblePage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://i.pinimg.com/originals/6c/79/e5/6c79e547181b3f5e423f71820e2e10ea.jpg"
                    alt="Luxury Sedans"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Open Roof. Closed Deals.</h1>
                    <p className="text-lg md:text-xl mt-2">Explore Convertibles Like Never Before.</p>
                </div>
            </section>


            <section className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">What is a Convertible?</h2>
                <img
                    src="https://cdn.hiconsumption.com/wp-content/uploads/2019/03/Best-Convertible-Cars-0-Hero.jpg"
                    alt="Convertible Car Driving"
                    className="w-full rounded-2xl shadow-lg object-cover h-[450px]"
                />
                <div className="text-center max-w-4xl mx-auto">

                    <p className="text-lg text-gray-700">
                        A convertible is a type of car that features a retractable roof, allowing you to switch between an enclosed cabin and an open-air driving experience. Known for their elegance, thrill, and freedom, convertibles are the epitome of lifestyle driving — combining style, performance, and the joy of the journey.
                    </p>
                </div>
            </section>



            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            name: "BMW",
                            logo: "https://www.freepnglogos.com/uploads/bmw-brands-logo-image-1.png",
                            link: "https://www.bmw.in",
                        },
                        {
                            name: "Audi",
                            logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png",
                            link: "https://www.audi.in",
                        },
                        {
                            name: "Mercedes-Benz",
                            logo: "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png",
                            link: "https://www.mercedes-benz.co.in",
                        },
                        {
                            name: "Mini",
                            logo: "https://www.pngarts.com/files/3/Mini-Cooper-Logo-PNG-Photo.png",
                            link: "https://www.mini.in",
                        },
                    ].map((brand) => (
                        <a
                            href={brand.link}
                            key={brand.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-gray-50 rounded-xl shadow-lg p-4 flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
                        >
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                className="h-16 object-contain"
                            />
                            <span className="text-center font-medium">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2">Pros</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Stylish and attention-grabbing</li>
                            <li>Open-air driving experience</li>
                            <li>Great for scenic drives</li>
                            <li>Luxurious feel and premium build</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Expensive to buy and maintain</li>
                            <li>Less practical storage space</li>
                            <li>Reduced structural rigidity</li>
                            <li>Not ideal for all weather conditions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Best Convertibles by Price */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Best Convertible Cars by Budget</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-6">
                    <div className="bg-white p-4 rounded-xl shadow flex-1 min-w-[280px] max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Under ₹50 Lakhs</h3>
                        <p className="mb-2">Mini Cooper Convertible</p>
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.oLx8HSJmhEmZ5XmG5pV2agHaEK&pid=Api&P=0&h=180"
                            alt="Mini Cooper Convertible"
                            className="rounded-lg w-full mb-4"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow flex-1 min-w-[280px] max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">₹50 Lakhs - ₹1 Crore</h3>
                        <p className="mb-2">BMW Z4</p>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.9P1wKrG4ky1enELePkrrEQHaEK&pid=Api&P=0&h=180"
                            alt="BMW Z4"
                            className="rounded-lg w-full mb-4"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow flex-1 min-w-[280px] max-w-sm">
                        <h3 className="text-xl font-semibold mb-2">Above ₹1 Crore</h3>
                        <p className="mb-2">Porsche 911 Cabriolet</p>
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.71g53XaTW-pPhBFsn4EDdQHaEc&pid=Api&P=0&h=180"
                            alt="Porsche 911 Cabriolet"
                            className="rounded-lg w-full mb-4"
                        />
                    </div>
                </div>
            </section>


             
            <div className="flex flex-wrap gap-6 justify-around">
                <section className="flex-1 min-w-[300px] max-w-md bg-white p-6 rounded-xl shadow space-y-4">
                    <h2 className="text-3xl font-semibold mb-4">Feature-Rich Entry-Level Option</h2>
                    <h3 className="text-xl font-semibold">Mini Cooper Convertible</h3>
                    <img
                        src="https://storage.googleapis.com/mini-api-prod-au/media/images/Convertible-side-profile.original.png"
                        alt="Mini Cooper Side"
                        className="rounded-lg w-full"
                    />
                    <ul className="list-disc list-inside">
                        <li>Turbocharged engine</li>
                        <li>Power soft top roof</li>
                        <li>Premium interior finish</li>
                        <li>Touchscreen infotainment with Apple CarPlay</li>
                    </ul>
                </section>

                <section className="flex-1 min-w-[300px] max-w-md bg-white p-6 rounded-xl shadow space-y-4">
                    <h2 className="text-3xl font-semibold mb-4">Luxury Convertible Pick</h2>
                    <h3 className="text-xl font-semibold">BMW Z4 M40i</h3>
                    <img
                        src="https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2025/bmw/z4/m40i/roadster/exteriorColors/2025_bmw_z4_m40i_001_c31.png"
                        alt="BMW Z4 M40i"
                        className="rounded-lg w-full"
                    />
                    <ul className="list-disc list-inside">
                        <li>3.0L TwinPower Turbo inline 6-cylinder engine</li>
                        <li>Sport-tuned chassis and adaptive suspension</li>
                        <li>Convertible soft-top roof</li>
                        <li>Luxurious leather interiors with tech-loaded cockpit</li>
                    </ul>
                </section>
            </div>


        </div>
    );
};

export default ConvertiblePage;
