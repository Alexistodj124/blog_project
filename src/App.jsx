// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

// const LazyLogin = lazy(() => import('./Login'));
// const LazyModifyPost = lazy(() => import('./Components/Modify/ModifyPost'));
// const LazyCreatePost = lazy(() => import('./Components/Create/CreatePost'));
// const LazyHeader = lazy(() => import('./Components/Header'));


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LazyLogin />} />
//         <Route path="/modify-post" element={localStorage.getItem("autenticado")==="true"?<LazyModifyPost/>:<LazyLogin />} />
//         <Route path="/create-post" element={localStorage.getItem("autenticado")==="true"?<LazyCreatePost/>:<LazyLogin/>} />
//         <Route path="/header" element={localStorage.getItem("autenticado")==="true"?<LazyHeader/>:<LazyLogin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import Router from './Router'; // Import your Router component
import './App.css';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
