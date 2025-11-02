// I want to show the array as unordered list.

function Comp9(){
    let fruits = ["Apple", "Mango", "Banana", "Grapes", "Guava"]
    let eles = []

    for(let ele of fruits){
        eles.push(<li>{ele}</li>)
    }
    return(
        <>
             <ul>{eles}</ul>
        </>
    )
}

export default Comp9;