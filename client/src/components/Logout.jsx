import axios from "axios";
import React from "react";
import { BiPowerOff } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutRoute } from "../utils/APIROUTES";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const id = await JSON.parse(localStorage.getItem("chat-app-user"))._id;
      const data = await axios.get(`${logoutRoute}/${id}`);
      if (data.status === 200) {
        localStorage.clear();
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border-radius: 1rem;
  background-color: blue;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
