import { useContext } from "react";
import { CounterContext } from "./Counter";

function CounterHeader() {
  const { title, count } = useContext(CounterContext);
  return (
    <>
      <h1>{title}</h1>
      <h2>Count: {count}</h2>
    </>
  );
}

export default CounterHeader;
