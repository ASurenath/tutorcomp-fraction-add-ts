import React, { useEffect, useState } from "react";
import Fraction from "../Components/Fraction";

function Frame1({ num1, denom1, num2, denom2, lcm, setFrameNo }:{
  num1: number;
  denom1: number;
  num2: number;
  denom2: number;
  lcm: number;
  setFrameNo: any;}) {

  const [step, setStep] = useState(0);


  const textA: string[] = [
    `We can represent fractions as shaded sections, where the whole is divided into equal parts,`,
    `as many as the denominator. And we shade as many sections as the numerator`,
    `Both ${num1}/${denom1} and ${num2}/${denom2} have different denominators.`,
    ` We need to find the common denominator to add them.`,
    `The smallest possible common denominator is the least common multiple(LCM) of both denominators.`,
  ];
  const textB: string[] = [
    `We can represent fractions as shaded sections, where the whole is dvided into equal parts,`,
    `as many as the denominator. And we shade as many sections as the numerator`,
    `Both ${num1}/${denom1} and ${num2}/${denom2} have the same denominator. `,
    `So we can easily add them.`,
  ];

  const increaseStep = () => {
    if (denom1 == denom2) {
      if (step == renderList1.length - 1 && denom1==denom2) {
        setFrameNo(3);
      }
    } else {
      if (step == renderList2.length - 1 && denom1!=denom2) {
        setFrameNo(2);
      }
    }

    setStep(step + 1);
  };
  const renderList1 = [
    // //step0
    <>
    <p className="appear text-2xl sm:text-3xl text-center  sm:leading-loose">{textB[0]}</p>
    <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{textB[1]}</p>
  </>,
    // step1
    <>
      <div className="outer-grid appear">
        <div className="text-2xl font-bold">
            {num1}/{denom1}
        </div>
        <Fraction num={num1} denom={denom1} color={"blue"} split={null} />
      </div>
      <div className="appear text-2xl font-bold">+</div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {num2}/{denom2}
        </div>
        <Fraction num={num2} denom={denom2} color={"yellow"} split={null} />
      </div>
    </>,
    // step2

    <>
      <p className="appear text-2xl sm:text-3xl text-center sm:leading-loose">{textB[2]}</p>
      <p className="appear text-2xl sm:text-3xl text-center sm:leading-loose">{textB[3]}</p>
    </>,
  ];
  const renderList2 = [
    // step0
    <>
      <p className="appear text-2xl sm:text-3xl text-center sm:leading-loose ">{textA[0]}</p>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{textA[1]}</p>
    </>,

    // step1
    <>
      <div className="outer-grid appear">
        <div className="text-2xl font-bold">
            {num1}/{denom1}
        </div>
        <Fraction num={num1} denom={denom1} color={"blue"} split={null} />
      </div>
      <div className="appear text-2xl font-bold">+</div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {num2}/{denom2}
        </div>
        <Fraction num={num2} denom={denom2} color={"yellow"} split={null} />
      </div>
    </>,
    // step2
    <>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{textA[2]}</p>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{textA[3]}</p>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{textA[4]}</p>
    </>,
  ];
  return (
    <div className="flex-column align-center justify-start frame1
    ">
      {denom1 == denom2 ? (
        <>
          {renderList1.map(
            (i, index) =>
              step >= index && (
                <React.Fragment key={index}>
                  {renderList1[index]}
                </React.Fragment>
              )
          )}
          {step < renderList1.length && (
            <div className="text-center">
              <button  className="mb-5 text-4xl text-white bg-blue-500 rounded-md md:px-10 p-3 hover:bg-blue-600" onClick={increaseStep}  id="next-button">
                  <i className="fa-solid fa-angle-down mx-5"></i>
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          {renderList2.map(
            (i, index) =>
              step >= index && (
                <React.Fragment key={index}>
                  {renderList2[index]}
                </React.Fragment>
              )
          )}
          {step < renderList2.length && (
            <div className="text-center">
              <button  onClick={increaseStep} className="mb-5 text-4xl text-white bg-blue-500 rounded-md md:px-10 p-3 hover:bg-blue-600">
                  <i className="fa-solid fa-angle-down mx-5"></i>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Frame1;
