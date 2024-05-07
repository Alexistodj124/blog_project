

import './App.css'
import Header  from './Components/Header'
import ModifyPost from './Components/Modify/ModifyPost';
import CreatePost from './Components/Create/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/modify-post" element={<ModifyPost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
