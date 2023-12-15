import React, { useRef } from "react";
import { Container } from "./components/Container";
import './styles/App.css';

const App = () => {
  const ref = useRef();

  const logOutput = (ref) => console.log('ref.current', ref?.current);

  return (
    <div className="App">
      <button onClick={() => logOutput(ref)}>Показать измененные</button>
      <Container contRef={ref} data={ref} />
    </div>
  );
}

export default App;
