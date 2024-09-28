import React from 'react';
import { useInView } from 'react-intersection-observer';

// Service data
const services = [
  {
    id: 1,
    title: 'AutoList Pro',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse debitis sed.',
    image: './Images/service1.png',
  },
  {
    id: 2,
    title: 'DriveHub',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse debitis sed.',
    image: './Images/service2.png',
  },
  {
    id: 3,
    title: 'CarTrade Xpress',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse debitis sed.',
    image: './Images/service3.png',
  },
];

const Services = () => {
  return (
    <>
      <div className='flex justify-center text-3xl font-mono font-bold text-blue-500 mt-20'>
        <h1 className='md:w-[400px] text-center'>Our Services</h1>
      </div>

      <section className='text-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 md:mx-[50px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[300px]'>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </>
  );
};

// Single ServiceCard Component
const ServiceCard = ({ service }) => {
  // Use the Intersection Observer to trigger animations when in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`relative service-card overflow-hidden bg-[#212121] bg-opacity-50 mx-auto h-[300px] rounded-xl transition-transform duration-1000 ease-out ${
        inView ? 'transform scale-100 opacity-100' : 'transform scale-90 opacity-0'
      }`}
    >
      <img className='duration-500 h-[300px] object-cover' src={service.image} alt={service.title} />
      <div
        className={`p-3 flex flex-col gap-3 duration-500 service-intro absolute -bottom-[60px] lg:-bottom-20 bg-[#212121] transition-all ease-out ${
          inView ? 'bottom-0 opacity-100' : 'bottom-[-20px] opacity-0'
        }`}
      >
        <h3 className='text-xl font-bold'>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
