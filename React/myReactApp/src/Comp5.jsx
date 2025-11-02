// Conditional rendering ( Type 1 / 3 )


function Comp5(){
    let isValid = true
    if(isValid){
        return <Valid/>
    }
    else{
        return  <Invalid/>
    }

    function Valid(){
        return(
            <h1>Valid User</h1>
        )
    }

    function Invalid(){
        return(
            <h1>Invalid User</h1>
        )
    }
}

export default Comp5;