import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    function handleCount(){
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = ()=>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border:'2px solid yellow',margin:'20px', padding:'20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>ADD</button>
            <button onClick={handleReduce}>REDUCE</button>
        </div>
    )
}