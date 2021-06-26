import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <SearchForm />
      </Body>
    </div>
  );
}

export default App;
const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
