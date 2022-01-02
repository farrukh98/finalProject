import styled from "styled-components";

export const Navheader = styled.div`
  width: 16%;
  background-color: white;
  position: fixed;
  height: 100%;
  z-index: 999;
  text-align: center;
  .logo{
    font-size: 24px;
    color: black;
    font-weight: bolder;

  }
  ul {
    margin: 30px -30px auto;
    align-items: center;
    
  }
 
`;
export const Li = styled.li`
  background-color: ${({ active }) => (active ? "greenyellow" : "transparent")};
  border-radius: 10px;
  color: #45a5ff;
  width: 180px;
  list-style: none;
  margin: 10px 0px;
  padding: 10px;
  a {
    text-align: center;
    padding: 6px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    text-decoration: none;
  }
  span {
  color: black;
    position: relative;
    top: 3.4px;
    right: 20px;
  }
  img {
        width: 40px;
        position: relative;
        margin: -2px 60px 0px 0px;
        top: 2px;
        right: 5px;
      }
`;
