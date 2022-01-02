import styled from "styled-components";

export const Dashboard = styled.div`
  width: 84%;
  left: 5px;
  position: absolute;
  margin: 60px 210.9px;
  padding: 2px 0;
  background-color: whitesmoke;
  h1{
    margin-left: 40px;
    padding: 20px;
  }
  .wrapper {
    width: 94%;
    margin: 20px 20px auto;
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .mini-card {
      width: 28%;
      background-color: white;
      height: 140px;
      padding: 20px;
      margin-left: 20px;
      line-height: 23px;
      border-radius: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover{
          /* background-color: darkblue; */
          color: white;
          &:focus{
background-color: greenyellow;
          }
        }
      .card-image {
        display: flex;
        justify-content: space-between;
        .img1 {
          background-color: #eef7ff;
          border-radius: 50%;
          height: 32px;
          padding: 10px;
          margin-top: -8px;
          img {
            width: 30px;
            margin-top: 2px;
          }
        }
        .img2 {
          margin-top: -15px;
          width: 30px;
          height: 30px;
          border-radius: 20px;
        }
      }
      .price-card {
        font-size: 18px;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        color: black;
        margin-top: 14px;
      }
      .card-total {
        display: flex;
        justify-content: space-between;

        .bb {
          display: flex;
          justify-content: space-between;
          p {
            color: #28ad63;
            font-size: 16px;
          }
          .p {
            color: red;
            font-size: 16px;
          }
          .title-card {
            font-size: 14px;
            
          }
        }
      }
    }
  }
  .wrapper-2 {
    width: 92%;
    margin: 20px 50px auto;
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    .apexcharts-toolbar {
      display: none;
    }
  }
  .wrapper-3 {
    width: 94%;
    margin: 40px 30px;
    display: flex;
    background-color: whitesmoke;
    justify-content: space-between;
    table,
    tr,
    th,
    td {
      border: none;
      border-collapse: collapse;
      margin: 30px 30px auto;
    }
    .title{
      font-weight: bolder;
      font-size: 20px;
      width: 180px;
    }

    table {
      background-color: white;
      width: 550px;
      margin: 30px 24px;
      padding: 10px;
      text-align: center;
      th {
        padding: 15px;
      }
      td {
        padding: 20px;
      }
    }
    .apexcharts-title-text {
      font-size: 20px;
      margin: 13px 10px;
    }
    .apexcharts-slices{
   position: relative;
   top: 20px;
    }
  }
`;
