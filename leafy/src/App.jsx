import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Slide from "./Components/Slide";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import "flowbite";

const Home = () => {
  return (
    <>
      <Search />
      <Slide />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
