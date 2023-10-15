import React, { useState, useEffect } from "react";
import axios from "axios";
import EditHome from './features/Home/EditHome';
import HomePage from './features/Home/HomePage'
import LoginComponent from './features/Login/LoginUser'
import RegisterUser from './features/Registers/RegisterPage/Register-user'
import RegisterCompany from './features/Registers/RegisterPage/Register-company';
import ChoosePage from './features/Registers/ChooseRegisters'


import { Routes, Route } from "react-router-dom";

function App() {

  const url = `http://localhost:5000`
  const [user, setUser] = useState("");
  const [companies, setCompanies] = useState([])
  const [fav, setfav] = useState([])

  useEffect(() => {
    async function getCompanies() {
      const response = await axios.get(`${url}/users`);
      setCompanies(response.data)
      console.log('seccess')
    }
    getCompanies();
  }, []);
  

  return (
    <>
    {companies.length > 0 ? (
        <Routes>
          <Route path="/" element={<HomePage url={url} user={user} setUser={setUser} companies={companies} />} />
          <Route path="/edit-home" element={<EditHome />} />
          <Route path="/login" element={<LoginComponent url={url} setUser={setUser} />} />
          <Route path="/register-user" element={<RegisterUser setUser={setUser} url={url} />} />
          <Route path="/register-company" element={<RegisterCompany setUser={setUser} url={url} />} />
          <Route path="/choose-login-page" element={<ChoosePage />} />
        </Routes>
    ) : (
      <div>Loading....</div>
    )}
      

    </>
  );
}

export default App;
