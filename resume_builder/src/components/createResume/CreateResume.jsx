import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CreateResume = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: "",
    company: "",
    experience: "",
    designation: "",
    degree: "",
    skill: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log('text',text);
    // console.log(name, email, address, phone, education, company, experience, designation, degree, skill);
  }

  return (
    <div className="formContainer">
      <TextField
        name="name"
        id="outlined-required"
        label="Name"
        type="text"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="email"
        id="outlined-required"
        label="Email"
        type="email"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="address"
        id="outlined-required"
        label="Address"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        id="outlined-required"
        label="Phone"
        type="tel"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        required
        name="education"
        id="outlined-required"
        label="Add Education"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="company"
        id="outlined-required"
        label="Add Company"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="experience"
        required
        id="outlined-required"
        label="Experience"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="designation"
        id="outlined-required"
        label="Designation"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="degree"
        id="outlined-required"
        label="Degree"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <TextField
        name="skill"
        id="outlined-required"
        label="Add Skill"
        style={{ width: 700, marginTop: "10px" }}
        onChange={handleChange}
      />
      <br />
      <Button className="button" onClick={onSubmit}>Add</Button>
    </div>
  );
};

export default CreateResume;
