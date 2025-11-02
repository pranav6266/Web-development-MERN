function ShowData(props){
    console.log(props)
    return(
        <>
            <p className="alert alert-primary mx-auto text-center ">
                { props.user.uid } | { props.user.unm } | { props.user.email }
            </p>
        </>
    )
}

export default ShowData;