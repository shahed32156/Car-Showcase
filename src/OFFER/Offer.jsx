import React from 'react';
import { useInView } from 'react-intersection-observer';

const Offer = () => {
  // Use the inView hook to trigger animations when elements come into the viewport
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className='text-white mt-20 pb-10 pt-32 px-8 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 2xl:gap-28' style={{backgroundImage:'url(./Images/offer-bg.png)', backgroundSize:'cover'}}>
        

        {/* Text Section */}
        <div 
          ref={ref2} // Track visibility for the text section
          className={`flex flex-col gap-5 transition-all duration-700 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <h2 className='text-2xl font-extrabold md:w-[350px]'>
            Do You Want to Receive Special Offers?
          </h2>
          <p className='md:w-[400px]'>
            
Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
          </p>
          <button className='bg-blue-600 hover:bg-blue-900 duration-500 h-[50px] w-[120px] rounded'>
            Learn More
          </button>
        </div>


        {/* Image Section */}
        <div 
          ref={ref1} // Connect the ref to track visibility
          className={`relative transition-all duration-700 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <img
            className='h-[170px] sm:h-[200px] p-6 md:p-0 mx-auto lg:mx-0 rounded-md duration-500' 
            src="./Images/offer.png" 
            alt="" 
          />
          
        </div>


      </section>
    </>
  );
};

export default Offer;
