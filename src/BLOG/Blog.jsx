import React from "react";
import { IoIosTimer } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const Blog = () => {

  const cards = [
    { id: 1, img: "./Images/blog1.png", date: "September 27, 2024", title: "How to Choose the Best Car for Your Needs", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 2, img: "./Images/blog2.png", date: "October 05, 2024", title: "Top 10 Cars to Buy in 2024", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 3, img: "./Images/blog3.png", date: "October 10, 2024", title: "Benefits of Buying a Certified Pre-Owned Car", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 4, img: "./Images/blog4.png", date: "October 15, 2024", title: "Electric Cars: The Future of Driving", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 5, img: "./Images/blog5.png", date: "November 02, 2024", title: "How to Sell Your Car Quickly and Efficiently", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
    { id: 6, img: "./Images/blog6.png", date: "November 10, 2024", title: "Essential Tips for First-Time Car Buyers", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempora dolorum nobis quidem quibusdam veritatis ratione impedit at possimus. Repellendus, magni ratione sunt provident soluta id nesciunt odio quibusdam modi." },
  ];

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="text-white text-center flex flex-col gap-3 items-center mx-3">
          <h1 className="text-3xl font-mono text-blue-500 font-bold">
            Our Latest Blogs
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-3 sm:mx-0">
          {cards.map((card) => {
            const { ref, inView } = useInView({
              triggerOnce: true,  // Ensures animation triggers only once
              threshold: 0.1,     // Adjusts how much of the component needs to be visible to trigger
            });

            return (
              <div
                key={card.id}
                ref={ref}
                className={`text-white cursor-pointer blog-part transform transition-all duration-700 ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-[#212121] bg-opacity-50 overflow-hidden rounded-lg  duration-500 border-2 hover:border-blue-300 border-gray-600">
                  <img src={card.img} alt={card.img} className="w-full h-[250px] rounded-t-lg object-cover duration-500" />
                  <div className="flex flex-col justify-center gap-3 mt-4 p-4">
                    <p className="flex items-center gap-1">
                      <IoIosTimer /> {card.date}
                    </p>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                    <button className='bg-blue-600 hover:bg-blue-900 duration-500 h-[50px] w-[120px] rounded'>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div> 
  );
};

export default Blog;
