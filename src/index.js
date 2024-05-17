import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './features/counter/home/Home';
import Login from './features/counter/Pages/Login';
import Dashboard from './features/counter/Pages/Dashboard';
import ProductDetail from './features/counter/ProductDetail';


const container = document.getElementById('root');
const root = createRoot(container);
const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem("token")
  return token ? children : <Navigate to="/login" />
}
root.render(
 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:5s" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>
  
);


reportWebVitals();
