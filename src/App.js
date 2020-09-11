import React from 'react';
import ReactDOM from "react-dom";
import "./styles.scss";
import MortgageForm from "./components/MortgageForm";

function App() {
  return (
    <div className="App">
      <h1>Mortgage Caculator</h1>
      <MortgageForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);