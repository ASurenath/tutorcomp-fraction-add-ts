import React from "react";
import "./Fraction.css";
function FractionSum({ num1,num2, denom, color1,color2 }) {
  const style0 = {
    gridTemplateColumns: `repeat(${denom}, 1fr)`,
  };

  const style1 = {
    backgroundColor: color1,
  };

  const style2 = {
    backgroundColor: color2,
  };
  const rows = Array.from(
    { length: Math.floor((num1+num2) / denom)+1 },
    (_, rIndex) => Array.from({ length: denom }, (_, cIndex) => {
      if (denom*rIndex+cIndex < num1) {
        return 1;
      } else if(denom*rIndex+cIndex < num1+num2) {
        return 2;
      }
      else{
        return 0
      }
    })
  );
  const elements = Array.from({ length: denom }, (_, index) => {
    if (index < num1 % denom) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      {!num1 ||!num2 || !denom ? (
        console.error(
          "'num1','num2' and 'denom' are required for the component 'Fraction'"
        )
      ) : (
        <div>
          {rows.map((row, index) => (
            <div
              key={`grid-${index}`}
              className="rounded mx-auto my-1 grid-container"
              style={style0}
            >
              {row.map((j, index) => (
                <div
                  key={`item-${index}`}
                  style={j==1?style1:j==2?style2:{}}
                >
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FractionSum;
