import styled from "styled-components";

const PhotoProduct = ({className}) => {
    
    const image = require("../../../image Hackathon/image/background.jpeg");

    return(
        <div className={className}>
            <div className="photo-product">
                    <img src={image}/>
                    <img src={image}/>
                    <img src={image}/>
                    <img src={image}/>
                    <img src={image}/>
                    <img src={image}/>
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
    width: 420px;
    height: 500px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
}`