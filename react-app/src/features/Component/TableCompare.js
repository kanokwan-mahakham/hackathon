import styled from "styled-components";

const TableCompare = ({ className }) => {
  return (
    <div className={className}>
      <div className="table" id="factory">
        <table>
          <tr id="header">
            <th id="title-header">รับผลิต</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">1 - 50 ตัว</th>
            <td>100</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">51 - 100 ตัว</th>
            <td>-</td>
            <td>110</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">101 - 200 ตัว</th>
            <td>-</td>
            <td>-</td>
            <td>200</td>
          </tr>
          <tr id="detail">
            <th id="title">201 - 300 ตัว</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <tr>
            <th id="title-header">สกรีน</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">1 - 30 ตัว</th>
            <td>100</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">31 - 100 ตัว</th>
            <td>-</td>
            <td>110</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">101 - 300 ตัว</th>
            <td>-</td>
            <td>-</td>
            <td>200</td>
          </tr>

          <tr>
            <th id="title-header">ปัก</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">1 - 30 ตัว</th>
            <td>100</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">31 - 100 ตัว</th>
            <td>-</td>
            <td>110</td>
            <td>-</td>
          </tr>
          <tr id="detail">
            <th id="title">101 - 300 ตัว</th>
            <td>-</td>
            <td>-</td>
            <td>200</td>
          </tr>

          <tr>
            <th id="title-header">บริการ</th>
            <td colspan="3" id="space"></td>
          </tr>
          <tr id="detail">
            <th id="title">ผ้า</th>
            <td>รับทำเฉพาะผ้าที่มีในโรงงานเท่านั้น</td>
            <td>สามารถนำผ้ามาทำกับโรงงานได้ และมีผ้าของโรงงานให้เลือก</td>
            <td>ต้องนำผ้ามาให้โรงงานเท่านั้น</td>
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
      </div>
    </div>
  );
};
export default styled(TableCompare)`
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
