import EditHome from './features/Home/EditHome';
import HomePage from './features/Home/HomePage'
import LoginUser from './features/Login/LoginUser'
import RegisterUser from './features/Registers/RegisterPage/Register-user'
import RegisterCompany from './features/Registers/RegisterPage/Register-company';
import { Routes, Route } from "react-router-dom";

import PopupAddProductDesigner from "./features/Registers/RegisterPage/popup/product/designer/addproduct"
import PopupEditProductDesigner from './features/Registers/RegisterPage/popup/product/designer/editproduct';
import PopupPayment from './features/Payment/popupPayment';
import ChooseProducts from './features/Registers/Choose/chooseProduct'
import PopupProductSucces from './features/Registers/RegisterPage/popup/product/popupProductSucces';
import CheackPayment from './features/Payment/checkPayment';
import CheckData from './features/Registers/RegisterPage/popup/checkData';
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

        {/* <PopupProductSucces/>
         <PopupAddProductDesigner/>
         <PopupEditProductDesigner/>
         <PopupPayment/>
         <ChooseProducts/>
        <CheackPayment/>
         <CheckData/> */}


    </>
  );
}

export default App;
