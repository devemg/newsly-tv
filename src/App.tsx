import HomePage from './pages/home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="home" element={<HomePage />} />
    <Route path="sports" element={<HomePage />} />
  </Routes>
  );
}

export default App;
