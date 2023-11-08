import TopBar from "./componets/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SinglePosts from "./componets/singlePosts/SinglePosts";


function App() {

  const user = false;

  return (
    <Router>
    <TopBar/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/write" element={user ? <Write/> : <Register/>}/>
      <Route path="/setting" element={user ? <Setting/> : <Register/>}/>
      <Route path="/posts/:id" element={<SinglePosts/>} />
    
      
    </Routes>

  </Router>

  ); 
}

export default App;
