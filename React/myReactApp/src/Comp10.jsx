// Method 2 of printing arrays as unordered list.
// forEach does not return an array. So, it will not render anything.
function Comp10(){
    let fruits = ["Apple", "Mango", "Banana", "Grapes", "Guava"]
    let eles = []

    return(
        <>
            {/*{ fruits.forEach(fruit => (*/}
            {/*    <h4>{fruit}</h4>*/}
            {/*) */}
            {/*)}*/}

            { fruits.map(fruit => (
                <ul>
                    <li><h4>{fruit}</h4></li>
                </ul>
            ))}
        </>
    )
}

export default Comp10;