import React from "react";

const AshokLeylandPage = () => {
    return (
        <div className="bg-gray-950 text-white font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://vistapointe.net/images/ashok-leyland-wallpaper-16.jpg"
                    alt="Ashok Leyland Trucks"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-7xl font-extrabold mb-6 tracking-tight">
                        ASHOK LEYLAND
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                        Driving the nation forward with world-class commercial vehicles, cutting-edge technology, and unwavering reliability.
                    </p>
                </div>
            </section>

            {/* Innovation & Heritage */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-5xl font-bold mb-6 text-yellow-400">
                        Built on Heritage, Driven by Innovation
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Since 1948, Ashok Leyland has been a pioneer in India's mobility revolution. From heavy-duty trucks to military vehicles and electric buses, we innovate with a vision for sustainability and superior engineering.
                    </p>
                </div>
                <img
                    src="https://buscdn.cardekho.com/in/ashok-leyland/cheetah/ashok-leyland-cheetah.jpg?impolicy=resize&imwidth=336"
                    alt="Electric Buses"
                    className="rounded-xl shadow-lg"
                />
            </section>

            {/* Product Segments */}
            <section className="py-20 bg-gray-900 px-6 sm:px-10">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-400">
                    Our Product Segments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Heavy Commercial Vehicles",
                            img: "https://images.91trucks.com/wp-content/uploads/2022/10/Ashok-leyland-2820.png",
                            desc: "Robust, fuel-efficient trucks built for India's highways & industries."
                        },
                        {
                            title: "Defence Vehicles",
                            img: "https://images.news18.com/ibnlive/uploads/2018/08/Field-Artillery-Tractor-6x6.jpg",
                            desc: "Advanced military mobility solutions trusted by the armed forces."
                        },
                        {
                            title: "Electric Buses",
                            img: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/IMG/390/13390/web-ashok-leyland-optare-versa-ev-at-siam-2015-first-zero-emission-electric-bus-in-india.jpg",
                            desc: "Zero-emission urban transport through electric & smart mobility."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-yellow-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technology Focus */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <img
                    src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/06/ashok-leyland-med.jpg"
                    alt="AVTR Platform"
                    className="rounded-xl shadow-xl w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">
                        Next-Gen Modular AVTR Platform
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        AVTR is India’s first modular truck platform delivering tailored solutions for diverse customer needs — with superior durability, comfort, performance, and connectivity.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Enabled with i-Alert 3.0 for remote diagnostics, AI-powered telematics, and greener, fuel-efficient powertrains.
                    </p>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section className="py-20 bg-gray-900 text-white">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-400">
                    Journey of Excellence
                </h2>
                <div className="max-w-5xl mx-auto border-l-4 border-yellow-400 pl-6 space-y-10 relative">
                    {[
                        {
                            year: "1948",
                            event: "Ashok Motors founded in Chennai."
                        },
                        {
                            year: "1987",
                            event: "First Indian company to manufacture rear-engine buses."
                        },
                        {
                            year: "2020",
                            event: "Launch of AVTR modular platform."
                        },
                        {
                            year: "2023",
                            event: "Crossed 1 million HCV sales milestone."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_3px_rgba(234,179,8,0.5)]" />
                            <h4 className="text-xl font-semibold text-yellow-300 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center px-6 sm:px-10">
                <h2 className="text-5xl font-bold mb-6 text-yellow-400">
                    Ashok Leyland — Driving the Nation
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Explore our world-class commercial vehicles and discover how Ashok Leyland empowers businesses, communities, and economies — one journey at a time.
                </p>
                <a
                    href="https://www.ashokleyland.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition"
                >
                    Visit Ashok Leyland
                </a>
            </section>
        </div>
    );
};

export default AshokLeylandPage;
