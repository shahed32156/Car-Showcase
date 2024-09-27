import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Use the inView hook to trigger animations when elements come into the viewport
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className='text-white mt-20 mx-8 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 2xl:gap-28'>
        
        {/* Image Section */}
        <div 
          ref={ref1} // Connect the ref to track visibility
          className={`about-img-div md:h-[360px] md:w-[500px] overflow-hidden relative transition-all duration-700 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <img
            className='md:h-[320px] md:w-[500px] mx-auto lg:mx-0 rounded-md about-img duration-500' 
            src="./Images/about.png" 
            alt="" 
          />
          <div className='flex flex-col items-center p-4 w-[200px] rounded-lg bg-gray-600 bg-opacity-50 absolute right-0 bottom-0'>
            <h3 className='text-xl font-bold'>2.500+</h3>
            <p className='w-[150px]'>Super changes place along popular routes</p>
          </div>
        </div>

        {/* Text Section */}
        <div 
          ref={ref2} // Track visibility for the text section
          className={`flex flex-col gap-5 transition-all duration-700 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <h2 className='text-2xl font-extrabold md:w-[250px]'>
            Machines With Future Technology
          </h2>
          <p className='md:w-[400px]'>
            See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.
          </p>
          <button className='bg-blue-600 hover:bg-blue-900 duration-500 h-[50px] w-[120px] rounded'>
            Know More
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
