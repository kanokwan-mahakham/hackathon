import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import defaultImage from "../../image Hackathon/image/choose1.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styleprevious = styled.div`
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
`;

const ScrollableContainer = styled.div`
  max-height: 700px; /* Set the maximum height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  overflow: hidden;
  height: 50%; /* Set the height to 100% to expand within ScrollableContainer */
`;

const StyledH1 = styled.h1`
  color: #fff;
  text-align: center;
`;

const InputSection = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const InputLabel = styled.label`
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: "Anuphan";
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 40px;
  margin: 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-family: "Anuphan";
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImageSection = styled.div`
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

const EditableImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const ConfirmButtonDiv = styled.div`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

function EditCheckData({ url, companies, setCompanies, setNotis }) {
  const [company, setCompany] = useState([]);
  const [mail, setmail] = useState("");
  const [typ, setTyp] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [number, setNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCompanies() {
      try {
        const findCompany = companies.find((com) => com.id == Number(id));
        if (findCompany) {
          setCompany(findCompany);
          setmail(findCompany.email);
          setName(findCompany.username);
          setPass(findCompany.password);
          setNumber(findCompany.juristicNumber);
          setTyp(findCompany.type);
          setSelectedImage(findCompany.JuristicFile);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCompanies();
  }, [id]);

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 70 * 1024) {
        // ตรวจสอบขนาดของไฟล์ (70KB)
        const reader = new FileReader();
        reader.onload = function (e) {
          const imagePath = e.target.result;
          setSelectedImage(imagePath); // เก็บ URL ของภาพใน state
        };
        reader.readAsDataURL(file);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ภาพใหญ่ไป",
          text: "กรุณาลองใหม่อีกครั้ง",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  }

  function back() {
    navigate(-1);
  }

  async function submit() {
    try {
      const {
        id,
        username,
        email,
        password,
        type,
        juristicNumber,
        JuristicFile,
        ...item
      } = company;

      await axios.put(`${url}/users/${id}`, {
        username: name,
        email: mail,
        password: pass,
        type: typ,
        juristicNumber: number,
        JuristicFile: selectedImage,
        ...item,
      });

      const res = await axios.get(`${url}/users`);
      setCompanies(res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "แก้ไขข้อมูลเรียบร้อย",
        text: "กลับสู่หน้าเดิม",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Background>
      <Styleprevious>
        <div className="previous" onClick={back}>
          &#8249;
        </div>
      </Styleprevious>
      <ScrollableContainer>
        <Container>
          <StyledH1>แก้ไขข้อมูล</StyledH1>
          <InputSection>
            {/* <InputFieldWrapper>
              <InputLabel>ผู้ประกอบการ</InputLabel>
              <InputField type="text" placeholder=/>
            </InputFieldWrapper> */}
            <InputFieldWrapper>
              <InputLabel>อีเมล </InputLabel>
              <InputField
                type="text"
                value={mail}
                onChange={(event) => {
                  setmail(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>ชื่อผู้ใช้</InputLabel>
              <InputField
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>รหัสผ่าน</InputLabel>
              <InputField
                type="text"
                value={pass}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>ประเภท</InputLabel>
              <InputField
                type="text"
                value={typ}
                onChange={(event) => {
                  setTyp(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>เลขประจำตัวผู้เสียภาษี</InputLabel>
              <InputField
                type="text"
                value={number}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <ImageSection>
              <ImageLabel>
                แก้ไขรูปภาพ
                <EditableImageInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </ImageLabel>
              <Image src={selectedImage} alt="Your Image" />
              <ConfirmButtonDiv onClick={submit}>ยืนยัน</ConfirmButtonDiv>
            </ImageSection>
          </InputSection>
        </Container>
      </ScrollableContainer>
    </Background>
  );
}

export default EditCheckData;
