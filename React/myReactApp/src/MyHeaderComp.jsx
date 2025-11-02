function MyHeaderComp(props){
    return(
        <>
            <hr style={{ height: "3px", backgroundColor: "navy"}}/>
            <h1 align="center">Component {props.num}</h1>
            <hr style={{ height: "3px", backgroundColor: "navy"}}/>
        </>
    )
}

export default MyHeaderComp;