import React from "react";

const style = "px-5 py-2.5 text-white rounded-sm border  bg-[#22AFA8]";

const FeaturedProject = () => {
  return (
    <div className='h-auto py-5'>
      <div className='container-xxl'>
        <div>
          {/* c1 */}
          <div className='space-y-4 text-center'>
            <p className='text-uppercase text-md text-[#FEB82C] font-bold'>
              PROJECTS
            </p>
            <h1 className='text-4xl font-semibold leading-snug'>
              Featured Projects
            </h1>
          </div>
          {/* c2 */}
          <div className='mt-5'>
            <ul className='flex items-center uppercase justify-center space-x-10 text-md font-semibold text-[gray] cursor-pointer'>
              <li className={`${style}`}>All</li>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Branding</li>
              <li>Marketing</li>
              <li>UI/UX Desing</li>
            </ul>
          </div>
          {/* c3 */}
          <div className='flex mt-5 space-x-3'>
            <Card
              imageSrc='/images/gallery-1.jpg'
              heading='Innovative Design'
              paragraph='Web Design'
            />
            <Card
              imageSrc='/images/gallery-2.jpg'
              heading='Innovative Design'
              paragraph='Digital Marketing'
            />
            <Card
              imageSrc='/images/gallery-3.jpg'
              heading='Innovative Design'
              paragraph='Branding'
            />
            <Card
              imageSrc='/images/gallery-4.jpg'
              heading='Innovative Design'
              paragraph='Web Development'
            />
          </div>
          <div className='flex my-3 space-x-3'>
            <Card
              imageSrc='/images/gallery-5.jpg'
              heading='Innovative Design'
              paragraph='Web Development'
            />
            <Card
              imageSrc='/images/gallery-6.jpg'
              heading='Innovative Design'
              paragraph='Digital Markeing'
            />
            <Card
              imageSrc='/images/gallery-7.jpg'
              heading='Innovative Design'
              paragraph='Web Design'
            />
            <Card
              imageSrc='/images/gallery-8.jpg'
              heading='Innovative Design'
              paragraph='Branding'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className='max-w-sm rounded  shadow-sm col-3 group cursor-pointer'>
      <img className='h-80 w-full' src={imageSrc} alt='' />
      <div className='px-6 py-4 group-hover:bg-[#22afa87d] transition ease-linear duration-150  '>
        <div className='font-bold text-xl mb-2'>{heading}</div>
        <p className='text-gray-700 text-base'>{paragraph}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
