import React from "react";
import { Container } from "./components/Container";
import './styles/App.css';

const App = () => {
  let data = [];

  const logOutput = (data) => console.log('data', data);

  return (
    <div className="App">
      <button onClick={() => logOutput(data)}>Показать измененные</button>
      <Container data={data} />
    </div>
  );
}

export default App;
