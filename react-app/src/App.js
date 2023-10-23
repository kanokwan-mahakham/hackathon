import React, { useState, useEffect } from "react";
import axios from "axios";
import EditHome from "./features/Home/EditHome";
import HomePage from "./features/Home/HomePage";
import LoginComponent from "./features/Login/LoginUser";
import RegisterUser from "./features/Registers/RegisterPage/Register-user";
import RegisterCompany from "./features/Registers/RegisterPage/Register-company";
import ChoosePage from "./features/Registers/Choose/chooseRegisters";
import ProfileUser from "./features/Profile/ProfileUser";
import ProfileFactory from "./features/Profile/ProfileFactory";
import ProfileAddmin from "./features/Profile/ProfileAddmin";
import ProfileFactoryEdit from "./features/Profile/ProfileFactory/ProfileFactoryEdit";
import PopupAddProductDesigner from "./features/Registers/RegisterPage/popup/product/designer/addproduct"
import EditProfileUser from "./features/Profile/ProfileUser/EditProfileUser";
import PopupAddProductFarbic from "./features/Registers/RegisterPage/popup/product/farbic/addproduct"
import PopupAddProductFactory from "./features/Registers/RegisterPage/popup/product/factory/addproduct"
import { Routes, Route } from "react-router-dom";
import HelpMe from "./features/HelpMe";
import HelpmeFactoryOne from "./features/HelpMe/factory/page1"
import HelpmeFactorythree from "./features/HelpMe/factory/page3"
function App() {

  const url = `http://localhost:3002`
  const [user, setUser] = useState("");
  const [companies, setCompanies] = useState([]);
  const [favs, setFavs] = useState([]);
  const [imageHome, setImageHome] = useState([]);
  const [information,setInformation] = useState([]);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const resCompany = await axios.get(`${url}/users`);
      const resImageHome = await axios.get(`${url}/informations/1`);
      const resCustomerFavs = await axios.get(`${url}/customerFavs`);
      setCompanies(resCompany.data);
      setFavs(resCustomerFavs.data);
      setImageHome(resImageHome.data)
      console.log("seccess");
    }
    getCompanies();
  }, []);

  useEffect(() => {
    async function getInformation() {
      if(typeof user == "object"){
      const res = await axios.get(`${url}/informations/${user.informationId}`)
      const resProducts = await axios.get(`${url}/products`)
      setProducts(resProducts.data)
      setInformation(res.data)
      }
    }
    getInformation();
  }, [user]);

  

  return (
    <>
      {companies.length > 0 ? (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                imageHome={imageHome}
                url={url}
                user={user}
                setUser={setUser}
                companies={companies}
                setFavs={setFavs}
              />
            }
          />
          <Route path="/edit-home" element={<EditHome url={url} user={user} setUser={setUser} companies={companies} />} />
          <Route
            path="/login"
            element={<LoginComponent url={url} setUser={setUser} />}
          />
          <Route
            path="/register-user"
            element={<RegisterUser setUser={setUser} url={url} />}
          />
          <Route
            path="/register-company"
            element={<RegisterCompany setUser={setUser} url={url} />}
          />
          <Route path="/choose-login-page" element={<ChoosePage />} />
          <Route
            path="/profile-user"
            element={
              <ProfileUser user={user} setUser={setUser} url={url} companies={companies} favs={favs} setFavs={setFavs} information={information} />
            }
          />
          <Route
            path="/profile-user-edit"
            element={
              <EditProfileUser user={user} setUser={setUser} url={url} companies={companies} favs={favs} setFavs={setFavs} information={information} setInformation={setInformation} />
            }
          />

          <Route path="/profile-addmin" element={<ProfileAddmin user={user} setUser={setUser} />} />
          <Route path="/profile-company" element={<ProfileFactory user={user} setUser={setUser} url={url} information={information} products={products} setProducts={setProducts} />} />
          <Route path="/edit-profile-company" element={<ProfileFactoryEdit user={user} setUser={setUser} url={url} companies={companies} favs={favs} setFavs={setFavs} information={information} setInformation={setInformation}  products={products} setProducts={setProducts} />}/>
          <Route path="/add-product-desingner" element={<PopupAddProductDesigner url={url} user={user} setProducts={setProducts}/>} />
          <Route path="/add-product-company" element={<PopupAddProductFactory url={url} user={user} setProducts={setProducts} />} />
          <Route path="/add-product-fabric" element={<PopupAddProductFarbic url={url} user={user} setProducts={setProducts} />} />
          <Route path="/HelpmeFactorythree" element={<HelpmeFactorythree/>}></Route>
          
        </Routes>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
}

export default App;
