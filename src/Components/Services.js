import React from "react";
import { FaArtstation, FaCode, FaCodepen } from 'react-icons/fa';
import { SiAntdesign, SiDigitalocean, SiGmail, SiPacker, SiWebflow } from "react-icons/si";

const Services = () => {
  return (
    <>
      <div className='h-auto bg-[#F4F6FF]'>
        <div className='container-xxl py-20'>
          <div className='space-y-4 text-center'>
            <p className='text-uppercase text-md text-[#FEB82C] font-bold'>
              Services
            </p>
            <h1 className='text-4xl font-semibold leading-snug'>
              Our Exclusive Services <br /> We Offer For You
            </h1>
          </div>
          <div className='row mt-5'>
            <div className='col-3'>
              <Scard
                icon={<SiAntdesign />}
                heading='Creative Design'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<SiDigitalocean />}
                heading='Digital Marketing'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<FaCodepen />}
                heading='Application Design'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<FaCode />}
                heading='Web Development'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
          </div>
          <div className='row my-5'>
            <div className='col-3'>
              <Scard
                icon={<SiPacker />}
                heading='Branding'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<FaArtstation />}
                heading='Graphic Design'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<SiGmail />}
                heading='Email Marketing'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
            <div className='col-3'>
              <Scard
                icon={<SiWebflow />}
                heading='Web Design'
                desc='Far far away, behind the word mountains, far from the countries Vokalia.'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// card

const Scard = ({ icon, heading, desc }) => {
  return (
    <div className='group bg-[#fff]  transition ease-linear duration-150  shadow-md hover:shadow-sm px-3 py-5 space-y-5 cursor-pointer'>
      <span className='text-5xl bg-[#22AFA8] group-hover:bg-[#5579FA] d-inline-block text-white px-3 py-3 rounded-full'>
        {icon}
      </span>
      <p className='text-xl font-semibold '>{heading}</p>
      <p className='text-md text-[gray] font-medium '>{desc}</p>
    </div>
  );
};

export default Services;
