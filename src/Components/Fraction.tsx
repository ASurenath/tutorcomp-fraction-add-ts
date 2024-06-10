import React from "react";
import "./Fraction.css";
function Fraction({ num, denom, split, color }: {
  num: number;
  denom: number;
  split: number|null;
  color: string;
}) {
  const style1:object = {
    gridTemplateColumns: `repeat(${denom}, 1fr)`,
  };
  const style3:object = {
    display:'grid',
    gridTemplateColumns: `repeat(${split}, 1fr)`,
  };
  const style2:object = {
    backgroundColor: color,
  };
  const rows: number[] = Array.from(
    { length: Math.floor(num / denom) },
    (_, index) => index
  );
  const elements: boolean[] = Array.from({ length: denom }, (_, index) => {
    if (index < num % denom) {
      return true;
    } else {
      return false;
    }
  });
  const splitElements: number[] = Array.from(
    { length: split ? split : 0 },
    (_, index) => index
  );

  return (
    <>
      {!num || !denom ? (
        console.error(
          "'num' and 'denom' are required for the component 'Fraction'"
        )
      ) : (
        <div>
          {rows.map((i, index) => (
            <div
              key={`grid-${index}`}
              className="rounded mx-auto my-1 grid-container"
              style={style1}
            >
              {elements.map((j, index) => (
                <div
                  key={`item-${index}`}
                  style={{ ...style2, ...(split ? style3 : {}) }}
                >
                  {split && splitElements.map((k,index)=><div key={`split-${index}`}></div>)}
                </div>
              ))}
            </div>
          ))}

          {elements[0] && (
            <div className="rounded mx-auto my-1 grid-container" style={style1}>
              {elements.map((k, index) => (
                <div
                  key={`item2-${index}`}
                  style={{ ...(k ? style2 : {}), ...(split ? style3 : {}) }}
                >
                  {split && splitElements.map((k,index)=><div key={`split-${index}`}></div>)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Fraction;
