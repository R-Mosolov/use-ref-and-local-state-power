import { useState } from "react";
import cn from 'classnames';

export const Cell = ({ i, j, data }) => {
  const [isChanged, setChange] = useState(false);

  const handleChick = (data) => {
    setChange(status => !status);
    data[`${i}-${j}`] = `${i}-${j}`;
  };

  return (
    <div 
      className={cn("cell", { 'clicked': isChanged })} 
      onClick={() => handleChick(data)}
    >
      {`i=${i}, j=${j}`}
    </div>
  );
};