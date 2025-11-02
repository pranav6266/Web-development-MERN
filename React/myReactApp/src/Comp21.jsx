
// Props drilling.
// Using context to pass on objects.

import MyHeaderComp from "./MyHeaderComp.jsx";
import {createContext, useContext, useState} from "react";

const userContext = createContext()
function Comp21(){
    const [userName, setUserName] = useState("Sachin")
    return(
        <>
            <userContext.Provider value={{unm : "Sachin"}}>
                <MyHeaderComp num={"21"}/>
                <CompA unm={userName}/>
            </userContext.Provider>



        </>
    )
}

// compA is getting the value through context
function CompA(){
    const user = useContext(userContext)
    return(
        <>
            <MyHeaderComp num={"A"}/>
            <CompB unm={user}/>
        </>
    )
}


// CompB is getting object by the props.
function CompB(props){
    return(
        <>
            <MyHeaderComp num={"B"}/>
            {props.unm}
        </>
    )
}
export default Comp21;