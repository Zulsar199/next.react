import {useState} from "react";
export default function Home(){
    let [number, setNumber] = useState(0);

    const handleButton = (text) =>{
        setNumber(number+1);
        console.log("button darlaa" + " " + number);
    };
    const handleButtonTwo = () =>{
        setNumber(number-1)
        console.log("button darlaa");
    };
    return(
        <div>
            <h1>{number}</h1>
            {/* argument damjuulsan */}
            <button onClick={()=>handleButton("helloo")}>Increment</button>

            {/* argument damjuulaagui */}
            <button onClick={handleButtonTwo}>Decrement</button>
        </div>
    )
}