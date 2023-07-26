import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>Increment</button>
            <button onClick={minus}>Decrement</button>
        </div>
    );
};

export default Counter;