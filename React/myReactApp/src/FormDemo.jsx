import {useState} from "react";

function FormDemo(){

    let [data,setData]=useState({});
    function formData(e){
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log({ [e.target.name] : e.target.value})

        setData(({...data,[e.target.name]:e.target.value}))

        // console.log(data);
    }


    function formHandler(e){
        e.preventDefault();
        console.log(data);
    }

    return(
        <>
        <form onSubmit={(event)=>formHandler(event)}>
            <table className="table table-info table-bordered w-75 ">
                <tbody>
                <tr>
                    <td>User Name : </td>
                    <td><input type="text" name="unm" onInput={(event)=> formData(event)}/></td>
                </tr>
                <tr>
                    <td>Password :</td>
                    <td><input type="password" name="pwd" onInput={(event)=> formData(event)}/></td>
                </tr>
                <tr>
                    <td>
                    <button type="submit">Submit</button>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </form>
        </>
    )
}
export default FormDemo;