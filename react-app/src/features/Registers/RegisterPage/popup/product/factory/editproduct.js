
import React from 'react';
import InputRegField from '../../../../../Component/input';
import Button from '../../../../../../features/Component/Botton';
import styled from 'styled-components';

const edit = require("../../../../../image Hackathon/icon/edit.png");
const Backgroud = styled.div`
background-color: rgba(198, 204, 215, 0.7);
display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;
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
    margin-left:0px;
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

const StyleContainer =styled.div`
.container {
    width: 870px;
    height: 570px;
    background-color: #FFFFFF;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    padding-top: px;
    margin-top: 0px;
    margin-left: 20px;
    border: 2px solid #000;
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


const StyleRightimg = styled.div`.right-image {
    width: 465.663px;
    height: 512px;
    border-radius: 40px;
    margin-top: 10px;
    background: url('https://i.pinimg.com/564x/cb/e6/1c/cbe61cf8f0e9511547aad553571bae5c.jpg') -228.551px -176.433px / 150.681% 182.082% no-repeat;
    flex-shrink: 0;
}`

const StyleRightimg2 = styled.div`.right-image2 {
    width: 50px;
    height: 52px;
    margin-top: 220px;
    margin-left: 200px;
    flex-shrink: 0;
}`



const Styledh1 = styled.div`
h1 {
    font-size: 43px;
    font-weight: bold;
    margin-top: 60px;
    text-align: center;

}
`
const StyleIcon = styled.div`
.far fa-edit{
    font-size:36px;
}`;

const PopupEditProductFactory = () => {
    return (
        <Backgroud>
        <StyleContainer>
        <div className="container">
            <div className="left-content">
                <Styleprevious>
                <div href="#" className="previous"> &#8249;</div></Styleprevious>
                    <Styledh1><h1>Add Product</h1></Styledh1>
                    <InputRegField placeholder="detail" type="text"/>
                    <InputRegField placeholder="price" type="text"/>
                    <InputRegField placeholder="category" type="text"/>

                    <StyledBotton>
                        <Button text="Continue" />
                    </StyledBotton>
            </div>
            <StyleRightimg>   
            <div className="right-image">
                    <div className="right-img"></div>
                    <StyleRightimg2><img src={edit} className="right-image2"></img></StyleRightimg2>
                </div>
            </StyleRightimg>
        </div>
        </StyleContainer>
        </Backgroud>
        
    );
};

export default  PopupEditProductFactory    




; 