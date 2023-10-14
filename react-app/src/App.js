import EditHome from './features/Home/EditHome';
import HomePage from './features/Home/HomePage'
import LoginUser from './features/Login/LoginUser'
import RegisterUser from './features/Registers/RegisterPage/Register-user'
import RegisterCompany from './features/Registers/RegisterPage/Register-company';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-home" element={<EditHome />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-company" element={<RegisterCompany />} />
        </Routes> 
      

    </>
  );
}

export default App;
