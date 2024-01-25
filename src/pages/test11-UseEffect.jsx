import React, { useState, useEffect} from "react"

const MyButton = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, []);
    return(
        <button onClick={() => setCount((prevstate) =>prevstate + 1)}>You clicked {count} times</button>
    )
};

export default MyButton;