import React, { useState } from "react";

const Register = () => {
  const [singleUser, setSingleUser] = useState({
    name: "",
    email: "",
    DOB: "",
    phoneNumber: "",
    city: ""
  });
  const [allUsers, setAllUsers] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: ""
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setSingleUser({ ...singleUser, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(singleUser);
  };

  return (
    <section className="form-container">
      <fieldset>
        <legend>Personal Details</legend>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={singleUser.name}
              onChange={handleChange}
              required
              placeholder="Enter name"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={singleUser.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
            />
          </div>
          <div className="DOB">
            <label htmlFor="DOB">Birthday: </label>
            <input
              type="date"
              name="DOB"
              id="DOB"
              value={singleUser.DOB}
              onChange={handleChange}
              required
            />
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={singleUser.phoneNumber}
              pattern="[0-9]{3}-[0-9]{8}"
              onChange={handleChange}
              required
              placeholder="e.g 08100000000"
            />
          </div>
          <div className="city">
            <label htmlFor="city">City: </label>
            <input
              type="text"
              name="city"
              id="city"
              value={singleUser.city}
              onChange={handleChange}
              required
              placeholder="e.g Onitsha"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </section>
  );
};

export default Register;
