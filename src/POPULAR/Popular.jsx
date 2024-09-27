import React from 'react';
import { BsGearWideConnected, BsSpeedometer2 } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css'; // Ensure you're using Tailwind CSS

const carData = [
  {
    id: 1,
    name: "Porsche",
    model: "Turbo 5",
    price: "$175,900",
    speed: "3.7 Sec",
    maxSpeed: "356 Km/h",
    powerType: "Electric",
    image: "./Images/popular1.png"
  },
  {
    id: 2,
    name: "Porsche",
    model: "Taycan",
    price: "$114,900",
    speed: "3.7 Sec",
    maxSpeed: "356 Km/h",
    powerType: "Electric",
    image: "./Images/popular2.png"
  },
  {
    id: 3,
    name: "Porsche",
    model: "Turbo 5 Cross",
    price: "$150,900",
    speed: "3.7 Sec",
    maxSpeed: "356 Km/h",
    powerType: "Electric",
    image: "./Images/popular3.png"
  },
  {
    id: 4,
    name: "Porsche",
    model: "Boxster 718",
    price: "$125,900",
    speed: "3.7 Sec",
    maxSpeed: "356 Km/h",
    powerType: "Electric",
    image: "./Images/popular4.png"
  },
  {
    id: 5,
    name: "Porsche",
    model: "Cayman",
    price: "$128,900",
    speed: "3.7 Sec",
    maxSpeed: "356 Km/h",
    powerType: "Electric",
    image: "./Images/popular5.png"
  },
];

const Popular = () => {
  // Define animation styles
  const revealClass = 'transform transition duration-700 ease-out opacity-0 translate-y-10';

  return (
    <>
      <div className='flex justify-center text-3xl font-mono font-bold text-blue-500 mt-20'>
        <h1 className='md:w-[400px] text-center'>Choose Your Electric Car From Porsche Brand</h1>
      </div>

      <section className='text-white mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 sm:mx-8 md:mx-[20px] lg:mx-[150px] xl:mx-[250px] 2xl:mx-[380px]'>
        {carData.map((car) => (
          <RevealCar key={car.id} car={car} />
        ))}
      </section>
    </>
  );
};

const RevealCar = ({ car }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust to control when the animation starts (0.1 means 10% visibility)
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col gap-1 mx-auto bg-[#212121] bg-opacity-50 rounded-xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transform transition duration-700 ease-out`}
    >
      <div className='flex flex-col gap-1 pt-6 px-6'>
        <h3 className='text-[22px] font-bold'>{car.name}</h3>
        <p>{car.model}</p>
        <img className='p-4 hover:scale-110 duration-500' src={car.image} alt={car.model} />
      </div>

      <div className='flex items-center gap-4 px-6'>
        <div className='flex gap-2 items-center'>
          <BsGearWideConnected className='text-[18px]' />
          <p className='text-[14px]'>{car.speed}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <BsSpeedometer className='text-[18px]' />
          <p className='text-[14px]'>{car.maxSpeed}</p>
        </div>
      </div>

      <div className='flex gap-2 items-center px-6'>
        <MdElectricBolt className='text-[18px]' />
        <p className='text-[14px]'>{car.powerType}</p>
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

export default Popular;
