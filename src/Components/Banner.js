import React from "react";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";

const Banner = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className='flex items-center justify-between'>
          <div className='md:space-y-7'>
            <h4 className='text-5xl font-semibold text-white leading-snug'>
              We Are Digital Agency <br /> Helping To Boost Your sales
            </h4>
            <p className='text-md text-[#f3f3f3] leading-snug'>
              A small river named Duden flows by their place and supplies <br />{" "}
              it with the necessary regelialia
            </p>
            <div className='flex items-center space-x-5'>
              <div className='shadow-md hover:shadow-none'>
                <Button name='start a project' bg='#ffffff' color='#22AFA8' />
              </div>
              <div className='d-flex items-center '>
                <span className='text-white text-md'>
                  <FaPlay />
                </span>
                <Button name='watch the video' color='#ffffff' />
              </div>
            </div>
          </div>
          <div className=''>
            <img width="500px" src='/images/hero-1.png' alt='img' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
