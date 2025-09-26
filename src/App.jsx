import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* All sections (Hero, About, Services, Works, etc.) are inside Home Here we are just making it a route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
