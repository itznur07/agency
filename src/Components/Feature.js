import React from "react";
import { FaChartBar, FaMoneyBill, FaRocket, FaSpeakerDeck } from "react-icons/fa";

const Feature = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className='flex items-center md:space-x-5 h-40'>
          <Card
            icon={<FaChartBar />}
            heading={`We have experience for your project`}
            text='Far far away, behind the word mountains, far from the countries Vokalia.'
          />
          <Card
            icon={<FaMoneyBill />}
            heading={`We know how to save your time and money`}
            text='Far far away, behind the word mountains, far from the countries Vokalia.'
          />
          <Card
            icon={<FaSpeakerDeck />}
            heading={`We will bring your new pre-qualified customer`}
            text='Far far away, behind the word mountains, far from the countries Vokalia.'
          />
          <Card
            icon={<FaRocket />}
            heading={`We can boost your project sales`}
            text='Far far away, behind the word mountains, far from the countries Vokalia.'
          />
        </div>
      </div>
    </>
  );
};

// card

const Card = ({ icon, heading, text, bg }) => {
  return (
    <div className='group bg-[#fff] hover:bg-[#5579FA] transition ease-linear duration-150  shadow-sm px-3 py-5 space-y-5 cursor-pointer '>
      <span className='text-3xl bg-[#5579FA] group-hover:bg-[#FEB82C] d-inline-block text-white px-3 py-3 rounded-full'>
        {icon}
      </span>
      <p className='text-xl font-semibold group-hover:text-white'>{heading}</p>
      <p className='text-md text-[gray] font-medium group-hover:text-[#f3f3f3]'>{text}</p>
    </div>
  );
};

export default Feature;
