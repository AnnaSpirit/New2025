import { useReducer } from "react";

const initialState = {
  count: 0,
};

export const ACTION_INCREMENT = "increment";
export const ACTION_DECREMENT = "decrement";

const counterReducer = (state, action) => {
  //   console.log("state=>", state);
  console.log("action=>", action);
  if (action.type === ACTION_INCREMENT) {
    // call to AI agent
    return { ...state, count: state.count + action.payload.num };
  } else if (action.type === ACTION_DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

export default function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  //   console.log("state=>", state);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button
        onClick={() =>
          dispatch({ type: ACTION_INCREMENT, payload: { num: 5 } })
        }
      >
        {" "}
        +1
      </button>
      <button onClick={() => dispatch({ type: ACTION_DECREMENT })}> -1</button>
    </div>
  );
}
