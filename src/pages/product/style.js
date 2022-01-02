import styled from "styled-components";



export const Products = styled.div`
  width: 83.66%;
  position: absolute;
  margin: 60px 220px;
  padding: 2px 0;
  background-color: whitesmoke;
  .Loading{
  top: 300px;
  margin-left:300px;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: darkblue;

}
  .cart-img {
    width: 60px;
    margin: -120px 0px 80px 1000px;
    background-color: white;
    border-radius: 10px;
    position: fixed;
    z-index: 999;
    box-shadow: 0 0 10px gray;
    
    img {
      margin: 2px 4px auto;
      width: 40px;
      padding: 4px;
    }
    button{
      background-color: green;
      color: yellow;
      font-size: 15px;
      font-weight: bolder;
    }
  }
  .btn-group {
    margin: 20px 70px;
    button {
      margin: 0px 10px;
      width: 100px;
      height: 30px;
      border: none;
    }
    .title {
      margin: 22px 10px;
      font-size: 28px;
      font-weight: bold;
    }
  }
  .navs {
    display: flex;
    margin: 6px 19px;
    list-style: none;
    li {
      margin: 0px 20px;
      a {
        text-decoration: none;
        color: black;
        line-height: 30px;
        font-weight: 600;
      }
    }
    li:hover {
      border-bottom: 1px solid #45a5ff;
      a {
        color: #45a5ff;
      }
    }
    li:focus {
      border-bottom: 1px solid #45a5ff;
      color: #45a5ff;
      font-weight: 600;
    }
  }
  .table {
    padding: 10px;
    width: 86%;
    background-color: white;
    margin: 20px 75px;
    th {
      text-align: center;
      width: fit-content;
      padding: 10px;
      border-collapse: collapse;
      /* border-bottom: 1px solid black; */
    }
  }
  
  .hr {
    display: inline;
    width: 50%;
  }
  td {
    font-weight: 700;
    line-height: 20px;
    width: fit-content;
    text-align: center;
    padding: 6px;
    /* border-bottom: 1px solid black; */
    align-items: center;
    margin: 0px 10px;
    img {
      position: relative;
      top: 3.5px;
      margin: 1px 5px auto;
      width: 42px;
    }
    span {
      position: relative;
      top: -5px;
      margin: 0px 2px auto;
    }
  }
`;
