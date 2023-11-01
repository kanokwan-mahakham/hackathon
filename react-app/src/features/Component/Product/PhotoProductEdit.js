// import styled from "styled-components";
// import React, { useState } from "react";
// import axios from "axios";

// const PhotoProductEdit = ({ url,information, setInformation, className }) => {
//   const image = require("../../../image Hackathon/image/background.jpeg");
//   const edit = require("../../../image Hackathon/icon/editing.png");

//   const [image1, setImage1] = useState(information.image1);
//   const [image2, setImage2] = useState(information.image1);
//   const [image3, setImage3] = useState(information.image1);
//   const [image4, setImage4] = useState(information.image1);
//   const [image5, setImage5] = useState(information.image1);
//   const [image6, setImage6] = useState(information.image1);

//   async function handleFileChange1(event) {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = async function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         // Update the 'image1' property inside the callback
//         setImage1(imagePath);
//         // Now, send the PUT request with the updated 'image1'
//         const { id, ...item } = information;
//         const res = await axios.put(`${url}/informations/${information.id}`, {
//           image1: imagePath, // Updated 'image1'
//           ...item
//         });

//         setInformation(res.data);
//         console.log(res.data);
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   async function handleFileChange2(event) {
//     const file = event.target.files[0];
//     const {id,image2,...item} = information
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         setImage1(imagePath); // เก็บ URL ของภาพใน state
//       };
//       reader.readAsDataURL(file);
//       const res = await axios.put(`${url}/informations/${information.id}`,{
//         image2:image2,
//         ...item
//       })
//       setInformation(res.data);
//     }
//   }

//   async function handleFileChange3(event) {
//     const file = event.target.files[0];
//     const {id,image3,...item} = information
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         setImage1(imagePath); // เก็บ URL ของภาพใน state
//       };
//       reader.readAsDataURL(file);
//       const res = await axios.put(`${url}/informations/${information.id}`,{
//         image3:image3,
//         ...item
//       })
//       setInformation(res.data);
//     }
//   }

//   async function handleFileChange4(event) {
//     const file = event.target.files[0];
//     const {id,image4,...item} = information
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         setImage1(imagePath); // เก็บ URL ของภาพใน state
//       };
//       reader.readAsDataURL(file);
//       const res = await axios.put(`${url}/informations/${information.id}`,{
//         image4:image4,
//         ...item
//       })
//       setInformation(res.data);
//     }
//   }

//   async function handleFileChange5(event) {
//     const file = event.target.files[0];
//     const {id,image5,...item} = information
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         setImage1(imagePath); // เก็บ URL ของภาพใน state
//       };
//       reader.readAsDataURL(file);
//       const res = await axios.put(`${url}/informations/${information.id}`,{
//         image5:image5,
//         ...item
//       })
//       setInformation(res.data);
//     }
//   }

//   async function handleFileChange6(event) {
//     const file = event.target.files[0];
//     const {id,image6,...item} = information
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const imagePath = e.target.result;
//         console.log("Image path: ", imagePath);
//         setImage1(imagePath); // เก็บ URL ของภาพใน state
//       };
//       reader.readAsDataURL(file);
//       const res = await axios.put(`${url}/informations/${information.id}`,{
//         image6:image6,
//         ...item
//       })
//       setInformation(res.data);

//     }
//   }

//   return (
//     <div className={className}>
//       <div className="photo-product">
//         <input
//           type="file"
//           id="product-image1"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange1}
//         />

//         <label htmlFor="product-image" className="image">
//           <div className="img-product">
//             <img src={image1} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>

//         <input
//           type="file"
//           id="product-image2"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange2}
//         />

//         <label htmlFor="product-image2" className="image">
//           <div className="img-product">
//             <img src={image2} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>

//         <input
//           type="file"
//           id="product-image3"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange3}
//         />

//         <label htmlFor="product-image" className="image">
//           <div className="img-product">
//             <img src={image3} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>

//         <input
//           type="file"
//           id="product-image4"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange4}
//         />

//         <label htmlFor="product-image4" className="image">
//           <div className="img-product">
//             <img src={image4} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>

//         <input
//           type="file"
//           id="product-image5"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange5}
//         />

//         <label htmlFor="product-image5" className="image">
//           <div className="img-product">
//             <img src={image5} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>

//         <input
//           type="file"
//           id="product-image6"
//           name="product-image"
//           accept="image/*"
//           className="file-input"
//           style={{ display: "none" }}
//           onChange={handleFileChange6}
//         />

//         <label htmlFor="product-image6" className="image">
//           <div className="img-product">
//             <img src={image6} alt="Product" />
//             <div className="icon-overlay">
//               <img src={edit} id="icon" alt="Edit" />
//             </div>
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// };
// export default styled(PhotoProductEdit)`
//   .photo-product {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }

//   .image {
//     position: relative;
//     cursor: pointer;
//   }
//   .image .img-product {
//     width: 420px;
//     height: 500px;
//     border-radius: 30px;
//     margin: 10px 40px 40px 0px;
//     opacity: 0.4;
//     background-color: black;
//   }
//   .img-product img{
//     width: 100%;
//     height:100%;
//   }
//   .icon-overlay #icon {
//     position: absolute;
//     bottom: 220px;
//     left: 200px;
//     width: 50px;
//     height: 50px;
//     z-index: 1;
//     border-radius: 0;
//   }
// `;

import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PhotoProductEdit = ({ url, information, setInformation, className }) => {
  const edit = require("../../../image Hackathon/icon/editing.png");

  const [imageUrls, setImageUrls] = useState({
    image1: information.image1,
    image2: information.image2,
    image3: information.image3,
    image4: information.image4,
    image5: information.image5,
    image6: information.image6,
  });

  const { id, ...item } = information;

  // async function handleFileChange(event, imageKey) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = async function (e) {
  //       const imagePath = e.target.result;
  //       console.log(`Image path for ${imageKey}:`, imagePath);
  //       setImageUrls({ ...imageUrls, [imageKey]: imagePath });
  //       const imageData = {
  //         ...item,
  //         [imageKey]: imagePath,
  //       };
  //       const res = await axios.put(`${url}/informations/${id}`, imageData);
  //       setInformation(res.data);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  function handleFileChange(event,imageKey) {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 70 * 1024) {
        const reader = new FileReader();
        reader.onload = async function (e) {
          const imagePath = e.target.result;
          console.log(`Image path for ${imageKey}:`, imagePath);
          setImageUrls({ ...imageUrls, [imageKey]: imagePath });
          const imageData = {
            ...item,
            [imageKey]: imagePath,
          };
          const res = await axios.put(`${url}/informations/${id}`, imageData);
          setInformation(res.data);
        };
        reader.readAsDataURL(file);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ภาพใหญ่ไป",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  }

  return (
    <div className={className}>
      <div className="photo-product">
        {Array.from({ length: 6 }, (_, i) => {
          const imageKey = `image${i + 1}`;
          return (
            <div key={imageKey} className="photo">
              <input
                type="file"
                id={`product-image${i + 1}`}
                name="product-image"
                accept="image/*"
                className="file-input"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, imageKey)}
              />

              <label htmlFor={`product-image${i + 1}`} className="image">
                <div className="img-product">
                  <img src={imageUrls[imageKey]} alt={`Product ${i + 1}`} />
                </div>

                <div className="icon-overlay">
                  <img src={edit} id="icon" alt="Edit" />
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default styled(PhotoProductEdit)`
  .photo-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    cursor: pointer;
  }
  .image .img-product {
    width: 400px;
    height: 500px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
    border: 4px dashed gray;
  }
  .img-product img {
    width: 100%;
    height: 100%;
  }
  .icon-overlay #icon {
    position: absolute;
    bottom: 220px;
    left: 200px;
    width: 50px;
    height: 50px;
    z-index: 1;
    border-radius: 0;
    opacity: 0.4;
  }
`;
