import React, { useState } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      review: 'This product is amazing! It has greatly improved my workflow and made my job easier.',
      image: '/images/person_1.jpg'
    },
    {
      name: 'Jane Doe',
      title: 'Product Manager',
      review: 'I highly recommend this product to anyone in the tech industry. It has saved me so much time and effort.',
      image: '/images/person_2.jpg'
    },
    {
      name: 'Jim Smith',
      title: 'Data Scientist',
      review: 'This is the best tool I have used in a long time. The features are top-notch and the user experience is fantastic.',
      image: '/images/person_3.jpg'
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center py-10">
        <div className='space-y-4 text-center text-white'>
            <p className='text-uppercase text-md text-[#FEB82C] font-bold'>
            TESTIMONIAL
            </p>
            <h1 className='text-4xl font-semibold text-black leading-snug'>
            Happy Customers
            </h1>
          </div>
      <div className="w-full max-w-sm my-5">
        <div className="bg-white rounded shadow-md overflow-hidden">
          <img className="w-full" src={testimonials[currentIndex].image} alt="Author" />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">{testimonials[currentIndex].review}</p>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={testimonials[currentIndex].image} alt="Author" />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 space-x-5">
        <button className="bg-[#20BAA9] hover:bg-cyan-400 text-white  font-bold py-2 px-4 rounded-l" onClick={handlePrevClick}>Prev</button>
        <button className="bg-[#20BAA9] hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-r" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
