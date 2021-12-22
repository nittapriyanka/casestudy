import React from 'react'
import useCustomCountHook from './useCustomCountHook'

function CountHook(){
    const [count,increment,decrement,reset] = useCustomCountHook(1,1)

    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CountHook