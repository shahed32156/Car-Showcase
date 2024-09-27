import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CiTempHigh } from "react-icons/ci";
import { BsGearWideConnected } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";

const Carousel = () => {
  // Use inView hook for each section you want to animate
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div 
        ref={ref1} 
        className={`text-white flex flex-col justify-center items-center gap-4 mt-20 mx-3 transition-all duration-700 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className='text-3xl font-serif font-extrabold text-center'>Choose The Best Car</h1>
        <p className='text-xl font-serif font-semibold text-center'>Choose The Best Car</p>
        <div className='carousel-img-div'>
          <img className='h-[300px] md:mt-8 p-12 md:p-0 duration-500' src="./Images/carousel-car.png" alt="" />
        </div>
      </div>

      <section 
        ref={ref2}
        className={`flex gap-8 md:gap-14 items-center justify-center md:mt-10 transition-all duration-700 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Temperature Icon */}
        <div className='flex flex-col items-center gap-2 text-white'>
          <CiTempHigh className='text-white text-3xl bg-gray-500 bg-opacity-40 h-[40px] w-[40px] p-2 rounded-full' />
          <h4 className='text-xl font-bold'>24°</h4>
          <p className='uppercase font-light text-[12px]'>temperature</p>
        </div>

        {/* Mileage Icon */}
        <div className='flex flex-col items-center gap-2 text-white'>
          <BsGearWideConnected className='text-white text-3xl bg-gray-500 bg-opacity-40 h-[40px] w-[40px] p-2 rounded-full' />
          <h4 className='text-xl font-bold'>873</h4>
          <p className='uppercase font-light text-[12px]'>mileage</p>
        </div>

        {/* Battery Icon */}
        <div className='flex flex-col items-center gap-2 text-white'>
          <MdElectricBolt className='text-white text-3xl bg-gray-500 bg-opacity-40 h-[40px] w-[40px] p-2 rounded-full' />
          <h4 className='text-xl font-bold'>94%</h4>
          <p className='uppercase font-light text-[12px]'>Battery</p>
        </div>
      </section>

      {/* Start Button */}
      <div 
        ref={ref3}
        className={`bg-black box-shadow border-2 border-green-400 text-white h-[105px] w-[105px] rounded-full mx-auto mt-20 p-[11px]  duration-500 transition-all ${inView3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
      >
        <button className='border-[1px] border-green-400 text-xl font-bold border-dashed h-[80px] w-[80px] rounded-full flex flex-col justify-center items-center font-serif'>
          <a href="#about">Start</a>
        </button>
      </div>
    </>
  );
};

export default Carousel;
