

import './App.css'
import Header  from './Components/Header'
import ModifyPost from './Components/Modify/ModifyPost';
import CreatePost from './Components/Create/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/modify-post" element={localStorage.getItem("autenticado")==="true"?<ModifyPost/>:<Login />} />
        <Route path="/create-post" element={localStorage.getItem("autenticado")==="true"?<CreatePost/>:<Login/>} />
        <Route path="/header" element={localStorage.getItem("autenticado")==="true"?<Header/>:<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
