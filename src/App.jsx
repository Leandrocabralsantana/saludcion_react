import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { OnCallSpecialist } from "./components/OnCallSpecialist";
import { AbmProffesional } from "./components/AbmProffesional";
import { Phonebook } from "./components/Phonebook";
import { InternalNumbers } from "./components/InternalNumbers";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <Router>
        <h1>La aplicacion de HPR</h1>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/oncall" element={<OnCallSpecialist />} />
          <Route path="/abm" element={<AbmProffesional />} />
          <Route path="/phonebook" element={<Phonebook />} />
          <Route path="/internalnumbers" element={<InternalNumbers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
