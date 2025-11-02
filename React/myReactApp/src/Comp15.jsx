import ShowData from "./ShowData.jsx";

function Comp15(){
    const userData = [
        {
            uid : 1001,
            unm : "Sachin",
            email : "sachin@gmail.com"
        },
        {
            uid : 1002,
            unm : "Virat",
            email : "virat@gmail.com"
        },
        {
            uid : 1003,
            unm : "Dhoni",
            email : "dhoni@gmail.com"
        }
    ]
    return(
        <>
            <h1 align="center">Component 15</h1>
            {userData.map(user=>
                    <p>{ <ShowData user = {user} /> }</p>
            )}
        </>
    )
}

export default Comp15;