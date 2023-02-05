import React from "react";


const Summery = () => {

 
  return (
    <>
      <div className='h-52  bg-blend-darken' style={{background:`url(/images/bg_3.jpg)`, backgroundSize:'cover', backgroundPosition:'center', backgroundColor:'#333030', backgroundBlendMode:"overlay"}}>
        <div className="">
        <div className='container-xxl flex items-center justify-between text-center'>
          <div className='space-y-5 mt-20'>
            <span className='font-bold text-5xl text-white'>
              60+
            </span>
            <h1 className='text-md font-bold text-[#ffffff] uppercase'>Year of experienced</h1>
          </div>
          <div className='space-y-5 mt-20'>
            <span className='font-bold text-5xl text-white'>
              10,000+
            </span>
            <h1 className='text-md font-bold text-[#ffffff] uppercase'>Setisfied customer</h1>
          </div>
          <div className='space-y-5 mt-20'>
            <span className='font-bold text-5xl text-white'>
              5000+
            </span>
            <h1 className='text-md font-bold text-[#ffffff] uppercase'>Project Complate</h1>
          </div>
          <div className='space-y-5 mt-20'>
            <span className='font-bold text-5xl text-white'>
              100
            </span>
            <h1 className='text-md font-bold text-[#ffffff] uppercase'>GET AWARDS</h1>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Summery;
