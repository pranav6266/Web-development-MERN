import {Link} from "react-router-dom";

function Dashboard(){
    return(
        <>
            <h1 className='text text-primary'>This is a Dashboard.</h1>
            <Link to='/home'>Home</Link>
        </>
    )
}
export default Dashboard;