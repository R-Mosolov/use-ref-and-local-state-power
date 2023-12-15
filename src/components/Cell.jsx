import { useState } from "react";
import cn from 'classnames';

export const Cell = ({ i, j }) => {
  const [isChanged, setChange] = useState(false);

  const handleClick = () => setChange(status => !status);

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