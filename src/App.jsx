import { useState, useContext, useEffect, React } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { OnCallSpecialist } from "./components/OnCallSpecialist";
import { AbmProffesional } from "./components/AbmProffesional";
import { Phonebook } from "./components/Phonebook";
import { InternalNumbers } from "./components/InternalNumbers";
import { Login } from "./components/Login";
import { UserProvider, UserContext } from "./context/UserContext";

function App() {
  const [userLogged, setUserLogged] = useState(null);

  
  console.log(userLogged, "esto es userlogged en app");

  return (
    <>
      <UserProvider>
        <Router>
          <h1>Grupo Gamma App</h1>
          {userLogged && <Navbar />}
          {!userLogged ? (
            <Login userLogged={userLogged} setUserLogged={setUserLogged} />
          ) : (
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/oncall" element={<OnCallSpecialist />} />
              <Route path="/abm" element={<AbmProffesional />} />
              <Route path="/phonebook" element={<Phonebook />} />
              <Route path="/internalnumbers" element={<InternalNumbers />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          )}
        </Router>
      </UserProvider>
    </>
  );
}

export default App;