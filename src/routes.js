import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Informacao from "./pages/Informacao/Informacao";
import Registrar from "./pages/Registrar/Registrar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Criacao from './pages/CriacaoViagem/CriacaoViagem'
import Viagem from './pages/Viagens/Viagens'


const RoutesHtml = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route  default path="/" element={<Informacao />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registrar" element={<Registrar />} ></Route>
            <Route path="/trip/:tripId" element={<Home />}></Route>
            <Route path="/trip/create" element={<Criacao />}></Route>
            <Route path="/trips" element={<Viagem />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesHtml;
