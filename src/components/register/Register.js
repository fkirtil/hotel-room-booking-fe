import "../../App.css";
import { React, useState } from "react";
import {useNavigate} from "react-router-dom";


function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedOption,
    };

    try {
      const response = await fetch('http://localhost:8080/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      const createdCustomer = result.id;
      console.log(createdCustomer)
      //navigate('/room', { state: { customerId } });
      const getResponse = await fetch(`http://localhost:8080/api/customers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!getResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedCustomer = await getResponse.json();
      console.log('Fetched Customer:', fetchedCustomer[0]);

      const customerId = fetchedCustomer[0].id;
      console.log('Customer ID:', customerId);

      navigate('/room', { state: { customerId } });
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedOption("");
  };

  return (
      <div className="Register">
        <h1>Kayıt Ol</h1>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name*</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                required
            />
            <label htmlFor="lastname">Last Name*</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                required
            />
            <label htmlFor="email">Enter Email* </label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
            />
            <label htmlFor="tel">Contact*</label>
            <input
                type="tel"
                name="contact"
                id="contact"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Mobile number"
                required
            />
            <label>Select your choice</label>
            <select
                name="select"
                id="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
            <button type="reset" value="reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
  );
}

export default Register;
