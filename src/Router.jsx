import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Header';
import Login from './Login';
// import Logout from '@pages/Logout';
import Home from './Components/Posts/PostList';
import LazyModifyPost from './Components/Modify/ModifyPost';
import LazyCreatePost from './Components/Create/CreatePost';
import LazyHeader from './Components/Header';

const routes = {
  '/header': {
    component: Home,
    requiresAuth: "false"
  },
  '/login': {
    component: Login,
    requiresAuth: "false"
  },
  '/modify-post': {
    component: LazyModifyPost,
    requiresAuth: "true"
  },
  '/create-post': {
    component: LazyCreatePost,
    requiresAuth: "true"
  },
//   '/logout': {
//     component: Logout,
//     requiresAuth: false
//   },
  
}

function Router() {
  const autenticado = localStorage.getItem("autenticado");
  const page = window.location.pathname;
  const requires = routes[page].requiresAuth
  console.log(autenticado);
  console.log(requires);
  const req = requires != autenticado;
  console.log("nesetio", req);
  console.log(autenticado && !requires)
  if (routes[page]) {
      const CurrentPage = routes[page].component;
      return (
        <div>
          <Nav />
          <div className="container mt-3">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <Suspense fallback={<div>Loading...</div>}>
                <CurrentPage />
              </Suspense>
            </div>
          </div>
        </div>
      );
    }

  if (page === "/logout") {
    window.location.replace("/login");
  }

  return <h1>404 Página no encontrada 🥲</h1>;
}

export default Router;
