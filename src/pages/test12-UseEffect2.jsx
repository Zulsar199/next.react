import { useState, useEffect } from "react";
// command i
export default function Home(){
    const [count, setCount] = useState(0);
    useEffect(() =>{
        console.log("hi");
    }, [])
  
    return(
        <div>
            <div>
                <button className="border-[2px] rounded-md border-red-400 w-[200px] h-[10px]]" onClick={() => setCount(count + 1)}>Add</button>

            </div>
            <h1>{count}</h1>
        </div>
    )
}