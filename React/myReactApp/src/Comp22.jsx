import MyHeaderComp from "./MyHeaderComp.jsx";
import {useRef} from "react";

function Comp22(){
    console.log("component rendered");

    const countRef = useRef(1);
    const divEle = useRef(null);


    const btnClick = () => {
        console.log(countRef.current);
        countRef.current++;
        console.log(divEle.current);
        divEle.current.style.color = 'red';
    }
    return(
        <>
            <MyHeaderComp num={22}/>
        </>
    )
}
export default Comp22;