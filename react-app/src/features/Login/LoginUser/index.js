import React from 'react';
import './Login.css';
import Button from '../../Component/Botton';
import InputFields from '../../Component/inputLogin';
import PreviousButton from '../../Component/previousbttn';

const LoginComponent = () => {
        const handleButtonClick = () => {
            // action you want when the button is clicked
            console.log('Button clicked');
        };
    
    return (
        <>
        <div className="container">
            <div className="left-content">
            <PreviousButton href="https://example.com" />
                    <h1>Welcome</h1>
                    <p>We are glad to see you back with us</p>

                    <InputFields placeholder="Username" /> 
                    <InputFields placeholder="Password" /> 

                    <Button text="ENTER" onClick={handleButtonClick} />

                        <div className='additional-text'>

                            <div className="text1">don’t have account?</div>
                            <div href="#" class="text2">Log in</div>
                            
                        </div>
            </div>
                <div className="right-content">
                    <div className="right-img"></div>
                </div>
        </div>
        </>
    );
};

export default LoginComponent;
