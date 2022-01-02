import styled from "styled-components";
import Button from 'react-bootstrap/Button';

export const Messages = styled.div`
  width: 83%;
    position: absolute;
    left: 220px;
    .Loading{
      top: 300px;
      margin-left:300px;
      align-items: center;
      font-size: 30px;
      font-weight: bolder;
      color: darkblue;

    }
  h1{
    color: green;
    /* font-weight: bolder; */
    text-align: center;
    margin: 60px auto;
  }
  .container22{
    border-radius: 10px;
    display: flex;
    background-color: whitesmoke;
  flex-wrap: wrap;
  justify-content: space-around;
    width: 100%;
    margin: auto;
  }
  h2{
    color: red;
    font-weight: bolder;
  }
  span{
    color: darkblue;
  }
`;

export const Card  =styled.div`
width: 30%;
margin: 30px auto;
border: 2px solid black;
align-items: center;
text-align: center;
background-color: white;
height: fit-content;
/* overflow-y: scroll; */
border-radius: 6px;
`