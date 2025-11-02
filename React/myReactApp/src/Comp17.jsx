import {useState} from "react";

function Comp17(){

    const [user , changeUser] = useState({name:"Sachin",age:45})

    return(
        <>
            <h4>Welcome { user.name } , your age is {user.age}</h4>
            <button onClick={() => changeUser({name:"Virat",age:38})}>Change Name with age.</button><br/>
            <button onClick={() => changeUser({name:"Virat"})}>Change Name only</button><br/>
            <button onClick={() => changeUser({name:"Virat",...user})}>Change Name with old age</button><br/>
            <button onClick={() => changeUser({...user,name:"Virat"})}>old object and new name.</button>
        </>
    )
}
export default Comp17;