import React from 'react';
import './Login.css';

const LoginComponent = () => {
    return (
        <>
        <div className="container">

            <div className="left-content">
                <div href="#" class="previous">&#8249;</div>
                    <h1>Welcome</h1>
                    <p>We are glad to see you back with us</p>

                    <div className="input-container">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                            <path d="M13.5513 17.535H11.9171V15.9007C11.9171 14.5468 10.8195 13.4493 9.46562 13.4493H4.56277C3.20888 13.4493 2.11134 14.5468 2.11134 15.9007V17.535H0.477051V15.9007C0.477051 13.6443 2.30629 11.815 4.56277 11.815H9.46562C11.7221 11.815 13.5513 13.6443 13.5513 15.9007V17.535ZM7.01419 10.1807C4.30642 10.1807 2.11134 7.98562 2.11134 5.27786C2.11134 2.57008 4.30642 0.375 7.01419 0.375C9.72196 0.375 11.9171 2.57008 11.9171 5.27786C11.9171 7.98562 9.72196 10.1807 7.01419 10.1807ZM7.01419 8.54643C8.81934 8.54643 10.2828 7.08304 10.2828 5.27786C10.2828 3.47267 8.81934 2.00929 7.01419 2.00929C5.20901 2.00929 3.74562 3.47267 3.74562 5.27786C3.74562 7.08304 5.20901 8.54643 7.01419 8.54643Z" fill="#1C1C1C"/>
                        </svg>
                    </div>
                        
                        <input type="text" placeholder="Username" />
                        
                    </div>

                    <div className="input-container">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M5.11134 7.19754V6.3804C5.11134 3.67262 7.30642 1.47754 10.0142 1.47754C12.722 1.47754 14.9171 3.67262 14.9171 6.3804V7.19754H16.5513C17.0026 7.19754 17.3685 7.56339 17.3685 8.01468V17.8204C17.3685 18.2717 17.0026 18.6375 16.5513 18.6375H3.47706C3.02576 18.6375 2.65991 18.2717 2.65991 17.8204V8.01468C2.65991 7.56339 3.02576 7.19754 3.47706 7.19754H5.11134ZM15.7342 8.83182H4.2942V17.0033H15.7342V8.83182ZM9.19706 13.516C8.70857 13.2334 8.37991 12.7053 8.37991 12.1004C8.37991 11.1978 9.11158 10.4661 10.0142 10.4661C10.9168 10.4661 11.6485 11.1978 11.6485 12.1004C11.6485 12.7053 11.3198 13.2334 10.8313 13.516V15.369H9.19706V13.516ZM6.74563 7.19754H13.2828V6.3804C13.2828 4.57521 11.8193 3.11182 10.0142 3.11182C8.20901 3.11182 6.74563 4.57521 6.74563 6.3804V7.19754Z" fill="#1C1C1C"/>
                        </svg>
                    </div>
                        <input type="text" placeholder="Password Input" />
                        
                    </div>

                    <div className="button">
                        <span className="button-text">ENTER</span>
                    </div>

                    <div className='additional-text'>
                        <div className="text1">don’t have account?</div>
                        <div href="#" class="text2">Log in</div>
                    </div>
            </div>
                <div className="right-image">
                    <div className="right-img"></div>
                </div>
        </div>
        </>
    );
};

export default LoginComponent;
