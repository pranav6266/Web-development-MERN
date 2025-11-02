import {useRef, useState} from "react";

function Comp23(){

    // Reference for input element
    const inpRef = useRef(null);
    const formRef = useRef(null);

    function formHandler(e){
        e.preventDefault()

        // // This is all for username
        // console.log(inpRef);
        // console.log(inpRef.current);
        // console.log(inpRef.current.value);

    //     This will be for form
    //     This is easy, but if the form data gets large, the same lines should be repeated.
        console.log(formRef.current.unm.name , formRef.current.unm.value);
    }

    return(
        <>
        <form method="post" onSubmit={formHandler} ref={formRef}>
            User Name : <input type="text" name="unm" ref={inpRef}/><br/><br/>
            Password : <input type="password" name="pwd"/><br/><br/>
            Email ID : <input type="email" name="mailid"/><br/><br/>
            <button type="submit" name="button">Submit</button>
        </form>
        </>
    )
}
export default Comp23;