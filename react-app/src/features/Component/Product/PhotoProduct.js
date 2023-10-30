import styled from "styled-components";

const PhotoProduct = ({information, className}) => {
    
    const image = require("../../../image Hackathon/image/background.jpeg");

    return(
        <div className={className}>
            <div className="photo-product">
                    <img src={information.image1}/>
                    <img src={information.image2}/>
                    <img src={information.image3}/>
                    <img src={information.image4}/>
                    <img src={information.image5}/>
                    <img src={information.image6}/>
                </div>
        </div>
    );
};
export default styled(PhotoProduct)`
.photo-product{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.photo-product img{
    width: 400px;
    height: 500px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
}`