
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom'; 
import backgroundImage from '../../../image Hackathon/image/bg.png'; 
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  margin-top:20px;
  width: 90%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

const HelpmeDesignTwo = ({ filterProduct, setFilterProduct,className }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [sliderValue, setSliderValue] = useState(1000);

    const navigate = useNavigate();

    function filter(){
        const finds = filterProduct.filter((find)=>find.price <= sliderValue)
        setFilterProduct(finds)
        navigate('/filter-designer');
    }
   

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const filterDropdown = (e) => {
        const text = e.target.value;
        setFilterText(text);
        filterItems(text);
    };

    const filterItems = (text) => {
        const items = ["Cow", "Cat", "Dog", "Giraffe", "Lion", "Leopard", "Cheetah"];
        const filtered = items.filter(item => item.toLowerCase().includes(text.toLowerCase()));
        setFilteredItems(filtered);
    };

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value));
    };

    return (
    <div className={className}>
    <div className="container">
     <div className="formHolder">
       <div className="formHeader">
         <p>ดีไซน์เนอร์ (Designer)</p>
         <h3>เรทราคา</h3>
         <h2>เรทราคา/เมตร</h2>
       </div>
     <SliderContainer>
        <RangeSlider
            type="range"
            min="50"
            max="1000"
            step="10"
            value={sliderValue}
            onChange={handleSliderChange}
        />
    </SliderContainer>
        <p>เรทราคา : {sliderValue}</p>
            <div className="groupButton2">
                <button className="select2" onClick={filter}> <span>สำรวจ</span></button>
            </div>
     </div>
   </div>
</div>
    );
};



    export default styled(HelpmeDesignTwo)`

   
    @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');

    font: 1em/1.618 Inter, sans-serif;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 100vh;
    padding: 30px;
    
    margin: 0;
    color: #224;
    background-color:#000;
    
    .formHeader p {
      font-size: 25px;
      text-align: center;
      font-weight: bold;
      font-family: "Anuphan";
    }
    
    .formHeader h3 {
      font-size: 20px;
      font-family: "Anuphan";
      text-align: center;
    }

    .formHeader h2 {
        font-size: 17px;
        font-family: "Anuphan";
        text-align: center;
      }
      p{
        font-size: 17px;
        font-family: "Anuphan";
        text-align: center;
      }
    
    .groupButton2 {
      display: flex;
      justify-content: space-around;
      min-height: 55%;
      gap: 20px;
    }
    
    .previous {
      text-decoration: none;
      display: inline-block;
      padding: 8px 16px;
      background-color: #f1f1f1;
      color: black;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    
    .previous:hover {
      background-color: #ddd;
      color: black;
    }
    
    button.select {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      max-width: 545px;
      height: 48px;
      background: #000;
      border: none;
    }
    
    button.select:hover {
      border: 2px solid #fff;
    }
    
    button.select span {
      color: #fff;
      text-align: center;
      font-family: "Anuphan";
      font-size: 16px;
      font-weight: 300;
    }
    
    .container {
      max-width: 600px;
      width: 100%;
      height: 300px;
      padding: 35px;
      border: 1px solid rgba(255, 255, 255, .25);
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.45);
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(15px);
    }
    
    input,
    select {
      border: none;
      border-bottom: 2px solid #D3D5F1;
      font-family: "Anuphan";
      width: 300px;
      height: 40px;
    }
    
    button {
      background-color: #fff;
      color: #000;
      font-weight: bold;
      font-size:16px;
      border: none;
      border-radius: 50px;
      width: 200px;
      height: 60px;
      margin-top: 40px;
      item-align: center;
      transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #fff;
      color: #000;
      font-weight: bold;
      font-size:16px;
      border: none;
      border-radius: 50px;
      width: 200px;
      height: 60px;
      margin-top: 40px;
      item-align: center;
      transition: background-color 0.3s ease;
      border: 2px solid #6b78ff;
      }
    `;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom'; 
// const HelpmeFabicTwo = ({ className }) => {
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const [filterText, setFilterText] = useState('');
//     const [filteredItems, setFilteredItems] = useState([]);
  
