import React from "react";

const Phase = ({ title, description, phase }) => {
  return (
    <>
      <div className="flex items-start justify-center mt-5 w-full">
        <div className="lg:w-fit-content flex justify-end mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
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
        <div className="hidden lg:block lg:w-[48%] relative mt-2">
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
          Foundation
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Set up website infrastructure, design and create essential pages.
        </p>
      </div>
      {/* <div className="flex items-start mt-5 justify-center w-full">
      <div className="lg:w-[52%] flex justify-end mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 2
              </p>
            </div>
            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>
          </div>
        </div>
        <div className="w-[49%] lg:flex justify-end hidden relative mt-2">
          <div className="phase-content right"
          ></div>
          <div className="mr-10 mb-10 w-[414px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Platform Development on Testnet
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Develop and test the staking platform, smart contract
              functionality and user interfaces.
            </p>
          </div>
        </div>
        
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Platform Development on Testnet
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Develop and test the staking platform, smart contract functionality
          and user interfaces.
        </p>
      </div>
      <div className="flex items-start mt-5 justify-center w-full">
        <div className="flex justify-end w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 3
              </p>
            </div>
            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-[38%]"></div>
        <div className="w-[48%] hidden lg:block relative mt-2">
          <div className="phase-content left"></div>
          <div className="ml-10 mb-10 w-[388px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Security Audit and Bug Bounty
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Conduct security audit and establish bug bounty program.
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Security Audit and Bug Bounty
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Conduct security audit and establish bug bounty program.
        </p>
      </div> */}
      {/* <div className="flex items-start mt-5 justify-center w-full">
        <div className="w-[49%] lg:flex justify-end hidden relative mt-2">
          <div className="phase-content right" ></div>
          <div className="mr-10 mb-10 w-[357px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Mainnet Launch
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Launch the staking platform on the TON mainnet.
            </p>
          </div>
        </div>
        <div className="block lg:hidden w-[43%]"></div>
        <div className="w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative left-1/2 lg:left-0 -translate-x-4 lg:translate-x-0">
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>

            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 4
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Mainnet Launch
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Launch the staking platform on the TON mainnet.
        </p>
      </div> */}
      {/* <div className="lg:flex hidden items-start mt-5 mb-[25px] lg:mb-[52px] justify-center w-full">
        <div className="w-[49%] lg:flex justify-end hidden relative mt-2"></div>
        <div className="block lg:hidden w-[43%]"></div>
        <div className="w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative left-1/2 lg:left-0 -translate-x-4 lg:translate-x-0">
            <div className="bg-fourthGrey w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-pink w-[25px] h-[25px] rounded-full z-20"></div>
            </div>

            <div className="w-[15px] lg:w-[50px] h-[5px] bg-pink"></div>
            <div className="rounded-[50px] bg-pink flex justify-center items-center px-1 lg:px-[33px] py-2 lg:py-4">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Hipo is Here
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-start mt-5 mb-[25px] justify-center w-full">
        <div className="mb-[65px]">
          <div className="flex items-center absolute left-1/2 -translate-x-[95px]">
            <div className="rounded-[50px] min-w-[200px] bg-pink flex justify-center items-center px-[33px] py-4">
              <p className="text-primary text-[20px] font-bold">Hipo is Here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start mt-5 justify-center w-full">
        <div className="flex justify-end w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 5
              </p>
            </div>
            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-[38%]"></div>
        <div className="w-[48%] hidden lg:block relative mt-2">
          <div className="phase-content left" ></div>
          <div className="ml-10 mb-10 w-[381px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Tokenomics and Governance
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Publish tokenomics and governance token details.
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Tokenomics and Governance
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Publish tokenomics and governance token details.
        </p>
      </div>
      <div className="flex items-start mt-5 justify-center w-full">
        <div className="w-[49%] lg:flex justify-end hidden relative mt-2">
          <div className="phase-content right"></div>
          <div className="mr-10 mb-10 w-[357px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Partnerships and Collaboration
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Seek partnerships with other DeFi projects.
            </p>
          </div>
        </div>
        <div className="block lg:hidden w-[43%]"></div>
        <div className="w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative left-1/2 lg:left-0 -translate-x-4 lg:translate-x-0">
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>

            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 6
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 mb-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Partnerships and Collaboration
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Seek partnerships with other DeFi projects.
        </p>
      </div>
      <div className="flex items-start mt-5 justify-center w-full">
        <div className="flex justify-end w-[52%] mb-[65px] lg:mb-0">
          <div className="flex items-center absolute lg:relative right-1/2 lg:right-0 translate-x-6 lg:translate-x-0">
            <div className="rounded-2xl bg-primary flex justify-center items-center px-2 lg:px-[19px] py-3">
              <p className="text-primary text-[14px] lg:text-[20px] font-bold">
                Phase 7
              </p>
            </div>
            <div className="w-[30px] lg:w-[50px] h-[5px] bg-primary"></div>
            <div className="bg-secondary w-[38px] h-[38px] rounded-full flex justify-center items-center">
              <div className="bg-primary w-[25px] h-[25px] rounded-full z-20"></div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-[38%]"></div>
        <div className="w-[48%] hidden lg:block relative mt-2">
          <div className="phase-content left"></div>
          <div className="ml-10 w-[381px] bg-primaryGrey px-12 pt-6 pb-10 rounded-[30px]">
            <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
              Continuous Improvement
            </h3>
            <p className="text-[18px] font-normal text-primaryBrown">
              Gather user feedback and make ongoing updates.
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mt-10 w-full bg-primaryGrey px-6 py-5 rounded-[10px]">
        <h3 className="text-[18px] lg:text-[25px] font-bold text-primary mb-4">
          Continuous Improvement
        </h3>
        <p className="text-[18px] font-normal text-primaryBrown">
          Gather user feedback and make ongoing updates.
        </p>
      </div> */}
    </>
  );
};

export default Phase;
