import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
    switch (action.type) {
        case "increment":
          return { number: state.number + 1 };
        case "decrement":
          return { number: state.number - 1 };
        default:
          return state;
      }
}

function init(initialState) {
    return {number: initialState}
}

const Count = () => {
    const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
        {state}
        <button onClick={() => dispatch({type: "increment"})}></button>
        <button onClick={() => dispatch({type: "decrement"})}></button>
    </div>
  )
}

export default Count