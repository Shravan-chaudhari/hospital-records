import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Head>
      <h3>Track patient records like a pro</h3>
    </Head>
  );
}

export default Header;
const Head = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e4775;
  h3 {
    background-color: #1e4775;
    font-size: 30px;
    color: white;
    font-family: "Open Sans", sans-serif;
  }
`;
