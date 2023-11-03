import React, { useState } from "react";
import InputField from "../../../Component/input";
import Button from "../../../Component/Botton";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Backgroud = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #141415;
  width: 288.75px;
  padding: 8.663px 5.775px;
  border-radius: 8.663px;
  cursor: pointer;
  margin-top: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Stylep = styled.div`
  margin: 10px;
  font-size: 17.55px;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 1110px;
  background-color: #ffffff;
  border-radius: 54px;
  padding: 30px;
  padding-top: 20px;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
`;

const Styleprevious = styled.div`
  .previous {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
  }
  .previous:hover {
    background-color: #ddd;
    color: black;
  }
`;

const StyledGroupline = styled.div`
  .group-underline {
    display: flex;
    justify-content: center;
  }
`;

const Styleline1 = styled.div`
  .underline {
    width: 50%;
    height: 1.444px;
    background: #000;
  }
`;

const Styleline2 = styled.div`
  .underline2 {
    width: 50%;
    height: 1.444px;
    background: #dbdbdb;
  }
`;

const StyleAddtext = styled.div`
  .additional-text {
    font-size: 13.55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

const Styledtext1 = styled.div`
  .text1 {
    color: #807d7d;
  }
`;

const Styledh1 = styled.div`
  h1 {
    font-size: 43px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: your-desired-color; // Specify your desired text color here
  // Add other CSS styles if needed
`;

const RegisterUser = ({ companies,setUser, url, className }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const navigate = useNavigate();

  async function submit() {
    if (!username || !email || !password || !comfirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill in all fields",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    if (password !== comfirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwords do not match",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    if (!email.includes("@")) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid email format",
        text: 'Email must contain "@"',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {

      const findUser = companies.find(
        (user) => user.email == email || user.username == username
      );

      if (findUser) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid email format",
            text: 'Duplicate email or username',
            showConfirmButton: false,
            timer: 2000,
          });
          
      } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
        status: "customer",
      };

      const response1 = await axios.post(`${url}/informations`, "");
      const response = await axios.post(`${url}/users`, {
        ...newUser,
        informationId: response1.data.id,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/login");
      });
      console.log("User registered successfully", response.data);
    }
    } catch (error) {
      console.error(`Register error : ${error}`);
    }
  }

  return (
    <Backgroud>
      <StyledContainer>
        <div className="container">
          <div className="left-content">
            <Styleprevious>
              <Link to="/choose-login-page" className="previous">
                &#8249;
              </Link>
            </Styleprevious>

            <Styledh1>
              <h1>Create account</h1>
            </Styledh1>

            <Stylep>
              <p>ผู้ใช้งาน</p>
            </Stylep>

            <StyledGroupline>
              <div className="group-underline">
                <Styleline1>
                  <div className="underline"></div>
                </Styleline1>
                <Styleline2>
                  <div className="underline2"></div>
                </Styleline2>
              </div>
            </StyledGroupline>

            <InputField
              placeholder="Enter your email"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <InputField
              placeholder="Create password"
              type="password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z"
                    fill="#828C97"
                  />
                  <path
                    d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z"
                    fill="#828C97"
                  />
                </svg>
              }
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <InputField
              placeholder="Confirm password"
              type="password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z"
                    fill="#828C97"
                  />
                  <path
                    d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z"
                    fill="#828C97"
                  />
                </svg>
              }
              onChange={(event) => {
                setComfirmPassword(event.target.value);
              }}
            />

            <InputField
              placeholder="Username"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <StyledButtonContainer>
              <StyledButton>
                <Button text="Continue" onClick={submit} />
              </StyledButton>
            </StyledButtonContainer>

            <StyleAddtext>
              <div className="additional-text">
                <Styledtext1>
                  <div className="text1">มีบัญชีอยู่แล้ว</div>{" "}
                </Styledtext1>
                <StyledLink to="/login" className="text2">
                   เข้าสู่ระบบ
                </StyledLink>
              </div>
            </StyleAddtext>
          </div>
        </div>
      </StyledContainer>
    </Backgroud>
  );
};

export default RegisterUser;
