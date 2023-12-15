import { useState } from "react";
import cn from 'classnames';

export const Cell = ({ i, j, ref }) => {
  const [isChanged, setChange] = useState(false);

  // const handleHover = () => {
  //   setChange(status => !status);
  // };

  const handleChick = (ref) => {
    setChange(status => !status);

    if (ref?.current) {
      ref.current = `${i}-${j}`;
    }
  };

  return (
    <div 
      className={cn("cell", { 'clicked': isChanged })} 
      onClick={() => handleChick(ref)}
      // onMouseOver={handleHover} 
      // onMouseOut={handleHover}
    >
      {`i=${i}, j=${j}`}
    </div>
  );
};