import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  position: absolute;
  right: -20px;
  margin: 100px 20px auto;
 color: black;
  background-color: white;
 
  h1{
    text-align: center;
  color: green;
  font-size: 30px;
  font-weight: bolder;
  }
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const TableWrapper = styled.div`
  width: 80%;
 
  display: flex;
  justify-content: space-around;
  .clean{
      background-color: red;
      width: 100px;
      padding: 5px;
      color: white;
      font-weight: bolder;
      font-size: 15px;
    }
    .Checkout{
      background-color: green;
      width: 100px;
      padding: 5px;
      color: white;
      font-weight: bolder;
      margin-left: 20px;
      font-size: 15px;
     
    }
    .part2{
      width: 400px;
      background-color: white;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;


    }
    .totals{
  margin-left: 400px;
}
  
`;

export const Table = styled.table`
  width: 80%;
  background-color: whitesmoke;
  
  /* margin: 0px 230px auto; */
  &,
  th,
  td {
    /* border-bottom: 1px solid lightgray; */
    text-align: center;
  }
  img{
    width: 80px;
    height: 60px;
  }
  .Total{
    background-color: yellowgreen;
   color: blue;
    font-weight: bolder;
    font-size: 18px;
    
  }
  .plus{
      background-color: green;
      color: white;
    }
    .minus{
      background-color: red;
      color: white;
    }
    .delete{
      background-color: red;
      width: 100px;
      padding: 5px;
      color: white;
      font-weight: bolder;
      font-size: 15px;
    }
    
`;

