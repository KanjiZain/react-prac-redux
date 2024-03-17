import { useState } from "react";
import { Input } from "../Components/Input";
import "./State.css";
const State: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div>
      <form className="registration-form">
        <Input
          placeholder="Enter username"
          value={formData.username}
          onChange={(event) => handleChange(event, "username")}
        />
        <Input
          placeholder="Enter email"
          type="email"
          value={formData.email}
          onChange={(event) => handleChange(event, "email")}
        />
        <Input
          placeholder="Enter password"
          type="password"
          value={formData.password}
          onChange={(event) => handleChange(event, "password")}
        />
        <Input
          placeholder="Enter age"
          type="number"
          value={formData.age}
          onChange={(event) => handleChange(event, "age")}
        />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default State;
