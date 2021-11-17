import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "";
import "./App.css";

function App() {
  return (
    // Router component
    <Router>
      <div className="app">A
        <Routes>
        <Route path='/welcome' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
