import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import AddUser from "./pages/AddUser.jsx";
import ViewUser from "./pages/ViewUser.jsx";
import MyNav from "./components/MyNav.jsx";

function App() {


  return (
    <>
        <MyNav/>
        <Routes>
            <Route path='/dash' element={ <Dashboard/> }/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/view' element={<ViewUser/>}/>
        </Routes>
    </>
  )
}

export default App;
