import React from "react";
import Button from "./Button";

const ProductQue = () => {
  return (
    <>
      <div className='py-20'>
        <div className='container-xxl'>
          <div className='row items-center'>
            <div className='col-6 space-y-10'>
              <h1 className="text-3xl text-[gray]">
                "Marketers need to build digital relationships <br /> and reputation before closing a sale"
              </h1>
              <Button
                name='Request a qutes'
                color="#5579FA"
                bgh='#5579FA'
                hc='#fff'
                style={`border-2 border-[#5579FA]`}
              />
            </div>

            <div className='col-6 space-y-5'>
              <div className="space-y-3">
                <h1 className="text-xl font-bold">Digital Marketing</h1>
                
                <div
                  class='progress'
                  role='progressbar'
                  aria-label='Example with label'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  <div class='progress-bar' style={{ width: "75%" }}>
                    25%
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-xl font-bold">Design & Development</h1>
               
                <div
                  class='progress'
                  role='progressbar'
                  aria-label='Example with label'
                  aria-valuenow='55'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  <div class='progress-bar' style={{ width: "55%" }}>
                    25%
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="text-xl font-bold">Branding</h1>
                <div
                  class='progress'
                  role='progressbar'
                  aria-label='Example with label'
                  aria-valuenow='45'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  <div class='progress-bar' style={{ width: "45%" }}>
                    25%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQue;
