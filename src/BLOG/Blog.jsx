// CardSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosTimer } from "react-icons/io";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Updated card data with car-related blog titles and descriptions
  const cards = [
    { id: 1, img: "./Images/blog1.png", date: "September 27, 2024", title: "How to Choose the Best Car for Your Needs", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi."},
    { id: 2, img: "./Images/blog2.png", date: "October 05, 2024", title: "Top 10 Cars to Buy in 2024", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 3, img: "./Images/blog3.png", date: "October 10, 2024", title: "Benefits of Buying a Certified Pre-Owned Car", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 4, img: "./Images/blog4.png", date: "October 15, 2024", title: "Electric Cars: The Future of Driving", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 5, img: "./Images/blog5.png", date: "November 02, 2024", title: "How to Sell Your Car Quickly and Efficiently", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 6, img: "./Images/blog6.png", date: "November 10, 2024", title: "Essential Tips for First-Time Car Buyers", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
  ];

  return (
    <div className="mt-20">
      <style>
        {`
          .slick-prev, .slick-next {
            color: blue;
            z-index: 10;
            padding-left:26px;
            padding-right:57px;
          }

          .slick-prev:before, .slick-next:before {
            font-size: 30px;
            opacity: 1;
            color: orange;
          }

          .slick-dots li button {
            background: gray;
            border-radius: 50%;
            width: 8px;
            height: 8px;
          }

          .slick-dots li.slick-active button {
            background: orange;
          }
        `}
      </style>

      <div className="container mx-auto">
        <div className="text-white text-center flex flex-col gap-3 items-center mx-3">
          <h1 className="text-3xl font-mono text-blue-500 font-bold">
            Our Latest Blogs
          </h1>
        </div>
        <Slider {...settings} className="mx-3 sm:mx-0 mt-10">
          {cards.map((card) => (
            <div key={card.id} className="p-4 text-white cursor-grab">
              <div className="bg-[#212121] bg-opacity-50 overflow-hidden rounded-lg hover:shadow-2xl hover:shadow-blue-300 duration-500 border-2 hover:border-blue-300 border-gray-600 blog-part">
                <img src={card.img} alt={card.img} className="w-full h-[250px] rounded-t-lg object-cover duration-500 blog-img" />
                <div className="flex flex-col justify-center gap-3 mt-4 p-4">
                  <p className="flex items-center gap-1"><IoIosTimer/> {card.date}</p>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-gray-300">{card.description}</p>
                  <button className='bg-blue-600 hover:bg-blue-900 duration-500 h-[50px] w-[120px] rounded'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div> 
  );
};

export default Blog;
