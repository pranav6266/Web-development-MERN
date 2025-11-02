import MyHeaderComp from "./MyHeaderComp.jsx";
import {useEffect, useState} from "react";
function Comp19(){
    let [count,setCount] = useState(0);
    let [count2,setCount2] = useState(100)

    // // useEffect with dependency Array (Empty)
    // useEffect(() => {
    //     console.log("Hi from use effect.....")
    // }, []);

    // useEffect with dependency Array (one dependency)
    useEffect(() => {
        console.log("Hi from use effect.....")
    }, [count2]);
    return(
        <>
            <MyHeaderComp num="19"/>
            <p className="text-center">
                Count : {count}<br/>
                <button className="btn btn-primary" type="button" onClick={()=>setCount(count+1)}>Increment</button>
            </p>
                <hr/>
            <p className="text-center">
                Count : {count}<br/>
                <button className="btn btn-secondary" type="button" onClick={()=>setCount(count2+1)}>Increment</button>
            </p>
        </>
    )
}
export default Comp19;