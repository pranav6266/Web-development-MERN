import {useState} from "react";

function Comp16(){
    // let num = 1;
    // function updateValue(){
    //     num += 1;
    //     console.log(num);
    // }

    const [ num, updateValue ] = useState(1)

    return(
        <>
            <h3 align="center"> Component 16 </h3>
            Number : {num}
            <br/>
            <button onClick={()=>updateValue(num+1)}>Button</button>
        </>
    )
}
export default Comp16;