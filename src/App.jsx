import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addData" element={<Register />} exact />
          <Route path="/editData/:id" element={<Edit />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
