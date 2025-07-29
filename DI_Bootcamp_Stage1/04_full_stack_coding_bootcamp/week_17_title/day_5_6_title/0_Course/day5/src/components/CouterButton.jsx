import { useContext } from "react";
import { CounterContext } from "./Counter";
import { CounterPlusSign } from "./Counter";
function CouterButton() {
  const { setCount } = useContext(CounterContext);
  const { plus } = useContext(CounterPlusSign);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}> {plus} </button>
    </>
  );
}

export default CouterButton;
