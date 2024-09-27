import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHeadphonesAlt, FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: <FaHeadphonesAlt className='text-3xl' />,
    text: "24/7 Car Rental Support",
  },
  {
    id: 2,
    icon: <FaCar className='text-3xl' />,
    text: "Car Reservation Anytime",
  },
  {
    id: 3,
    icon: <FaLocationDot className='text-3xl' />,
    text: "Lots of Pickup Locations",
  }
];

const Royal_cars = () => {
  // Use useInView hook for different sections
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Title and Welcome Section */}
      <div className='text-white mx-3'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <h1
            ref={titleRef}
            className={`text-blue-500 text-3xl font-mono font-bold text-center transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Welcome To Royal Cars
          </h1>
          <img
            ref={imageRef}
            className={`mx-auto -mt-10 p-4 transition-all duration-700 ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            src="./Images/royal-cars.png"
            alt="Royal Cars"
          />
          <p
            ref={textRef}
            className={`sm:px-3 md:w-[500px] text-center text-[14px] transition-all duration-700 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia aut consequatur suscipit illo deserunt sit libero velit omnis consequuntur, cum nobis blanditiis! A recusandae labore quaerat reprehenderit officiis aut.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`text-white mt-8 grid grid-cols-2 lg:grid-cols-3 gap-5 mx-3 sm:mx-[100px] md:mx-[180px] lg:mx-[220px] xl:mx-[280px] 2xl:mx-[400px] transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {services.map((service) => (
          <div key={service.id} className='mx-auto w-full royal-cars-div bg-blue-800 hover:bg-blue-600 duration-500 py-4 rounded-md'>
            <div className='flex justify-between items-center'>
              <div className='bg-orange-500 p-3 rounded-r-md grayscale-[100%] details duration-500'>
                {service.icon}
              </div>
              <p className='px-4'>{service.text}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Royal_cars;
