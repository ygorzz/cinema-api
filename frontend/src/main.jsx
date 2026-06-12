import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/index.jsx";
import Filmes from "./routes/Filmes.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Diretores from "./routes/Diretores.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/filmes"/>} />
        <Route path="/filmes" element={<Filmes />}/>
        <Route path="/diretores" element={<Diretores />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);