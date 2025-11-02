// Conditional rendering ( Type 3/ 3 )
// Using Ternary Operator

function CompA(){
    return(
        <h1>Valid</h1>
    )
}

function CompB(){
    return(
        <h1>Invalid</h1>
    )
}

function Comp8(){
    let isValid = false
    return(
        <>
            { isValid ? <CompA/> : <CompB/> }
        </>
    )
}

export default Comp8;