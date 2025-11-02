import MyHeaderComp from "./MyHeaderComp.jsx";
import {useEffect, useState} from "react";

function Comp20(){

    // When we want to use variables later, we use state
    const [ userList, setUserList ] = useState([])
    const [ pending, setPending ] = useState(false)
    const [ error, setError ] = useState("")


    //  https://dummyjson.com/users
    async function fetchAllUsers(){
        setPending(true)
       try{
           const res = await fetch("https://dummyjson.com/users");
           if(!res.ok){
               throw new Error(`Error occurred, Status : ${res.status}`)
           }
           const data = await res.json();
           setUserList(data.users)
       }
       catch (err){
           setError("Failed to fetch Data....."+err);
       }
       finally {
           setPending(false);
       }

    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return(
        <>
            <MyHeaderComp num="20"/>
            { pending && <span className='spinner-border spinner-border-sm'></span>}
            { error && <h3>{error}</h3>}
            { !pending && !error && userList.length > 0 && (
                <ul>
                    { userList.map((user)=>
                        <li>{user.firstName}</li>
                    )}
                </ul>
            )}
        </>
    )
}
export default Comp20;