import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Doacao from "../pages/Doaçao";
import Voluntariado from "../pages/voluntariado";
import Mentoria from "../pages/Mentoria";
import EventosPalestras from "../pages/EventosPalestras";
import Perfil from "../pages/Perfil";


export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/eventos-palestras" element={<EventosPalestras />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
