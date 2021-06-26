import React from "react";
import styled from "styled-components";

function SearchForm() {
  return (
    <Container>
      <h4>Get the Details</h4>
      <form>
        <input placeholder="Enter the patient name" type="text" />
        <input placeholder="Enter ther phone no." type="tel" />
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
  background-color: white;
  padding: 40px;
  form {
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin-bottom: 24px;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
  }
  input {
    height: 40px;
    width: 50vw;
    border-radius: 5px;
    margin-bottom: 50px;
    background-color: white;
  }
  button {
    background-color: white;
  }
`;
