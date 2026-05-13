import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import GamesProviders from "./pages/GamesProviders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/games-providers" element={<GamesProviders />} />
      </Routes>
    </BrowserRouter>
  );
}
