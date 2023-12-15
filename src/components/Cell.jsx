import { useState } from "react";
import cn from 'classnames';

export const Cell = ({ i, j, contRef }) => {
  const [isChanged, setChange] = useState(false);

  const handleClick = () => {
    setChange(status => !status);

    // if (contRef?.current) {
    //   contRef.current = [
    //     ...contRef?.current,
    //     `${i}-${j}`
    //   ];
    // }
  };

  return (
    <div 
      className={cn("cell", { 'clicked': isChanged })} 
      onMouseOver={handleClick} 
      onMouseOut={handleClick}
      onClick={handleClick}
    >
      {`i=${i}, j=${j}`}
    </div>
  );
};