//     const toggleDropdown = () => {
//         setDropdownVisible(!dropdownVisible);
//     };

//     const filterDropdown = (e) => {
//         const text = e.target.value;
//         setFilterText(text);
//         filterItems(text);
//     };

//     const filterItems = (text) => {
//         const items = [
//             "เชียงใหม่",
//             "นครราชสีมา",
//             "กาญจนบุรี",
//             "ตาก",
//             "อุบลราชธานี",
//             "สุราษฎร์ธานี",
//             "ชัยภูมิ",
//             "แม่ฮ่องสอน",
//             "เพชรบูรณ์",
//             "ลำปาง",
//             "อุดรธานี",
//             "เชียงราย",
//             "น่าน",
//             "เลย",
//             "ขอนแก่น",
//             "พิษณุโลก",
//             "บุรีรัมย",
//             "นครศรีธรรมราช",
//             "สกลนคร",
//             "นครสวรรค์",
//             "ศรีสะเกษ",
//             "กำแพงเพชร",
//             "ร้อยเอ็ด",
//             "สุรินทร์",
//             "อุตรดิตถ์",
//             "สงขลา",
//             "สระแก้ว",
//             "กาฬสินธุ์",
//             "อุทัยธานี",
//             "สุโขทัย",
//             "แพร่",
//             "ประจวบคีรีขันธ์",
//             "จันทบุรี",
//             "พะเยา",
//             "เพชรบุรี",
//             "ลพบุรี",
//             "ชุมพร",
//             "นครพนม",
//             "สุพรรณบุรี",
//             "ฉะเชิงเทรา",
//             "มหาสารคาม",
//             "ราชบุรี",
//             "ตรัง",
//             "ปราจีนบุรี",
//             "กระบี่",
//             "พิจิตร",
//             "ยะลา",
//             "ลำพูน",
//             "นราธิวาส",
//             "ชลบุรี",
//             "มุกดาหาร",
//             "บึงกาฬ",
//             "พังงา",
//             "ยโสธร",
//             "หนองบัวลำภู",
//             "สระบุรี",
//             "ระยอง",
//             "พัทลุง",
//             "ระนอง",
//             "อำนาจเจริญ",
//             "หนองคาย",
//             "ตราด",
//             "พระนครศรีอยุธยา",
//             "สตูล",
//             "ชัยนาท",
//             "นครปฐม",
//             "นครนายก",
//             "ปัตตานี",
//             "กรุงเทพมหานคร",
//             "ปทุมธานี",
//             "สมุทรปราการ",
//             "อ่างทอง",
//             "สมุทรสาคร",
//             "สิงห์บุรี",
//             "นนทบุรี",
//             "ภูเก็ต",
//             "สมุทรสงคราม",
//           ];
        
          
//         const filtered = items.filter(item => item.toLowerCase().includes(text.toLowerCase()));
//         setFilteredItems(filtered);
//     };


//     return (
//         <div className={className}>
//             <div className='body'>
//             <div className="content">
//                 <div className="container">
//                     <h1>Fabric</h1>
//                     <div className="group-underline">
//                         <div className="underline"></div>
//                         <div className="underline2"></div>
//                     </div>
//                     <Link to="/" className="previous"> &#8249;</Link>
//                     <div className="group-container">
//                         <div className="container-inside1">
//                             <div className="groupButton">
//                             <Link to="/HelpmeFabicOne">
//                             <button className="button2">ประเภท</button>
//                             </Link>
//                             <Link to="/HelpmeFabicTwo">
//                                 <button className="button1">ที่ตั้ง</button></Link>
//                             </div>
//                         </div>
//                         <div className="container-inside2">
//                             <div className="grouph2">
//                                 <h2>ร้านขายผ้าใกล้ฉัน</h2>
//                             </div>

//                             <div className="dropdown">
//                                 <button className="dropbtn" onClick={toggleDropdown}>โปรดเลือกจังหวัด</button>
//                                 <div id="myDropdown" className={`dropdownList ${dropdownVisible ? 'show' : ''}`}>
//                                     <input
//                                         type="text"
//                                         placeholder="Search.."
//                                         className="searchField"
//                                         value={filterText}
//                                         onChange={filterDropdown}
//                                     />
//                                     {filteredItems.map((item, index) => (
//                                         <a key={index} href="#">{item}</a>
//                                     ))}
//                                 </div>
//                             </div>


