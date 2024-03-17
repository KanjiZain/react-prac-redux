import React from "react";
import { HOCScreen, Message } from "../HOC";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router-dom";

const DoubleMessageBubble = HOCScreen(Message);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/wrapper");
  };

  return (
    <div>
      <DoubleMessageBubble sender="Alice" message="Hey Bob, how's it going?" />
      <DoubleMessageBubble
        sender="Bob"
        message="Hi Alice! Everything's good here, thanks for asking."
      />

      <Button onClick={handleButtonClick} label="Next" />
    </div>
  );
};

export default HOCScreen(Home);
