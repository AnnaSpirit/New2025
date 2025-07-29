import "./App.css";
import Counter from "./components/Counter";
import { useRef, useState } from "react";
import CounterReducer from "./components/CounterReducer";
/**
 * reference to an html element
 * hold some data/value - (* like state/ value)
 */

function App() {
  const [text, setText] = useState("Change the Text");
  const divRef = useRef();
  const inputNameRef = useRef();
  // console.log(divRef);

  let userJohn = "John";
  const userAnneRef = useRef("Anne");

  const handleClick = () => {
    // console.log(inputNameRef.current.value, inputNameRef.current.type);
    // divRef.current.style.backgroundColor = "yellow";

    userJohn = "DAN";
    userAnneRef.current = "MARRY";

    console.log("userJohn=>", userJohn);
    console.log("userAnneRef=>", userAnneRef);
  };
  return (
    <div ref={divRef}>
      <h2>Context hook / useRef / useReducer</h2>
      {/* <Counter /> */}
      {/* <input ref={inputNameRef} placeholder='Enter your name...' /> */}
      {/* <h2>{userJohn}</h2>
      <h2>{userAnneRef.current}</h2>
      <button onClick={handleClick}>Click</button>
      <div>
        <button onClick={() => setText("WOW")}>{text}</button>
      </div> */}
      <CounterReducer />
    </div>
  );
}

export default App;
