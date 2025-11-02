// Event handling Implementation

function myfun(){
    console.log("Myfun calling......");
}
function myfun2(name){
    console.log(`Welcome ${name}`);
}

function myfun3(e){
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.textContent)
    // e.target.textContent = "Byeee";
    // e.target.style.color = "red";

}
function Comp12(){
    return(
        <>
            <h2 className="text-center"> Event Demo Component </h2>


            {/*Normal Function Calling*/}
            <button onClick={myfun} style={{padding : "5px", margin : "20px"}} className="btn btn-primary"> Button </button>


            {/*With Parameters (Anonymous function is compulsory, otherwise function is called recursively.)*/}
            <button onClick={() => myfun2("Sam")} style={{padding : "5px", margin : "20px"}} className="btn btn-secondary"> Button </button>


            {/*This is to return the EVENT itself.*/}
            <button onClick={(e) => myfun3(e)} style={{padding : "5px", margin : "20px"}} className="btn btn-danger"> Button </button>
        </>
    )
}

export default Comp12;