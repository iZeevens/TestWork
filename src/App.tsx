import { Routes, Route } from "react-router";
import HomePage from "./pages/Home/Home";
import GamePage from "./pages/Game/Game";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
