import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const TableCompareCompany = ({ url, compares, products, className }) => {
  const [cotton, setCotton] = useState([]);
  const [silk, setSilk] = useState([]);
  const [linen, setLinen] = useState([]);
  const [heads, setHeads] = useState(["1 - 50", "51 - 100", "100 ตัวขึ้นไป"]);

  useEffect(() => {
    async function getData() {
      const findCotton = products.filter(
        (compare) => compare.typeProduct == "ผลิตเสื้อตามแบบ"
      );
      const findSilk = products.filter(
        (compare) => compare.typeProduct == "ปักลายเสื้อ"
      );
      const findLinen = products.filter(
        (compare) => compare.typeProduct == "สกรีนลายเสื้อ"
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
            <th id="title-header">ผลิตเสื้อตามแบบ</th>
            <td colspan="3" id="space"></td>
          </tr>

          <tr id="detail">
            <th id="title">1 - 50</th>
            {compares.map((compare) => {
              const cottonMatch = cotton.find(
                (cot) =>
                  cot.companyId === compare.id && cot.quantity == "1 - 50"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">51 - 100</th>
            {compares.map((compare) => {
              const cottonMatch = cotton.find(
                (cot) =>
                  cot.companyId === compare.id && cot.quantity == "51 - 100"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">100 ตัวขึ้นไป</th>
            {compares.map((compare) => {
              const cottonMatch = cotton.find(
                (cot) =>
                  cot.companyId === compare.id &&
                  cot.quantity == "100 ตัวขึ้นไป"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>

          <tr>
            <th id="title-header">ปักลายเสื้อ</th>
            <td colspan="3" id="space"></td>
          </tr>

          <tr id="detail">
            <th id="title">1 - 50</th>
            {compares.map((compare) => {
              const cottonMatch = silk.find(
                (cot) =>
                  cot.companyId === compare.id && cot.quantity == "1 - 50"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">51 - 100</th>
            {compares.map((compare) => {
              const cottonMatch = silk.find(
                (cot) =>
                  cot.companyId === compare.id && cot.quantity == "51 - 100"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">100 ตัวขึ้นไป</th>
            {compares.map((compare) => {
              const cottonMatch = silk.find(
                (cot) =>
                  cot.companyId === compare.id &&
                  cot.quantity == "100 ตัวขึ้นไป"
              );
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>

          <tr>
            <th id="title-header">สกรีนลายเสื้อ</th>
            <td colspan="3" id="space"></td>
          </tr>

          <tr id="detail">
            <th id="title">1 - 50</th>
            {compares.map((compare) => {
              const cottonMatch = linen.find((cot) => cot.companyId === compare.id && cot.quantity == "1 - 50");
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">51 - 100</th>
            {compares.map((compare) => {
              const cottonMatch = linen.find((cot) => cot.companyId === compare.id && cot.quantity == "51 - 100");
              return (
                <td key={compare.id}>
                  {cottonMatch ? cottonMatch.price : "-"}
                </td>
              );
            })}
          </tr>
          <tr id="detail">
            <th id="title">100 ตัวขึ้นไป</th>
            {compares.map((compare) => {
              const cottonMatch = linen.find((cot) => cot.companyId === compare.id && cot.quantity == "100 ตัวขึ้นไป");
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
export default styled(TableCompareCompany)`
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
    background-color: #333a56;
    color: white;
    border: none;
  }
  .table #space {
    background-color: #333a56;
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
