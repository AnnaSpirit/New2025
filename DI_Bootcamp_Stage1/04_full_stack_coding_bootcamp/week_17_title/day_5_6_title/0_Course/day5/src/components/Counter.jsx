import { useState, createContext } from "react";
import CounterHeader from "./CounterHeader";
import CouterButton from "./CouterButton";
/**
 * 1. create the context and export
 * 2. share the context value - an {}
 * 3. use the context in a component
 */

export const CounterContext = createContext();
export const CounterPlusSign = createContext();

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterContext value={{ title: "my counter", count, setCount }}>
        <CounterHeader />
        <CounterPlusSign.Provider value={{ plus: "+ (add 1)" }}>
          <CouterButton />
        </CounterPlusSign.Provider>
      </CounterContext>
    </>
  );
}

export default Counter;
