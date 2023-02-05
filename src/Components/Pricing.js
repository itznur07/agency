import React from "react";

const Pricing = () => {
  return (
    <>
      <div className=''>
        <div className='h-auto py-5 container-xxl'>
          <div className='space-y-4 text-center text-white'>
            <p className='text-uppercase text-md text-[#FEB82C] font-bold'>
              OUR PRICING
            </p>
            <h1 className='text-4xl font-semibold text-black leading-snug'>
              Find Plan that is Right for You
            </h1>
          </div>
          <div className='flex items-center justify-around space-x-3 mt-5'>
            <PricingCard
              title='Free'
              price='50$'
              services={[
                "Live Chat Support",
                "Minimum of 10 users",
                "Web Conference Support",
                "Group Management of users",
                "Remote Monitory",
              ]}
              buttonText='Get Start'
            />
            <PricingCard
              title='Basic Plan'
              price='79$'
              services={[
                "Live Chat Support",
                "Minimum of 10 users",
                "Web Conference Support",
                "Group Management of users",
                "Remote Monitory",
              ]}
              buttonText='Get Start'
            />
            <PricingCard
              title='Professional'
              price='89$'
              services={[
                "Live Chat Support",
                "Minimum of 10 users",
                "Web Conference Support",
                "Group Management of users",
                "Remote Monitory",
              ]}
              buttonText='Get Start'
            />
            <PricingCard
              title='Startup'
              price='99$'
              services={[
                "Live Chat Support",
                "Minimum of 10 users",
                "Web Conference Support",
                "Group Management of users",
                "Remote Monitory",
              ]}
              buttonText='Get Start'
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PricingCard = ({ title, price, services, buttonText, buttonLink }) => {
  return (
    <div className='w-96 rounded bg-[#F9FAFF] hover:shadow-md flex justify-center py-5'>
      <div className='px-6 py-4 space-y-3'>
        <div className='font-semibold text-center text-md '>{title}</div>
        <div className='text-3xl font-bold text-center mb-4'>{price}</div>
        <ul>
          {services.map((service, index) => (
            <li key={index} className='text-gray-700 text-base mb-2 text-center space-y-2'>
              {service}
            </li>
          ))}
        </ul>
        <div className='text-center mt-5'>
          <a
            href={buttonLink}
            className='bg-[#20BAA9] text-white px-4 py-2.5 rounded hover:bg-indigo-600 cursor-pointer'
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
