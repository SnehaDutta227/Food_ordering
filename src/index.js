import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from  'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import About from './page/About';
import Menu from './page/Menu';
import Contact from './page/Contact';
import header from './Component/Header';
import NewProduct from './page/NewProduct';
import Login from './page/Login';
import Signup from './page/Signup';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path='about' element= {<About />} />
            <Route path='contact' element = {<Contact />} />
            <Route path='newproduct' element={<NewProduct />} />
            <Route path='login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
            </Route>
            
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider
      router={router}
      
    />
  );