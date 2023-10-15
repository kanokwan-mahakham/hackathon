
import React from 'react';
import InputRegField from '../../../../../Component/input';
import Button from '../../../../../../features/Component/Botton';
import styled from 'styled-components';

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
    margin-top: 100px;
}`


const Styledh1 = styled.div`
h1 {
    font-size: 43px;
    font-weight: bold;
    margin-top: 60px;
    text-align: center;

}
`

const PopupAddProductDesigner = () => {
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
                <div className='right-image '>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-2 pb-3">
                            <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                        <p class="mb-1 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>

                </div>
            </StyleRightimg>
        </div>
        </StyleContainer>
        </Backgroud>
        
    );
};

export default  PopupAddProductDesigner




; 