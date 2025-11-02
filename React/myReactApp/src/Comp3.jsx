function Comp3(){
    let name = "Pranav";
    let age = 45;
    let hobbies = ["Swim" , "Dance", "Read", "Exercise"]
    let userData = {
        uid : 1001,
        unm : "Pranav"
    }

    return(
        <>
            <hr color='orange'  size='10px' />
            <h1 align='center'> Component 3 </h1>
            <h3 align='right'> Welcome {name}  </h3>
            <hr color='green' size='20px' />
            <fieldset>
                <legend align='center'>
                    <h3> Output </h3>
                </legend>
                Name = {name} <br />
                Age = {age} <br />
                Hobbies = { hobbies[0]}, { hobbies[1]}, { hobbies[2]}, { hobbies[3]} <br />
                Data = { userData.uid } <br/>
                DataName = { userData.unm } <br/>
            </fieldset>
            <hr color='green' size='20px' />
        </>
    )
}

export default Comp3;