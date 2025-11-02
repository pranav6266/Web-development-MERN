function Comp14(props){
    console.log(props);
    return(
        <>
            <h1 align="center">Component 14</h1>
            <h3> Welcome {props.name}</h3>
            <h3> Your age is {props.age}</h3>
        </>
    )
}

export default Comp14;