import React, { useEffect, useState } from "react";
import Fraction from "../Components/Fraction";
import FractionSum from "../Components/FractionSum";

function Frame3({ num1, denom1, num2, denom2, lcm, setFrameNo }: {
  num1: number;
  denom1: number;
  num2: number;
  denom2: number;
  lcm: number;
  setFrameNo: any;}) {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [step]);
  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     setStep(step + 1);
  //     if (step >= 20) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, [step]);
  const increaseStep = () => {
    setStep(step + 1);
  };
  const renderButtons = () => {
    return (
      <div className="flex w-100 justify-evenly appear">
        <button  onClick={() => setFrameNo(0)} className="text-4xl text-white bg-blue-500 rounded-md md:px-10 p-3 hover:bg-blue-600 my-5">
          Back
        </button>
      </div>
    );
  };
  const renderList = [
    //// step0
    <>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {(num1 * lcm) / denom1}/{lcm}
        </div>
        <Fraction
          // className="appear" //TODO: fix this
          num={num1}
          denom={denom1}
          split={lcm == denom1 ? null : lcm / denom1}
          color={"blue"}
        />
      </div>
      <div className="text-center text-2xl font-bold">+</div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {(num2 * lcm) / denom2}/{lcm}
        </div>
        <Fraction
          // className="appear" //TODO: fix this
          num={num2}
          denom={denom2}
          split={lcm == denom2 ? null : lcm / denom2}
          color={"yellow"}
        />
      </div>
    </>,
    //// step1
    <>
      <div className="text-center text-2xl">=</div>

      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
          {(num1 * lcm) / denom1 + (num2 * lcm) / denom2}/{lcm}
        </div>

        <FractionSum
          // className="appear" //TODO: fix this
          num1={(num1 * lcm) / denom1}
          num2={(num2 * lcm) / denom2}
          denom={lcm}
          color1={"blue"}
          color2={"yellow"}
        />
      </div>
    </>,
    //// step2

    <p className="appear text-2xl sm:text-3xl text-center  sm:leading-loose">
      Answer:
      {num1}/{denom1}+{num2}/{denom2}
      {denom1 != denom2 &&
        `=${(num1 * lcm) / denom1}/${lcm}+${(num2 * lcm) / denom2}/${lcm}`}
      =
      <span className="fw-bold text-3xl sm:text-4xl">
        {(num1 * lcm) / denom1 + (num2 * lcm) / denom2}/{lcm}
      </span>
    </p>,
  ];

  return (
    <div className="frame3">
      {renderList.map((i, index) => (
        step>=index&&<React.Fragment key={index}>{renderList[index]}</React.Fragment>
      ))}
      {step < renderList.length && (
        <div className="text-center">
          <button className="mb-5 text-4xl text-white bg-blue-500 rounded-md md:px-10 p-3 hover:bg-blue-600" onClick={increaseStep}>
              <i className="fa-solid fa-angle-down mx-5"></i>
          </button>
        </div>
      )}
      {step >= renderList.length && renderButtons()}
    </div>
  );
}

export default Frame3;
