import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const TableCompareDesigner = ({ url, compares, products, className }) => {
  const [cotton, setCotton] = useState([]);
  const [silk, setSilk] = useState([]);
  const [linen, setLinen] = useState([]);

  useEffect(() => {
    async function getData() {
      const findCotton = products.filter(
        (compare) => compare.typeProduct == "วินเทจ"
      );
      const findSilk = products.filter(
        (compare) => compare.typeProduct == "Retro"
      );
      const findLinen = products.filter(
        (compare) => compare.typeProduct == "Streetwear"
      );
      setCotton(findCotton);
      setSilk(findSilk);
      setLinen(findLinen);

      console.log("seccess");
    }
    getData();
  }, [compares]);

  return (
    <div className={className}>
      <div className="table" id="factory">
        <table>
          <tr id="header">
            <th id="title-header">วินเทจ</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">เริ่มต้น</th>

            {compares.map((compare) => {
              const cottonMatch = cotton.find((cot) => cot.companyId === compare.id);
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>

          <tr>
            <th id="title-header">Retro</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">เริ่มต้น</th>

            {compares.map((compare) => {
              const cottonMatch = silk.find((cot) => cot.companyId === compare.id);
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}

          </tr>

          <tr>
            <th id="title-header">Streetwear</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">เริ่มต้น</th>
            {compares.map((compare) => {
              const cottonMatch = linen.find((cot) => cot.companyId === compare.id);
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
};
export default styled(TableCompareDesigner)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .table {
    width: 100%;
  }
  .table #title-header {
    width: 350px;
    height: 70px;
    font-family: "Anuphan";
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    background-color: #fdc300;
    color: black;
    border: none;
  }
  .table #space {
    background-color:#fdc300;
    font-family: "Anuphan";
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    border: none;
  }
  .table #detail {
    width: 100%;
  }
  .table #title {
    width: 350px;
    font-family: "Anuphan";
    font-size: 24px;
    font-weight: 500;
    height: 70px;
    background-color: #f7f5e6;
  }
  .table td {
    width: 334px;
    font-family: "Anuphan";
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
  table,
  th,
  td {
    border: 1px solid #d9d9d9;
    border-collapse: collapse;
  }
`;

/*<div className="table" id="fabric">
  <table>
    <tr id="header">
      <th id="title-header">เมตรละ (บาท)</th>
      <td colspan="3" id="space"></td>
    </tr>
    <tr id="detail">
      <th id="title">ฝ้าย</th>
      <td>100</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr id="detail">
      <th id="title">ลินิน</th>
      <td>-</td>
      <td>110</td>
      <td>-</td>
    </tr>

    <tr>
      <th id="title-header">ที่ตั้ง</th>
      <td colspan="3" id="space"></td>
    </tr>
    <tr id="detail">
      <th id="title">จังหวัด</th>
      <td>เชียงใหม่</td>
      <td>กรุงเทพ</td>
      <td>สงขลา</td>
    </tr>
  </table>
</div>/*

/*
<div className="table" id="designers">
  <table>
    <tr id="header">
      <th id="title-header">ราคา (บาท)</th>
      <td colspan="3" id="space"></td>
    </tr>
    <tr id="detail">
      <th id="title">เรทราคาเริ่มต้น</th>
      <td>100</td>
      <td>-</td>
      <td>-</td>
    </tr>
    
    <tr>
      <th id="title-header">สไตล์การออกแบบ</th>
      <td colspan="3" id="space"></td>
    </tr>
    <tr id="detail">
      <th id="title">สไตล์</th>
      <td>วินเทจ</td>
      <td>Retro</td>
      <td>Streetwear</td>
    </tr>
  </table>
</div>
 */
