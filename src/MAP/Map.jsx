import React from 'react';
import { useInView } from 'react-intersection-observer';

const Map = () => {
  // Use inView hook for each section to animate
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div 
        ref={ref1} 
        className={`text-white text-center mt-20 text-3xl font-mono font-bold transition-all duration-700 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className='text-blue-500'>More Feature</h1>
      </div>

      <div 
        ref={ref2} 
        className={`mt-10 px-5 transition-all duration-700 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className='relative'>
          <img className='mx-auto' src="./Images/map.svg" alt="" />
          
          <div className='absolute top-10 left-[45%] md:left-[50%]'>
            <div className='relative'>
              <img 
                className={`mx-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] duration-500 transition-all ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                src="./Images/features.png" alt="" 
              />
              
              {/* First Feature Box */}
              <div 
                ref={ref3} 
                className={`text-white flex flex-col items-center py-2 w-[100px] md:w-[130px] rounded-lg bg-gray-600 bg-opacity-65 absolute top-5 md:top-28 -left-16 transition-all duration-700 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <h3 className='text-[12px] md:text-xl font-bold'>800v</h3>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>Turbo</p>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>Charging</p>
              </div>

              {/* Second Feature Box */}
              <div 
                ref={ref4} 
                className={`text-white flex flex-col items-center py-2 w-[100px] md:w-[130px] rounded-lg bg-gray-600 bg-opacity-65 absolute top-20 md:top-40 -right-16 transition-all duration-700 ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <h3 className='text-[12px] md:text-xl font-bold'>350</h3>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>km</p>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>Range</p>
              </div>

              {/* Third Feature Box */}
              <div 
                className={`text-white flex flex-col items-center py-2 w-[100px] md:w-[130px] rounded-lg bg-gray-600 bg-opacity-65 absolute top-40 md:top-72 -left-16 transition-all duration-700 ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <h3 className='text-[12px] md:text-xl font-bold'>480</h3>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>Km</p>
                <p className='text-[11px] md:text-[16px] text-center font-semibold'>Travel</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map;
