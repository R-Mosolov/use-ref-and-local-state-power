import React, { useEffect, useRef } from "react";
import { Container } from "./components/Container";
import './styles/App.css';

const App = () => {
  const ref = useRef([]);
  const contRef = useRef();

  const logOutput = (ref) => console.log('ref.current', ref?.current);

  useEffect(() => {
    console.log('ref.current 2', ref?.current);
  }, [ref?.current]);

  return (
    <div className="App">
      <button onClick={() => logOutput(ref)}>Показать измененные</button>
      <Container ref={ref} contRef={contRef} />
    </div>
  );
}

export default App;
