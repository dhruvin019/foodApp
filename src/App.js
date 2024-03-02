// PS C:\Users\Virpara Dhruvin\.vscode\Backend\NodeJs\PizzaApp2\server> npm run dev

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Home from "./components/Home";
import Policy from "./components/Policy";
import Contact from "./components/ContactPage";
import NavBar from "./components/NavBar";
import CartScreen from "./components/CartScreen";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
