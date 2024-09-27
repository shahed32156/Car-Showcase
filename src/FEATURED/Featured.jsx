import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css'; // Ensure you're using Tailwind CSS

const carData = [
  { id: 1, name: "Tesla", model: "Model X", price: "$98,900", image: "./Images/featured1.png", brand: "Tesla" },
  { id: 2, name: "Tesla", model: "Model 3", price: "$45,900", image: "./Images/featured2.png", brand: "Tesla" },
  { id: 3, name: "Audi", model: "E-tron", price: "$175,900", image: "./Images/featured3.png", brand: "Audi" },
  { id: 4, name: "Porsche", model: "Boxster 987", price: "$125,900", image: "./Images/featured4.png", brand: "Porsche" },
  { id: 5, name: "Porsche", model: "Panamera", price: "$126,900", image: "./Images/featured5.png", brand: "Porsche" },
];

const Featured = () => {
  const [activeBrand, setActiveBrand] = useState('All');

  const brands = [
    { name: 'All', logo: '' },
    { name: 'Tesla', logo: './Images/logo1.png' },
    { name: 'Audi', logo: './Images/logo2.png' },
    { name: 'Porsche', logo: './Images/logo3.png' },
  ];

  // Filter cars based on the active brand
  const filteredCars = activeBrand === 'All' ? carData : carData.filter(car => car.brand === activeBrand);

  return (
    <>
      <div className='flex justify-center text-3xl font-mono font-bold text-blue-500 mt-20'>
        <h1 className='md:w-[380px] text-center'>Featured Luxury Cars</h1>
      </div>

      <div className='flex items-center justify-center gap-6 mt-10'>
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => setActiveBrand(brand.name)}
            className={`rounded-lg h-[45px] w-[50px] text-white font-medium ${
              activeBrand === brand.name ? 'bg-blue-500' : 'bg-gray-500'
            }`}
          >
            {brand.logo ? (
              <img className='p-3' src={brand.logo} alt={brand.name} />
            ) : (
              <p>{brand.name}</p>
            )}
          </button>
        ))}
      </div>

      <section className='text-white mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 sm:mx-8 md:mx-[20px] lg:mx-[150px] xl:mx-[250px] 2xl:mx-[380px]'>
        {filteredCars.map((car) => (
          <RevealCar key={car.id} car={car} isActive={true} />
        ))}
      </section>
    </>
  );
};

const RevealCar = ({ car, isActive }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust to control when the animation starts (0.1 means 10% visibility)
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-1 mx-auto bg-[#212121] bg-opacity-50 rounded-xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transform transition duration-700 ease-out ${
        isActive ? 'grayscale-0' : 'grayscale'
      }`}
    >
      <div className='flex flex-col gap-1 pt-6 px-6'>
        <h3 className='text-[22px] font-bold'>{car.name}</h3>
        <p>{car.model}</p>
        <img className='p-4 hover:scale-110 duration-500' src={car.image} alt={car.model} />
      </div>

      <div className='flex justify-between pt-4 pl-6'>
        <h5 className='font-bold text-xl'>{car.price}</h5>
        <div className='bg-blue-500 cursor-pointer rounded-ss-xl rounded-br-xl h-[40px] w-[50px] flex justify-center items-center'>
          <FaRegBookmark className='text-[18px]' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
