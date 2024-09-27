import React, { useState } from 'react';

const Animated_cars = () => {
  // State to store the current video source and active image index
  const [videoSrc, setVideoSrc] = useState('./Images/mclaren-1.mp4'); // Default video
  const [activeIndex, setActiveIndex] = useState(0); // Default active image is the first one

  // Function to update video source and set active index
  const handleVideoChange = (newSrc, index) => {
    setVideoSrc(newSrc); // Change the video source
    setActiveIndex(index); // Set active thumbnail index
  };

  return (
    <>
      <div className='relative mt-14'>
        {/* Video Section */}
        <video autoPlay loop className='w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[680px] xl:h-[700px] object-cover' src={videoSrc}></video>

        {/* Thumbnail images */}
        <div className='flex gap-2 items-center absolute bottom-0 p-2'>
          {/* Image 1 */}
          <img
            className={`h-[40px] sm:h-[50px] md:h-[70px] lg:h-[100px] rounded-md cursor-pointer duration-300 ${activeIndex === 0 ? 'scale-110 border-2 border-white' : ''}`}
            src="./Images/car1.jpg"
            alt="car1"
            onClick={() => handleVideoChange('./Images/mclaren-1.mp4', 0)}  // Change to the first video
          />

          {/* Image 2 */}
          <img
            className={`h-[40px] sm:h-[50px] md:h-[70px] lg:h-[100px] rounded-md cursor-pointer duration-300 ${activeIndex === 1 ? 'scale-110 border-2 border-white' : ''}`}
            src="./Images/car2.jpg"
            alt="car2"
            onClick={() => handleVideoChange('./Images/mclaren-2.mp4', 1)}  // Change to the second video
          />

          {/* Image 3 */}
          <img
            className={`h-[40px] sm:h-[50px] md:h-[70px] lg:h-[100px] rounded-md cursor-pointer duration-300 ${activeIndex === 2 ? 'scale-110 border-2 border-white' : ''}`}
            src="./Images/car3.jpeg"
            alt="car3"
            onClick={() => handleVideoChange('./Images/mclaren-3.mp4', 2)}  // Change to the third video
          />
        </div>
      </div>
    </>
  );
};

export default Animated_cars;
