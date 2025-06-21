import React from "react";

const FamilyCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://images.cars.com/cldstatic/wp-content/uploads/kia-carnival-sx-p-2023-06-exterior-front-angle-scaled.jpg"
                    alt="Family Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                        Family Cars
                    </h1>
                    <p className="text-xl mt-3 font-medium">Spacious, safe, and reliable companions for every family journey.</p>
                </div>
            </section>

            {/* What is a Family Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Family Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Family cars are vehicles designed with space, comfort, and safety in mind. Perfect for transporting kids, groceries, and luggage with ease. These cars offer features that support a smooth and enjoyable ride for the whole family.
                    </p>
                </div>
                <img
                    src="https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/eifawg9c5l7igi5lxctw"
                    alt="Family Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Family Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://www.kbb.com/wp-content/uploads/2020/03/01-2020-hyundai-palisade-family-cars.jpg"
                    alt="Why Family Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Family Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Family cars combine spacious interiors, ample storage, strong safety ratings, and reliability. They're ideal for road trips, school runs, and everything in between—making life with family more convenient and comfortable.
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
                            <li>Spacious seating and cargo capacity</li>
                            <li>Family-friendly safety features</li>
                            <li>Comfortable ride for long journeys</li>
                            <li>Wide variety of models and price points</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Lower fuel efficiency than compact cars</li>
                            <li>Larger size may be harder to park</li>
                            <li>Higher maintenance costs for some models</li>
                            <li>Not as agile as smaller vehicles</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Family Car Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Family Car Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Toyota", logo: "https://clipground.com/images/toyota-logo-png-9.png", link: "https://www.toyota.com/" },
                        { name: "Honda", logo: "https://wallpapers.com/images/hd/silver-honda-logo-3ue41s7ervwlcmte.png", link: "https://www.honda.com/" },
                        { name: "Kia", logo: "https://freelogopng.com/images/all_img/1686590079kia-logo-png.png", link: "https://www.kia.com/" },
                        { name: "Hyundai", logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png", link: "https://www.hyundai.com/" },
                    ].map((brand) => (
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

            {/* Best Family Cars */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Family Cars (₹10L - ₹20L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Hyundai Creta", img: "http://cdni.autocarindia.com/ExtraImages/20160805100902_aniv1.jpg" },
                        { name: "Kia Carens", img: "https://catalogo.gac-sa.cl/assets/vehiculos/matriz/Wigo_Peru/1007/principal/TYW7K4G1UGG308.23_principal.jpg" },
                        { name: "Toyota Innova Crysta", img: "https://kalingatv.com/wp-content/uploads/2023/01/Toyota-Innova-Crysta.jpg" },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Horizontal Cards for Picks */}
            <div className="flex flex-col md:flex-row gap-8">

                {/* Feature-Rich Pick Section */}
                <section className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Feature-Rich Pick</h2>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://autonexa.com/storage/photos/1/January%202024/creta%202jpeg.jpg"
                            alt="Hyundai Creta"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Hyundai Creta</h3>
                        <p>
                            A smart and stylish SUV with advanced features, spacious cabin, and strong safety—perfect for family outings and city drives.
                        </p>
                    </div>
                </section>

                {/* Luxury Family Car Section */}
                <section className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Luxury Family Car</h2>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://wallpaperaccess.com/full/2467693.jpg"
                            alt="Toyota Innova Crysta"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Toyota Innova Crysta</h3>
                        <p>
                            A premium MPV known for its unmatched comfort, reliability, and space—ideal for big families and long journeys.
                        </p>
                    </div>
                </section>

            </div>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-gray-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Drive Together, Stay Together</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Family cars are all about togetherness, safety, and convenience. Choose a car that keeps your loved ones comfortable wherever you go.
                </p>
            </section>
        </div>
    );
};

export default FamilyCarPage;
