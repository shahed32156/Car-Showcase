import React, { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import { FaArrowUp } from "react-icons/fa"; // Importing the up-arrow icon
import Navbar from './NAVBAR/Navbar';
import Carousel from './CAROUSEL/Carousel';
import Animated_cars from './ANIMATION/Animated_cars';
import Royal_cars from './ROYAL_CARS/Royal_cars';
import About from './ABOUT/About';
import Map from './MAP/Map';
import Popular from './POPULAR/Popular';
import Featured from './FEATURED/Featured';
import Offer from './OFFER/Offer';
import Services from './SERVICES/Services';
import Blog from './BLOG/Blog';
import Footer from './FOOTER/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false); // State to track scroll position

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  // Handle scroll and show the up-arrow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <RingLoader color="#f34ee5" />
        </div>
      ) : (
        <div className=''>
          <Navbar />
          <Animated_cars />
          <Carousel />
          <h1 id='about'></h1>
          <About />
          <h1 id='services'></h1>
          <Services />
          <Map />
          <Royal_cars />
          <h1 id='popular'></h1>
          <Popular />
          <h1 id='features'></h1>
          <Featured />
          <Offer />
          <Blog />
          <Footer />

          {/* Up-arrow button */}
          {showScroll && (
            <div className='fixed bottom-5 right-5 z-50'>
              <button
                onClick={scrollToTop}
                className='bg-gray-400 bg-opacity-40 hover:bg-gray-500 text-white p-3 rounded-lg shadow-lg transition duration-500'
              >
                <FaArrowUp size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
