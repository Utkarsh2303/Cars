import React from "react";

const DieselCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://stat.overdrive.in/wp-content/uploads/2023/05/4.png"
                    alt="Diesel Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">Diesel Power. Maximum Efficiency.</h1>
                    <p className="text-xl mt-3 font-medium">Experience torque, economy, and performance in perfect balance</p>
                </div>
            </section>

            {/* What is a Diesel Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Diesel Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Diesel cars use compression ignition engines that burn diesel fuel, offering superior fuel efficiency and torque compared to petrol counterparts. They are ideal for long-distance driving and load-carrying vehicles.
                    </p>
                </div>
                <img
                    src="https://img.directindustry.com/images_di/photo-g/19656-17703781.jpg"
                    alt="Diesel Engine"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Diesel Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://media.autoexpress.co.uk/image/private/s--afI2LJcB--/v1562246158/autoexpress/2018/04/1civicvmeganevastra.jpg"
                    alt="Diesel Driving"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose Diesel?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Diesel cars offer better mileage, longer engine life, and strong torque—making them excellent for highways, hills, and towing. Their fuel economy often justifies the slightly higher upfront cost.
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
                            <li>Excellent fuel efficiency</li>
                            <li>High torque for towing and climbing</li>
                            <li>Long engine durability</li>
                            <li>Lower running cost per km</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Higher purchase cost</li>
                            <li>Stricter emission regulations</li>
                            <li>May produce more NOx and soot</li>
                            <li>Fewer diesel options in smaller segments</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Diesel Car Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Diesel Car Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Hyundai",
                        logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
                        link: "https://www.hyundai.com/in/en",
                    }, {
                        name: "Mahindra",
                        logo: "https://logos-world.net/wp-content/uploads/2022/12/Mahindra-Logo.png",
                        link: "https://www.mahindra.com",
                    }, {
                        name: "Toyota",
                        logo: "https://www.pnguniverse.com/wp-content/uploads/2020/10/Toyota-1024x641.png",
                        link: "https://www.toyota.com",
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

            {/* Best Diesel Cars Under ₹20L */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Best Diesel Cars Under ₹20L</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Hyundai Creta Diesel",
                        img: "https://cdni.autocarindia.com/ExtraImages/20180615040643_Hyundai-Creta-used-front-st.jpg",
                    }, {
                        name: "Tata Nexon Diesel",
                        img: "https://cdni.autocarindia.com/ExtraImages/20230222050847_Nexon.jpg",
                    }, {
                        name: "Mahindra XUV300",
                        img: "https://stat.overdrive.in/wp-content/odgallery/2021/02/58415_2021_Mahindra_XUV300_3.jpg",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Diesel Models */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Premium & Powerful Diesel Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://wallpapers.com/images/hd/toyota-fortuner-black-trd-variant-model-72r9iq6f8avojga4.jpg"
                            alt="Toyota Fortuner"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Toyota Fortuner</h3>
                        <p>Bold, reliable, and powerful. A trusted diesel SUV with unmatched street presence and performance.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/09q4/300860/2009-audi-q7-30-tdi-quattro-diesel-s-line-review-car-and-driver-photo-301259-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"
                            alt="Audi Q7 Diesel"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: Audi Q7 Diesel</h3>
                        <p>Where performance meets prestige. Enjoy diesel torque with German engineering and comfort.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Thinking Long-Term? Go Diesel.</h2>
                <p className="text-lg max-w-2xl mx-auto">Diesel cars continue to be a smart choice for mileage-savvy drivers who want strong performance and savings over time.</p>
            </section>
        </div>
    );
};

export default DieselCarPage;
