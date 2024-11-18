import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="main">
      <nav className="nav">
         <img
          className="icon"
          src="https://oralens.com/wp-content/uploads/2022/08/Oralens-LOGO-164x143.png"
          alt="icon"
        /> 
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>User</p>
        <p>Appointments</p>
        
      </nav>
      <h1 className="h1">Patient Details</h1>
      <div className="dashboard ">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Name: &nbsp; &nbsp;
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="form-label">
            Age: &nbsp; &nbsp;
            <select name="age" value={formData.age} onChange={handleChange}>
              <option value="" disabled>
                Select your age
              </option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Or enter your age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
            {/* File Upload */}
        <label style={{ display: "block" }} className="form-label">
          File Upload:
          <div className="custom-file-upload">
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              style={{
                display: "none", // Hide the default file input
              }}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              style={{
                display: "inline-block",
                backgroundColor: "#5A58FF",
                color: "white",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                margin:'7px',
                marginLeft:"2px",
                width:"100px",
                transition: "0.3s",
              }}
               className="choose-file"
            >
              Choose File
            </label>
            <span
              style={{
                marginLeft: "10px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              {formData.file ? formData.file.name : "No file chosen"}
            </span>
          </div>
        </label>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default Dashboard;
