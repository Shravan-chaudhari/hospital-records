import React from "react";
import styled from "styled-components";

function SearchForm() {
  return (
    <Container>
      <h4>Get the Details</h4>
      <form>
        <label>
          Name: <br />
          <input placeholder="Enter the patient name" type="text" />
        </label>
        <label>
          Phone Number:
          <br />
          <input placeholder="Enter ther phone no." type="tel" />
        </label>
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}

export default SearchForm;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 60px;
  background-color: #ffffff;
  padding: 40px;
  width: 50%;
  border: 4px solid grey;
  border-radius: 12px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h4 {
    margin-bottom: 24px;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
  }
  label {
    cursor: pointer;
    font: 20px "opensans-bold", sans-serif;
    color: #2f3131;
    margin-bottom: 5px;
  }
  input {
    cursor: pointer;
  width: 500px;
  padding: 8px 8px;
  color: #000;
  margin-bottom: 10px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  border-radius: 10px;
  border: 2px solid grey;
  margin-bottom: 30px;
  margin-top: 10px;
}
  }
  button {
    width: 220px;
  height: 65px;
  border: none;
  outline: none;
  color: #fff;
  background: #1e4775;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 20px;
`;
