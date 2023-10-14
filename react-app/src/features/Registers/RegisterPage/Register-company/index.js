import React from 'react';
import Button from '../../../Component/Botton';
import InputRegField from '../../../Component/inputReg';
import styled from 'styled-components';

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

const RegisterCompany = () => {
    return (
        
            <div className="container">
                <div className="left-content">
                    <div href="#" className="previous">&#8249;</div>
                    <h1>Create account</h1>
                    <Stylep>
                    <p>ผู้ประกอบการ</p>
                    </Stylep>
                    <div className='group-underline'>
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <InputRegField placeholder="Enter your email" type="text"/>
                    <InputRegField placeholder="Create password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>} />

                            <InputRegField placeholder="Confirm password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>} />

                    <InputRegField placeholder="Username" type="text"/>

                    <div className="input-container2">
                    <div className='textinput'>ประเภทธุรกิจ</div>
                    <select>
                        <option value="option1">frabic shop</option>
                        <option value="option2">company</option>
                        <option value="option3">designer</option>
                    </select>
                </div>
                    <InputRegField placeholder="ทะเบียนนิติบุคคลเลขที่" type="text"/>

                    <InputRegField placeholder="ที่อยู่" type="text"/>

                    <div className="input-container2">
                        <div className='textinput'>สำเนารับรองหนังสือทะเบียนนิติบุคคล</div>
                        <input
                            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="small_size"
                            type="file"
                        />
                        
                    </div>

                    <StyledBotton>
                    <Button text="Continue" />
                    </StyledBotton>
                    <div className='additional-text'>
                        <div className="text1">already have accoaccount ?</div> 
                        <div href="#" class="text2">Sign in;</div>
                    </div>
            </div>
                <div className="right-image">
                    <div className="right-img"></div>
                </div>
        </div>
    );
};


export default RegisterCompany;