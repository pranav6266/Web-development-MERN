function Comp11(){
   let userData = [
       {
           uid : 1001,
           unm : "Pranav",
           age : 45
       },
       {
           uid : 1002,
           unm : "Pranav",
           age : 45
       },
       {
           uid : 1003,
           unm : "Pranav",
           age : 45
       },
       {
           uid : 1004,
           unm : "Pranav",
           age : 45
       },
       {
           uid : 1005,
           unm : "Pranav",
           age : 45
       },
       {
           uid : 1006,
           unm : "Pranav",
           age : 45
       }
   ]

    return(
        <>
            <table className="table table-bordered table-striped w-50 mx-auto mt-4 text-center">
                <thead className="table-dark">
                <tr>
                    <td>User ID</td>
                    <td>User Name</td>
                    <td>User Age</td>
                </tr>
                </thead>
                <tbody>

            {
                userData.map( (user) =>
                    (
                        <tr>
                            <td>{user.uid}</td>
                            <td>{user.unm}</td>
                            <td>{user.age}</td>
                        </tr>

                    ))
            }
                </tbody>
            </table>
        </>
    )
}
export default Comp11;