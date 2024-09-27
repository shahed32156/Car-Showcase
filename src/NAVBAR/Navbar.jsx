import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons from React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Detect when the user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 50px, set navbar as scrolled
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`${
          isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-[#141414]'
        } flex justify-between md:justify-center items-center py-4 px-3 text-white fixed w-full top-0 z-10 transition-all duration-300 ease-in-out md:gap-[300px] lg:gap-[400px] xl:gap-[600px] 2xl:gap-[700px]`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          
          <img className='' src="./Images/logo.png" alt="" />
          <p className='text-[22px] font-bold'>𐌐𐌓Ꝋ𐌂𐌀R</p>
          
          </div>

        {/* Nav Links for large screens */}
        <ul className="hidden md:flex items-center space-x-10">
          <li className="hover:text-blue-500 font-medium text-[15px] cursor-pointer duration-500"><a href="#">Home</a></li>
          <li className="hover:text-blue-500 font-medium text-[15px] cursor-pointer duration-500"><a href="#about">About</a></li>
          <li className="hover:text-blue-500 font-medium text-[15px] cursor-pointer duration-500"><a href="#services">Services</a></li>
          <li className="hover:text-blue-500 font-medium text-[15px] cursor-pointer duration-500"><a href="#popular">Popular</a></li>
          <li className="hover:text-blue-500 font-medium text-[15px] cursor-pointer duration-500"><a href="#features">Features</a></li>
        </ul>

        {/* Navicon for small screens */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleSidebar}>
          {isOpen ? (
            <HiX size={30} /> // Cross icon when sidebar is open
          ) : (
            <HiMenu size={30} /> // Hamburger icon when sidebar is closed
          )}
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#141414]  text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className='p-5'>
 
            <div className='flex justify-between border-b-2 pb-3'>

            <div className='flex gap-2 items-center'>
            <img className='w-[30px]' src="./Images/logo.png" alt="" />
            <p className='text-[18px] font-bold'>𐌐𐌓Ꝋ𐌂𐌀R</p>
            </div>
            <div>
              <HiX className='cursor-pointer' size={24} onClick={toggleSidebar} />
            </div>

            </div>

        </div>
        <ul className="flex flex-col space-y-6  px-5">
        
          <li className="hover:text-blue-500 font-medium duration-500 cursor-pointer" onClick={toggleSidebar}>
          <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-500 font-medium duration-500  cursor-pointer" onClick={toggleSidebar}>
          <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-500 font-medium duration-500  cursor-pointer" onClick={toggleSidebar}>
          <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-500 font-medium duration-500  cursor-pointer" onClick={toggleSidebar}>
          <a href="#popular">Popular</a>
          </li>
          <li className="hover:text-blue-500 font-medium duration-500  cursor-pointer" onClick={toggleSidebar}>
          <a href="#features">Features</a>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={closeSidebar}></div>
      )}
    </div>
  );
};

export default Navbar;