//                             <div className="groupButton2">
//                                 <button className="select2"> <span>ข้าม</span></button>
//                                 <button className="select2"> <span>สำรวจ</span></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// };



//     export default styled(HelpmeFabicTwo)`

//     @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
//     .body {
//         background-color: rgba(198, 204, 215, 0.7);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//         font-family: "Lora";
//     }

//     .content {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }

//     h1 {
//         font-size: 40px;
//         font-weight: bold;
//         text-align: center;
//         font-family: 'Lora';
//     }

//     .group-underline {
//         display: flex;
//         justify-content: center;
//     }

//     .underline {
//         width: 430.375px;
//         height: 1.444px;
//         background: #000;
//         margin-bottom: 25px;
//     }

//     .container {
//         width: 200%;
//         max-width: 1110px;
//         min-height: 540px;
//         background-color: #ffffff;
//         border-radius: 54px;
//         display: flex;
//         flex-wrap: wrap;
//         align-content: space-around;
//         flex-direction: column;
//         box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
//         flex-direction: column;
//         flex-wrap: nowrap;
//         align-items: center;
//         margin-bottom: 75px;
//         padding: 0 20px;
//     }

//     .group-container {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }

//     .container-inside1 {
//         border-radius: 30px;
//         background: #C6CCD7;
//         width: 70%;
//         max-width: 800px;
//         flex-shrink: 0;
//         margin-top: 10px;
//         padding: 20px;
//     }

//     .groupButton {
//         display: flex;
//         justify-content: space-around;
//     }

//     button.button1 {
//         width: 100%;
//         max-width: 177px;
//         height: 48px;
//         flex-shrink: 0;
//         border-radius: 20px;
//         background: #333A56;
//         border-radius: 20px;
//         background: #333A56;
//         margin-top: 10px;
//         color: #FFF;
//         text-align: center;
//         font-family: 'Lora', serif;
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 500;
//         line-height: normal;
//         border: none;
//     }

//     button.button2 {
//         width: 100%;
//         max-width: 177px;
//         height: 48px;
//         flex-shrink: 0;
//         border-radius: 20px;
//         background: #C6CCD7;
//         border-radius: 20px;
//         background: #C6CCD7;
//         margin-top: 10px;
//         color: #333A56;
//         text-align: center;
//         font-family: "Lora";
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 500;
//         line-height: normal;
//         border: none;
//     }

//     button.button2:hover {
//         width: 150px;
//         max-width: 177px;
//         height: 48px;
//         flex-shrink: 0;
//         border-radius: 20px;
//         background: #333A56;
//         border-radius: 20px;
//         background: #333A56;
//         margin-top: 10px;
//         color: #FFF;
//         text-align: center;
//         font-family: 'Lora', serif;
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 500;
//         line-height: normal;
//         border: none;
//     }

//     .container-inside2 {
//         width: 200%;
//         max-width: 1110px;
//         height: 90%;
//         border-radius: 50px;
//         margin-top: 20px;
//         box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
//         background: #333A56;
//         flex-shrink: 0;
//         padding: 20px;
//     }

//     .grouph2 {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: nowrap;
//         justify-content: space-around;
//     }

//     h2 {
//         display: flex;
//         flex-direction: column;
//         flex-wrap: wrap;
//         align-content: center;
//         align-items: center;
//         font-family: 'Lora';
//         font-weight: 500;
//         color: #fff;
//     }

//     /* Responsive Styling */
//     @media (max-width: 768px) {
//         h1 {
//             font-size: 30px;
//         }
//         .container {
//             width: 90%;
//             border-radius: 40px;
//         }
//         .container-inside1 {
//             max-width: 600px;
//             padding: 10px;
//         }
//         button.button1, button.button2 {
//             font-size: 18px;
//         }
//     }

