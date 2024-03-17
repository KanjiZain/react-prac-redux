import React from "react";
import Colorchanger from "../Components/ChangeColor";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Wrapper: React.FC = () => {
  const navigate = useNavigate();
  
   const handleButtonClick = () => {
     navigate("/states");
   };


  return (
    <div style={{alignContent:"flex-start"}}>
      <Colorchanger defaultcolor="white" />
      <Button label="Click" onClick={handleButtonClick}></Button>
    </div>
  );
};

export default Wrapper;
