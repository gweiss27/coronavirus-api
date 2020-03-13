import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <h1>CoronaVirus API</h1>
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector></CountrySelector>
        </div>
    );
}

export default App;
