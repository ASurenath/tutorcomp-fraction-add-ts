import { useEffect, useState } from "react";
import "./App.css";
import Fraction from "./Components/Fraction";
import Frame1 from "./Frames/Frame1";
import Frame3 from "./Frames/Frame3";
import Frame2 from "./Frames/Frame2";
import { InputNumber } from "primereact/inputnumber";
import { PlusIcon } from '@heroicons/react/24/solid'
function App() {
  const [num1, setNum1] = useState<number>(1);
  const [num2, setNum2] = useState<number>(1);
  const [denom1, setDenom1] = useState<number>(2);
  const [denom2, setDenom2] = useState<number>(3);
  const [frameNo, setFrameNo] = useState<number>(0);
  // const [valueEntered, setValueEntered] = useState<boolean>(false);
  // const [err1, setErr1] = useState<boolean>(false);
 
  // const input1=document.getElementById("input-1")
  // input1.onchange=(e)=>handleSetError(e.target.value, setErr1);

  // useEffect(() => {
  //   document.getElementById("input-1").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-2").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-3").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-4").onchange=(e)=>handleSetError(e.target.value);
    
  //   }, [])
  const handleSetValue = (value: number, setValue: any) => {
    console.log("value", value);
    if (value <= 0 || value > 99) {
      // setValue(1);
    } else {
      setValue(Math.floor(value));
    }
  };
  // const handleSetError=(value)=>{
  //   console.log("value", value);

  //   if (value <= 0 || value > 99) {
  //     setErr1(true);
  //   } else {
  //     setErr1(false);
  //   }
  // }
  
  function gcd(a: number, b: number) {
    for (let temp = b; b !== 0; ) {
      b = a % b;
      a = temp;
      temp = b;
    }
    return a;
  }
  function lcm(a: number, b: number) {
    const gcdValue = gcd(a, b);
    console.log("gcdValue", gcdValue);
    console.log("a * b / gcdValue", (a * b) / gcdValue);
    return (a * b) / gcdValue;
  }

  return (
    <div className="App">
      <h1 className="text-center py-3 text-3xl sm:text-4xl">Addition of fractions</h1>

      <div className="main flex flex-col justify-start items-center">
        {frameNo == 0 && (
          <div className="flex justify-center items-center mt-20 ">
            <div className=" flex flex-col ">
              <InputNumber
                className="small-input text-center text-3xl sm:text-4xl"
                min={1}
                max={99}
                value={num1}
                onValueChange={(e) => handleSetValue(Number(e.target.value), setNum1)}
                showButtons
                inputId="input-1"
              />
              <hr className="bg-gray-700 h-1.5 w-20 ms-2 " />
              <InputNumber
                className=" small-input text-center text-3xl sm:text-4xl"
                min={1}
                max={99}
                value={denom1}
                onValueChange={(e) => handleSetValue(Number(e.target.value), setDenom1)}
                showButtons
                id="input-2"
              />
            </div>
            <div><PlusIcon className="w-10 h-10 md:w-20 md:h-20  md:m-6" /></div>

            <div className="flex flex-col me-5">
              <InputNumber
                className=" small-input text-center text-3xl sm:text-4xl"
                min={1}
                max={99}
                value={num2}
                onValueChange={(e) => handleSetValue(Number(e.target.value), setNum2)}
                showButtons
                id="input-3"
              />
              <hr className="bg-gray-700 h-1.5 w-20 ms-2" />
              <InputNumber
                className=" small-input text-center text-3xl sm:text-4xl "
                min={1}
                max={99}
                value={denom2}
                onValueChange={(e) => handleSetValue(Number(e.target.value), setDenom2)}
                showButtons
                id="input-4"
              />
            </div>
            <button
              className="mx-1 md:mx-5 text-3xl sm:text-4xl text-white bg-blue-500 rounded-md md:px-10 px-5 py-5 hover:bg-blue-600 "
              onClick={() => {
                // setValueEntered(true);
                setFrameNo(1);
              }}
            >
              =
              
            </button>
          </div>
        )}

        {frameNo >= 1 && (
          <Frame1
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo >= 2 && denom1 != denom2 && (
          <Frame2
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo >= 3 && (
          <Frame3
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
      </div>
      {/* <div className="text-danger text-center fs-6">Please enter numerators and denominators between 1 and 99</div> */}
    </div>
  );
}

export default App;