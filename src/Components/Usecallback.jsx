import React, { useCallback, useState } from 'react'

function Usecallback() {
    const [count,setCount]=useState(0);
    const handleClick = useCallback(()=>{
        setCount(count+1)
    },[count]);
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <p>{count}</p>
    </div>
  )
}

export default Usecallback