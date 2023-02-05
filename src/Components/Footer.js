import React from "react";
import {
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#f5f5f5] text-white py-12'>
      <div className='container-xxl mx-auto flex flex-wrap'>
        <div className='w-full md:w-1/4 text-start px-4 py-2 text-black'>
          <h2 className='text-2xl font-semibold'>Sai.</h2>
          <p className='text-nd mt-2'>
            Lorem ipsum dolor sit,
            <br /> amet consectetur adipisicing <br />
            elit. Asperiores, impedit..
          </p>
          <p className='text-nd mt-2'>
            Lorem ipsum dolor sit,
            <br /> amet consectetur adipisicing <br />
            elit. Asperiores, impedit..
          </p>
          <div className='flex text-md  space-x-4 mt-4 cursor-pointer'>
            <span className='bg-[#20BAA9] text-white px-3 py-2 rounded'>
              <FaFacebook />
            </span>
            <span className='bg-[#20BAA9] text-white px-3 py-2 rounded'>
              <FaTwitter />
            </span>
            <span className='bg-[#20BAA9] text-white px-3 py-2 rounded'>
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start px-4 py-2 text-black'>
          <h2 className='text-xl font-semibold'>Recent Post</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4'>
            <p className="hover:text-[#20BAA9]">&rarr; Productive tool</p>
            <p className="hover:text-[#20BAA9]">&rarr; Productive tool</p>
            <p className="hover:text-[#20BAA9]">&rarr; Productive tool</p>
            <p className="hover:text-[#20BAA9]">&rarr; Productive tool</p>
            <p className="hover:text-[#20BAA9]">&rarr; Productive tool</p>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start text-black px-4 py-2'>
          <h2 className='text-xl font-semibold'>Services</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4 '>
            <p className="hover:text-[#20BAA9]">&rarr; Creative Design</p>
            <p className="hover:text-[#20BAA9]">&rarr; Digital Marketing</p>
            <p className="hover:text-[#20BAA9]">&rarr; Application Design</p>
            <p className="hover:text-[#20BAA9]">&rarr; Web Development</p>
            <p className="hover:text-[#20BAA9]">&rarr; Brading Products</p>
          </div>
        </div>
        <div className='w-full md:w-1/4 text-start text-black px-4 py-2'>
          <h2 className='text-xl font-semibold'>Have a Questions?</h2>
          <div className='text-md text-gray-600 cursor-pointer mt-3 space-y-4'>
            <div className='flex  space-x-3'>
              <span className='text-[#20BAA9]'>
                <FaAddressCard />{" "}
              </span>{" "}
              <p>
                {" "}
                203 Fake St. Mountain View, <br /> San Francisco, <br />{" "}
                California, USA
              </p>
            </div>
            <p className='flex space-x-3'>
              <span className='text-[#20BAA9]'>
                <FaPhone />
              </span>{" "}
              <span>+2 392 3929 210</span>
            </p>
            <div className='flex  space-x-3'>
              {" "}
              <span className='text-[#20BAA9]'>
                <FaTelegram />
              </span>{" "}
              <p> info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
