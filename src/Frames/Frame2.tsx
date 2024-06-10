import React, { useEffect, useState } from "react";
import Fraction from "../Components/Fraction";

function Frame2({ num1, denom1, num2, denom2, lcm, setFrameNo }: {
  num1: number;
  denom1: number;
  num2: number;
  denom2: number;
  lcm: number;
  setFrameNo: any;}) {
  const [step, setStep] = useState(0);
  const [newNum1, setNewNum1] = useState<number|null>(null);
  const [newNum2, setNewNum2] = useState<number|null>(null);
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [step]);

  console.log("frame2 step", step);
  const increaseStep = () => {
    if (step == 4) {
      findNewNums();
    }
    if (step == renderList.length - 1) {
      setFrameNo(3);
    }
    setStep(step + 1);
  };
  const findNewNums = () => {
    setNewNum1(num1 * (lcm / denom1));
    setNewNum2(num2 * (lcm / denom2));
    return <div> test</div>;
  };

  const renderList = [
    // //step0
    <>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{`LCM of ${denom1} and ${denom2} is ${lcm}.`}</p>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{`${num1}/${denom1} + ${num2}/${denom2} =${newNum1?newNum1:'?'}/${lcm} + ${newNum2?newNum2:'?'}/${lcm}.`}</p>
      <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{`Now, we need to find the numerators.`}</p>
    </>,
    ////step1
    <>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {num1}/{denom1}
        </div>
        <Fraction num={num1} denom={denom1} color={"blue"} split={null}/>
      </div>
      <div className="text-center appear text-2xl font-bold">
        <i className="fa-solid fa-arrow-down"></i>
      </div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {newNum1?newNum1:'?'}/{lcm}
        </div>
        <Fraction
          // className="appear" //fix later
          num={num1}
          denom={denom1}
          split={lcm / denom1}
          color={"blue"}
        />
      </div>
    </>,
    ////step2
    <>
          <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{denom1==lcm?
          <>{num1}/{denom1} already has {lcm} as denominator </>
          :<>
To convert {num1}/{denom1} to a fraction with {lcm} as denominator, we need to multiply both the numerator and denominator by LCM/denominator, that is,{lcm}/{denom1}={lcm/denom1}.
If you look at the picture, you can see that we divided each section into {lcm/denom1} parts to make the total number of sections equal to {lcm}.
          </>}
          </p>
    </>,
    ////step3
    <>
      <div className="text-center appear text-2xl sm:text-3xl">and</div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {num2}/{denom2}
        </div>
        <Fraction num={num2} denom={denom2} color={"yellow"} split={null} />
      </div>
      <div className="text-center appear text-2xl font-bold">
        <i className="fa-solid fa-arrow-down"></i>
      </div>
      <div className="outer-grid appear mb-3">
        <div className="text-2xl font-bold">
            {newNum2?newNum2:'?'}/{lcm}
        </div>
        <Fraction
          // className="appear" //fix later
          num={num2}
          denom={denom2}
          split={lcm / denom2}
          color={"yellow"}
        />
      </div>
    </>,
    ////step4
    <>
    <p className="appear  text-2xl sm:text-3xl text-center sm:leading-loose">{denom2==lcm?
    <>{num2}/{denom2} already has {lcm} as denominator </>:
    <>
To convert {num2}/{denom2} to a fraction with {lcm} as denominator, we need to multiply both the numerator and denominator by LCM/denominator, that is,{lcm}/{denom2}={lcm/denom2}.
If you look at the picture, you can see that we divided each section into {lcm/denom2} parts to make the total number of sections equal to {lcm}.
          </>}</p>

</>,

    ////step5
    <>{/* findNewNums */}</>

  ];
  return (
    <div className="frame2">
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
    </div>
  );
}

export default Frame2;
