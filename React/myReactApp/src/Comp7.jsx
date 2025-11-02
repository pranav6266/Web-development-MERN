// Conditional rendering ( Type 2/ 3 )
// Using logical and ( && )

function Comp7(){
    let fruits = ["Banana","Apple"];

    return(
        <>
            {
                fruits.length > 0 &&
                <h3>
                    Available Fruits are : {fruits}
                </h3>
            }
        </>
    )
}

export default Comp7;