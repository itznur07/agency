import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
  return (
    <>
      <div className='bg-[#48a3ffc9]'>
        <div className='h-auto py-5 container-xxl'>
          <div className='space-y-4 text-center text-white'>
            <p className='text-uppercase text-md text-white font-bold'>
              Our Teams
            </p>
            <h1 className='text-4xl font-semibold leading-snug'>
              Meet Our Team
            </h1>
          </div>
          <div className='flex items-center justify-between space-x-3 mt-5'>
            <TeamCard
              imageSrc='/images/staff-1.jpg'
              name='Jason Smith'
              title='PRESIDENT & CEO'
              bio='I am an ambitious workaholic, but apart from that, pretty simple person.'
            />
            <TeamCard
              imageSrc='/images/staff-2.jpg'
              name='Jason Smith'
              title='PRESIDENT & CEO'
              bio='I am an ambitious workaholic, but apart from that, pretty simple person.'
            />
            <TeamCard
              imageSrc='/images/staff-3.jpg'
              name='Jason Smith'
              title='PRESIDENT & CEO'
              bio='I am an ambitious workaholic, but apart from that, pretty simple person.'
            />
            <TeamCard
              imageSrc='/images/staff-4.jpg'
              name='Jason Smith'
              title='PRESIDENT & CEO'
              bio='I am an ambitious workaholic, but apart from that, pretty simple person.'
            />
          </div>
        </div>
      </div>
    </>
  );
};

const TeamCard = ({ imageSrc, name, title, bio }) => {
  return (
    <div className='max-w-md rounded-md shadow-md bg-white '>
      <img className='w-full rounded h-80' src={imageSrc} alt={name} />
      <div className='px-6 py-4 '>
        <div className='font-bold text-xl text-[gray] mb-2'>{name}</div>
        <p className='text-gray-700 font-medium text-md mb-2'>{title}</p>
        <p className='text-gray-700 text-base mb-2'>{bio}</p>
        <div className='flex space-x-5'>
          <span className='text-gray-700 hover:text-gray-900 '>
            <FaInstagram />
          </span>
          <span className='text-gray-700 hover:text-gray-900'>
            <FaLinkedin />
          </span>
          <span className='text-gray-700 hover:text-gray-900'>
            <FaTwitter />
          </span>
          <span className='text-gray-700 hover:text-gray-900'>
            <FaFacebook />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
