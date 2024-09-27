// Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] bg-opacity-50 text-gray-300 py-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and description */}
        <div className="mx-auto px-3">
        <div className="flex items-center justify-center md:justify-start gap-2">
          
          <img className='' src="./Images/logo.png" alt="" />
          <p className='text-[22px] font-bold text-white'>𐌐𐌓Ꝋ𐌂𐌀R</p>
          
          </div>
          <p className="mt-4 w-[250px]">
            We offer the best electric cars of the most recognized brands in the world.
          </p>
        </div>

        {/* Company Links */}
        <div className="mx-auto">
          <h3 className="text-white text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 duration-500">
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">About</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">Cars</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">History</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">Shop</a></li>
          </ul>
        </div>

        {/* Information Links */}
        <div className="mx-auto">
          <h3 className="text-white text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white hover:pl-1 duration-500">Request demo</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">Find a dealer</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">Contact us</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 duration-500">Services</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="mx-auto">
          <h3 className="text-white text-xl font-semibold mb-4">Follow us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF className="text-xl duration-500" />
            </a>
            <a href="#" className="hover:text-[#f39b3d]">
              <FaInstagram className="text-xl duration-500" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaTwitter className="text-xl duration-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center text-gray-500 mt-14 pt-2 border-t-[1px]">
        <p>Copyright © 2024 Abdullah Shahed. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
