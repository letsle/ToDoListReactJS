import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: rgba(95, 19, 182, 0.356);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const ToDoList = styled.div`
  background: #5b4868;
  border-radius: 5px;
  padding: 20px;
`;

export const List = styled.ul`
    padding: 0;
    margin-top: 30px;
  
`;

export const Item = styled.li`
  align-items: center;
  background: #E4E4E4;
  border-radius: 5px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  font-weight: 400;
  font-size: 15px;
  height: 60px;
  justify-content: center;
  list-style-type: none;
  margin-bottom:20px;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  height: 40px;
  outline: none;
  padding-left: 10px;
`;

export const Button = styled.button`
  background-color: #e1d9e7;
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-weight: bold;
  height: 40px;
  margin-left: 20px;


  &:hover{
    background-color: rgb(75, 12, 148);
    color: white;
    transition:1s;
  }

  &:active{
    opacity: 0.6;
  }
`;
