import React from "react";
import { Link } from "react-router-dom";

const CarBrandCards = () => {
  const sections = [
    {
      title: "Indian & Mass-Market Brands",
   color: "bg-gradient-to-br from-[#8b6f43] via-[#bfa76f] to-[#e1c16e]"



,
      brands: [
        {
          name: "Maruti Suzuki",
          pathName: "/Maruti",
       
          logo: "https://pngimg.com/uploads/suzuki/suzuki_PNG12291.png",
          desc: "India's leader in affordable and reliable cars."
          
        
        },
        {
          name: "Hyundai",
          pathName: "/Hyundai",
          logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
          desc: "Feature-packed cars with sleek design."
        },
        {
          name: "Tata",
           pathName: "/Tata",
          logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png",
          desc: "Pioneer in EVs and safest cars in India."
        },
        {
          name: "Mahindra",
            pathName: "/Mahindra",
          logo: "https://logos-world.net/wp-content/uploads/2022/12/Mahindra-Logo.png",
          desc: "Strong SUVs made for Indian roads."
        },
        {
          name: "Honda",
           pathName: "/Honda",
          logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png",
          desc: "Smooth engines and legendary reliability."
        },
        {
          name: "Renault",
         pathName: "/Renault",
          logo: "https://pngimg.com/uploads/renault/renault_PNG39.png",
          desc: "Affordable European style and comfort."
        },
        {
          name: "Nissan",
           pathName: "/Nissan",
          logo: "https://1000logos.net/wp-content/uploads/2020/03/Nissan-Logo-1990.png",
          desc: "Stylish design with advanced tech."
        },
        {
          name: "Kia",
           pathName: "/Kia",
          logo: "https://freelogopng.com/images/all_img/1686590079kia-logo-png.png",
          desc: "Premium experience at great value."
        },
        {
          name: "Toyota",
         pathName: "/Toyota",
          logo: "https://clipground.com/images/toyota-logo-png-9.png",
          desc: "Durability and hybrid excellence."
        }
      ]
    },
    {
      title: "Luxury & Premium Brands",
      color: "bg-gradient-to-br from-[#0f1114] via-[#3c3f46] to-[#6b6e76]"
,
      brands: [
        {
          name: "BMW",
          pathName: "/BMW",
          logo: "http://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png.png",
          desc: "Ultimate driving luxury from Germany."
        },
        {
          name: "Mercedes-Benz",
           pathName: "/Benz",
          logo: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
          desc: "Class-leading comfort and status."
        },
        {
          name: "Audi",
          pathName: "/Audi",
          logo: "http://pluspng.com/img-png/audi-logo-png-audi-logo-rings-symbol-4880.png",
          desc: "Sleek design with cutting-edge tech."
        },
        {
          name: "Lexus",
           pathName: "/Lexus",
          logo: "https://www.pngmart.com/files/22/Lexus-Logo-PNG-HD.png",
          desc: "Luxury with legendary Toyota reliability."
        },
        {
          name: "Volvo",
         pathName: "/Volvo",
          logo: "https://cdn.freebiesupply.com/logos/large/2x/volvo-logo-png-transparent.png",
          desc: "Known for safety and minimalist design."
        },
        {
          name: "Jaguar",
             pathName: "/Jaguar",
          logo: "https://logos-world.net/wp-content/uploads/2021/04/Jaguar-Logo.png",
          desc: "British elegance and power combined."
        },
        {
          name: "Porsche",
             pathName: "/Porsche",
          logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png",
          desc: "Precision-engineered sports luxury."
        },
        {
          name: "Maserati",
         pathName: "/Maserati",
          logo: "http://pluspng.com/img-png/logo-maserati-png-maserati-logo-png-photos-3000.png",
          desc: "Exotic performance with Italian charm."
        }
      ]
    },
    {
      title: "Electric Vehicle Brands",
     color: "bg-gradient-to-br from-[#0ce1c2] via-[#3a8fd7] to-[#d2f4ff]"
,
      brands: [
        {
          name: "Tesla",
         pathName: "/Tesla",
          logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png",
          desc: "Global EV pioneer and tech leader."
        },
        {
          name: "BYD",
           pathName: "/BYD",
          logo: "https://static.wixstatic.com/media/547c0f_5d6b7bb863124003811de17af12f31dd~mv2.png/v1/fill/w_980,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20BYD%20GRIS.png",
          desc: "Leading Chinese EV and battery tech."
        },
        {
          name: "MG",
           pathName: "/MG",
         
          logo: "https://1000logos.net/wp-content/uploads/2021/10/MG-Logo-2010-2048x1152.png",
          desc: "British roots with futuristic electric drive."
        },
        {
          name: "KiaEV",
           pathName: "/KiaEV",
          
          logo: "https://freelogopng.com/images/all_img/1686590079kia-logo-png.png",
          desc: "Stylish EVs with great range."
        },
        {
          name: "Ola Electric",
           pathName: "/Ola",
          
          logo: "https://logodix.com/logo/1307141.png",
          desc: "Indian EV innovation and affordability."
        },
        {
          name: "Ather Energy",
           pathName: "/Ather",
        
          logo: "https://cdn.brandfetch.io/idEG0l46pG/w/700/h/254/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1667935128051",
          desc: "Sleek electric scooters built for India."
        }
      ]
    },
    {
      title: "Commercial Vehicle Brands",
      color: "bg-gradient-to-br from-[#2f2f2f] via-[#5c5c5c] to-[#a0a0a0]"
,
      brands: [
        {
          name: "Ashok Leyland",
           pathName: "/Ashok",
          logo: "https://wallpaperaccess.com/full/2229709.png",
          desc: "Backbone of India's commercial fleet."
        },
        {
          name: "Tata Motors CV",
            pathName: "/CV",
          logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png",
          desc: "Reliable trucks and buses for India."
        },
        {
          name: "Eicher",
          pathName: "/Eicher",
          logo: "https://static.wixstatic.com/media/f2bf43_ee7bf2a90ef14c92917917ce26b11513~mv2.png",
          desc: "Efficient, durable heavy vehicles."
        },
        {
          name: "Bharat Benz",
           pathName: "/Bharat",
          logo: "https://www.seekpng.com/png/full/333-3331668_bharat-benz-logo-png.png",
          desc: "Daimler’s sturdy trucks for Indian roads."
        }
      ]
    },
    {
      title: "Supercar & Hypercar Brands",
     color: "bg-gradient-to-br from-[#1a0000] via-[#ff2d00] to-[#ffa200]"
,
      brands: [
        {
          name: "Lamborghini",
          pathName: "/Lambo",
          logo: "https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png",
          desc: "Raging bulls of speed and luxury."
        },
        {
          name: "Ferrari",
       pathName: "/Ferrari",
          logo: "https://purepng.com/public/uploads/large/purepng.com-ferrari-logoferrariferrari-carsferrari-automobilescarssportferrari-logo-17015274809730h2ic.png",
          desc: "Red hot Italian speed machines."
        },
        {
          name: "McLaren",
          pathName: "/McLaren",
          logo: "https://pngimg.com/uploads/Mclaren/Mclaren_PNG49.png",
          desc: "Track-focused British supercars."
        },
        {
          name: "Bugatti",
          pathName: "/Bugatti",
          logo: "https://www.pngmart.com/files/22/Bugatti-Logo-PNG-Image.png",
          desc: "Extreme speed and unmatched luxury."
        },
        {
          name: "Koenigsegg",
         pathName: "/Koenigsegg",
          logo: "https://static.wixstatic.com/media/f2bf43_179328483f634f938a5a638b192b6005~mv2.png",
          desc: "Engineering marvels from Sweden."
        },
        {
          name: "Pagani",
          pathName: "/Pagani",
          logo: "https://logos-world.net/wp-content/uploads/2021/10/Pagani-Emblem.png",
          desc: "Exotic hypercars with Italian flair."
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20 font-sans">
      {sections.map((section, idx) => (
        <section
          key={section.title}
          className={`${section.color} py-10 px-4 rounded-3xl shadow-xl border-t-4 border-gray-300`}
        >
          <h2 className="text-4xl font-extrabold text-center text-white mb-10 underline decoration-wavy underline-offset-4">
            {section.title}
          </h2>

          <div
            className={`grid gap-10 ${
              idx % 2 === 0
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
            }`}
          >
            {section.brands.map((brand) => (
              <Link
                
                
                to={brand.pathName}
               
                
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center space-y-4 text-center border border-gray-100 hover:border-blue-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {brand.name}
                </span>
                <p className="text-sm text-gray-500">{brand.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CarBrandCards;



