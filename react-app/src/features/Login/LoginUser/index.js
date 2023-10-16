import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Component/Botton";
import InputLoginFields from "../../Component/inputLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const LoginComponent = ({ url, setUser, className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // นำเข้า useNavigate ที่นี่

  async function submit() {

    if (!username || !password ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please fill in all fields',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    try {
      const response = await axios.get(`${url}/users/${username}/${password}`)

      if (response.data.user) {
        console.log('User found:', response.data.user);
        setUser(response.data.user)

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/');
        });

      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'account not found !',
          showConfirmButton: false,
          timer: 2000
        });
        console.error('User not found.');
      }
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'account not found !',
        showConfirmButton: false,
        timer: 2000
      });
      console.error('Internal server error:', error);
    }
  };

  return (
    <div className={className}>
      <>
        <div className="container">
          <div className="left-content">
            <Link to="/" className="previous">
              &#8249;
            </Link>
            <h1>Welcome</h1>
            <p>We are glad to see you back with us</p>

            <InputLoginFields
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                >
                  <path
                    d="M13.5513 17.535H11.9171V15.9007C11.9171 14.5468 10.8195 13.4493 9.46562 13.4493H4.56277C3.20888 13.4493 2.11134 14.5468 2.11134 15.9007V17.535H0.477051V15.9007C0.477051 13.6443 2.30629 11.815 4.56277 11.815H9.46562C11.7221 11.815 13.5513 13.6443 13.5513 15.9007V17.535ZM7.01419 10.1807C4.30642 10.1807 2.11134 7.98562 2.11134 5.27786C2.11134 2.57008 4.30642 0.375 7.01419 0.375C9.72196 0.375 11.9171 2.57008 11.9171 5.27786C11.9171 7.98562 9.72196 10.1807 7.01419 10.1807ZM7.01419 8.54643C8.81934 8.54643 10.2828 7.08304 10.2828 5.27786C10.2828 3.47267 8.81934 2.00929 7.01419 2.00929C5.20901 2.00929 3.74562 3.47267 3.74562 5.27786C3.74562 7.08304 5.20901 8.54643 7.01419 8.54643Z"
                    fill="#1C1C1C"
                  />
                </svg>
              }
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <InputLoginFields
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M3.11134 6.19754V5.3804C3.11134 2.67262 5.30642 0.477539 8.0142 0.477539C10.722 0.477539 12.9171 2.67262 12.9171 5.3804V6.19754H14.5513C15.0026 6.19754 15.3685 6.56339 15.3685 7.01468V16.8204C15.3685 17.2717 15.0026 17.6375 14.5513 17.6375H1.47706C1.02576 17.6375 0.659912 17.2717 0.659912 16.8204V7.01468C0.659912 6.56339 1.02576 6.19754 1.47706 6.19754H3.11134ZM13.7342 7.83182H2.2942V16.0033H13.7342V7.83182ZM7.19706 12.516C6.70857 12.2334 6.37991 11.7053 6.37991 11.1004C6.37991 10.1978 7.11158 9.46611 8.0142 9.46611C8.91681 9.46611 9.64848 10.1978 9.64848 11.1004C9.64848 11.7053 9.31983 12.2334 8.83134 12.516V14.369H7.19706V12.516ZM4.74563 6.19754H11.2828V5.3804C11.2828 3.57521 9.81935 2.11182 8.0142 2.11182C6.20901 2.11182 4.74563 3.57521 4.74563 5.3804V6.19754Z"
                    fill="#1C1C1C"
                  />
                </svg>
              }
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Button text="LOGIN" onClick={submit} />

            <div className="additional-text">
              <div className="text1">don’t have account?</div>
              <Link to="/choose-login-page" className="text2">
                Register
              </Link>
            </div>
          </div>
          <div className="right-content">
            <div className="right-img"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default styled(LoginComponent)`
  background-color: #f9f8ee;

  .container {
    width: 1110px;
    height: 550px;
    background-color: #ffffff;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    padding-top: 50px;
    margin-top: 70px;
    margin-left: 150px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 120px;
    font-weight: bold;
    margin: 5px;
    text-align: center;
    padding-top: 40px;
  }
  p {
    padding-left: 130px;
    padding-bottom: 10px;
    font-size: 14.55px;
    margin: 15px;
  }
  .group-underline {
    display: flex;
    justify-content: center;
  }

  .underline {
    width: 130.375px;
    height: 1.444px;
    background: #000;
  }
  .underline2 {
    width: 194.375px;
    height: 1.444px;
    background: #dbdbdb;
  }

  .button {
    display: flex;
    width: 288.75px;
    padding: 8.663px 5.775px;
    justify-content: center;
    align-items: center;
    gap: 5.775px;
    background: #141415;
    border-radius: 8.663px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 65px;
  }
  .button-text {
    color: #fff;
    text-align: center;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }
  .text-under-button {
    margin-top: 20px;
  }
  .previous {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
    margin-left:0px;
}


  .previous:hover {
    background-color: #ddd;
    color: black;
  }

  .right-content {
    width: 465.663px;
    height: 512px;
    border-radius: 40px;
    background: url("https://happiestcamper.com/wp-content/uploads/2020/09/DSC03551.jpg") -228.551px -176.433px /
      150.681% 182.082% no-repeat;
    flex-shrink: 0;
  }
  .additional-text {
    font-size: 11.55px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .text1 {
    margin-right: 5px;
    color: #807d7d;
  }
`;
