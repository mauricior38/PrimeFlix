import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Filme from "./Pages/Filme";
import Header from './components/Header';
import Favoritos from './Pages/Favoritos';
import Erro from './Pages/Erro';

function RoutesApp() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/filme/:id" element={<Filme />} ></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
        
        
        <Route path="*" element={<Erro />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
