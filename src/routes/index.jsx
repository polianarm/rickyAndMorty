import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Personagem from "../pages/Personagem";

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagem/:id" element={<Personagem />} />
      </Routes>
    </BrowserRouter>
  );
}
