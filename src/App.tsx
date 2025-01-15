import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import HooksPage from "./pages/Hooks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hooks" element={<HooksPage />} />
    </Routes>
  );
}

export default App;
