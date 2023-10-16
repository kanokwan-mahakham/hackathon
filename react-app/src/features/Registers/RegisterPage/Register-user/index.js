import React, { useState } from "react";
import InputField from '../../../Component/input';
import Button from '../../../Component/Botton';
import styled from 'styled-components';
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const Backgroud = styled.div`
background-color: #F9F8EE;`;
const StyledBotton = styled.div`
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
    margin-left:40px;
}
.button-text {
    color: #FFF;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 13px;    
    font-weight: 700;
    line-height: 17.325px;
}
`;
const Stylep = styled.div`

    margin: 10px;
    padding-left: 70px;
    font-size: 11.55px;
    
`
const StyleContainer =styled.div`
.container {
    width: 1110px;
    height: 770px;
    background-color: #FFFFFF;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    padding-top: px;
    margin-top: px;
    margin-left: 150px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);
}
`

const Styleprevious = styled.div`
.previous{
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
}

.previous:hover{
    background-color: #ddd;
    color: black;
}
`
const Styledinput= styled.div` 

.input-container2 {
    display: flex;
    height: 34.65px;
    padding: 5.775px 8.663px;
    align-items: center;
    gap: 10.425px;
    border-radius: 8.663px;
    border: 0.722px solid #DBDBDB;
    margin-top: 5px;
}

.input-container2 input {
    color: #807D7D;
    font-family: 'Open Sans';
    font-size: 11.55px;
    font-weight: 400;
    line-height: 17.325px;
    border: none;
    outline: none;
}


`
const StyledSelect = styled.div`
.select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none; 
}

.select:hover {
    border-color: #666;
}

.select:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 5px rgba(77, 77, 77, 0.5);
}

.select::after {
    content: '\25BC'; /* Down arrow character */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #777;
    pointer-events: none;
}
`

const Styledtextinput =styled.div`
.textinput{
    color: #807D7D;
    font-family: 'Open Sans';
    font-size: 11.55px;
    font-weight: 400;
    line-height: 11.325px;
    border: none;
    outline: none;
}
`
const StyleRightimg = styled.div`.right-image {
    width: 465.663px;
    height: 512px;
    border-radius: 40px;
    margin-top: 100px;
    background: url('https://i.pinimg.com/564x/cb/e6/1c/cbe61cf8f0e9511547aad553571bae5c.jpg') -228.551px -176.433px / 150.681% 182.082% no-repeat;
    flex-shrink: 0;
}`

const StyledGroupline = styled.div`
.group-underline{
    display: flex;
    justify-content: center
}`
const Styleline1 = styled.div `
.underline {
    width: 130.375px;
    height: 1.444px;
    background: #000;
}
`

const Styleline2 = styled.div `

.underline2 {
    width: 194.375px;
    height: 1.444px;
    background: #DBDBDB;
}`

const StyleAddtext = styled.div`
.additional-text{
    font-size: 11.55px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
`

const Styledtext1 = styled.div`
.text1{
    margin-right: 5px;
    color: #807D7D;
}`

const Styledh1 = styled.div`
h1 {
    font-size: 43px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
}
`


const RegisterUser = ({setUser,url,className}) => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmPassword, setComfirmPassword] = useState("")
    const navigate = useNavigate();

    async function submit(){

        if (!username || !email || !password || !comfirmPassword ) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Please fill in all fields',
              showConfirmButton: false,
              timer: 2000
            });
            return;
          }

          if (password !== comfirmPassword) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Passwords do not match',
              showConfirmButton: false,
              timer: 2000
            });
            return;
          }

        try{
        const newUser = {
            username:username,
            email:email,
            password:password,
            status:"customer"
          };
          
        const response = await axios.post(`${url}/users`,newUser);
        

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/login');
          });
          console.log("User registered successfully", response.data);

        }catch(error){
            console.error(`Register error : ${error}`)
        }

    }



    return (
        <Backgroud>
        <StyleContainer>
        <div className="container">
            <div className="left-content">
            

                <Styleprevious>
                <Link to="/choose-login-page" className="previous">&#8249;</Link>
                </Styleprevious>

                    <Styledh1><h1>Create account</h1></Styledh1>
                    
                    <Stylep>
                    <p>ผู้ใช้งาน</p>
                    </Stylep>

                    <StyledGroupline>
                    <div className='group-underline'>
                        <Styleline1>
                        <div className="underline"></div>
                        </Styleline1>
                        <Styleline2>
                        <div className="underline2"></div>
                        </Styleline2>
                    </div>
                    </StyledGroupline>

                    <InputField placeholder="Enter your email" type="text" onChange={(event) => {setEmail(event.target.value);}}/>

                            <InputField placeholder="Create password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>} onChange={(event) => {setPassword(event.target.value);}} />

                            <InputField placeholder="Confirm password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>}  onChange={(event) => {setComfirmPassword(event.target.value);}}/>


                            <InputField placeholder="Username" type="text" onChange={(event) => {setUsername(event.target.value);}}/>

                           
                    <StyledBotton>
                    <Button text="Continue" onClick={submit} />
                    </StyledBotton>

                    <StyleAddtext>
                    <div className='additional-text'>

                        <Styledtext1>
                        <div className="text1">already have accoaccount ?</div> </Styledtext1>
                        <Link to="/login" className="text2">Sign in</Link>
                    </div>
                    </StyleAddtext>
            </div>
            <StyleRightimg>
                <div className="right-image">
                    <div className="right-img"></div>
                </div>
            </StyleRightimg>
        </div>
        </StyleContainer>
        </Backgroud>
        
    );
};

export default RegisterUser;