//     @media (max-width: 480px) {
//         h1 {
//             font-size: 24px;
//         }
//         .container {
//             width: 100%;
//         }
//         .container-inside1 {
//             max-width: 90%;
//         }
//         button.button1, button.button2 {
//             font-size: 16px;
//         }
//         .underline {
//             width: 300px;
//         }
//         .previous {
//             left: 20px;
//         }
//         .dropbtn {
//             margin-left: 20px;
//         }
//         .dropdownList {
//             margin-left: 20px;
//         }
//     }

//     /*for dropdrow*/
//         .dropbtn {
//             background-color:#D9D9D9;
//             color: #000;
//             margin-top:10px;
//             margin-left:380px;
//             padding: 20px 120px;
//             font-size: 16px;
//             border: none;   
//             cursor: pointer;
//         }
//         .dropbtn:hover, .dropbtn:focus {
//             background-color: white;
//         }
//         .searchField {
//             box-sizing: border-box;
//             font-size: 16px;
//             padding: 14px 60px 12px 125px;
//             border: none;
//             border-bottom: 1px solid #ddd;
//         }
//         .searchField:focus {outline: 3px solid #ddd;}
//         .dropdown {
//             position: relative;
//             display: inline-block;
//         }
//         .dropdownList {
//             display: none;
//             position: absolute;
//             background-color: #f6f6f6;
//             min-width: 230px;
//             overflow: auto;
//             margin-left:380px;
//             border: 1px solid #ddd;
//             z-index: 2x ;
//         }
//         .dropdownList a {
//             color: black;
//             padding: 12px 16px;
//             text-decoration: none;
//             display: block;
//         }
//         .dropdown a:hover {background-color: #ddd;}
//         .show {display: block;}
//         .groupButton1{
//             display:flex;
//             justify-content: space-around;
//             margin-top:50px;
//         }

//         .groupButton2{
//             display:flex;
//             align-content: center;
//             justify-content: center;
//             margin-top:50px;
//         }

//         button.select{
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             align-content: center;
//             border-radius: 20px;
//             width: 145px;
//             height: 48px;
//             flex-direction: column;
//             justify-content: center;
//             flex-shrink: 0;
//             background: #FFFFFF;
//             border: none;
//         }

//         button.select:hover{
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             align-content: center;
//             border-radius: 20px;
//             width: 145px;
//             height: 48px;
//             flex-direction: column;
//             justify-content: center;
//             flex-shrink: 0;
//             background: #C6CCD7;
//             border: 2px solid #fff;
//         }
        
        
//         button.select span {
//             color: #000;
//             text-align: center;
//             font-family: 'Lora';
//             font-size: 16px;
//             font-style: normal;
//             font-weight: 300;
//             line-height: normal;

//         }

//         button.select2{
//             margin-left:15px;
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             align-content: center;
//             border-radius: 20px;
//             width: 145px;
//             height: 48px;
//             flex-direction: column;
//             justify-content: center;
//             flex-shrink: 0;
//             background: #C6CCD7;
//             padding:0px;
//             border: none;
//         }

//         button.select2:hover{
//             margin-left:15px;
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             align-content: center;
//             border-radius: 20px;
//             width: 145px;
//             height: 48px;
//             flex-direction: column;
//             justify-content: center;
//             flex-shrink: 0;
//             background: #000;
//             padding:0px;
            
//         }

//         button.select2 span {
//             color: #000;
//             text-align: center;
//             font-family: 'Lora', serif;
//             font-size: 16px;
//             font-style: normal;
//             font-weight: 300;
//             line-height: normal;
//         }

//         button.select2:hover span {
//             color: #fff ;
//             text-align: center;
//             font-family: 'Lora', serif;
//             font-size: 16px;
//             font-style: normal;
//             font-weight: 300;
//             line-height: normal;
//         }
//         .previous {
//             text-decoration: none;
//             display: inline-block;
//             padding: 8px 16px;
//             background-color: #f1f1f1;
//             color: black;
//             border-radius: 50%;
//             position: absolute;
//             top: 20px;
//             left: 40px;
//         }

//         .previous:hover {
//             background-color: #ddd;
//             color: black;
//         }
//     `;
