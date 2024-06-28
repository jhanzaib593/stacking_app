import React from "react";

const Phase = ({ title, description, phase }) => {
  return (
    <>
      <div className="flex items-start mt-5 w-fit-content">
        <div className="lg:w-fit-content flex justify-end mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p
                className="text-primary text-[14px] lg:text-[20px] font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                {phase}
              </p>
            </div>
            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-[38%]"></div>
        <div className="hidden lg:block lg:w-[60%] relative mt-2">
          <div className="phase-content left"></div>
          <div className="ml-10 mb-10 bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[12px] lg:text-[12px] font-bold text-primary mb-4">
              {title}
            </h3>
            {/* <p className="text-[18px] font-normal text-primaryBrown">
              {description}
              
            </p> */}
            <p
              className="text-[18px] font-normal text-primaryBrown"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          {title}
        </h3>
        <p
          className="text-[18px] font-normal text-primaryBrown"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </>
  );
};

export default Phase;
