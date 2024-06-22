import React from "react";

const Card = () => {
  console.log("Card");

  return (
    <div
      //   className="card"
      style={{
        backgroundColor: "red",
        // fontSize: "10px",
      }}
    >
      jai shree ram
    </div>
  );
};
// const [counter, setCounter] = useState(0);
// // const [heading, setHeading] = useState("Counter");

// // Arrow function Expression|^
// const handleIncrement = () => {
//   setCounter(counter + 1);
// };
// const handleDecrement = () => {
//   setCounter(counter - 1);
// };
// return (
//   <>
//     <h1>{counter}</h1>
//     {/* <h1>{heading}</h1> */}
//     <button onClick={handleIncrement}>Increment</button>

//     <button onClick={handleDecrement}>Decrement</button>

//     <button
//       onClick={() => {
//         setCounter(0);
//       }}
//     >
//       Reset
//     </button>
//   </>

export default Card;
