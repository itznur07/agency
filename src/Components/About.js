import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className="flex items-center  h-screen mt-40">
          <div>
            <img  className="w-4/5" src='/images/about.jpg' alt='img' />
          </div>
          <div className="space-y-5">
            <p className="text-uppercase text-md text-[#FEB82C] font-bold">About us</p>
            <h1 className="text-4xl font-semibold leading-snug">We Design, Build Brands & Digital Projects.</h1>
            <p className="text-md text-[gray]">
            Far far away, behind the word mountains,far from the countries Vokalia <br/> Consonantia, there live the blind texts.Separated they live in <br /> right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-md text-[gray]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, labore.</p>
            <div>
                <Button name="Learn More" bg="#22AFA8" color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
