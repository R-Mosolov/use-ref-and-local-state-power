import { useState } from "react";
import cn from 'classnames';

export const Cell = ({ i, j, data }) => {
  const [isChanged, setChange] = useState(false);

  const handleClick = (data) => {
    setChange(status => !status);
    data[`${i}-${j}`] = `${i}-${j}`;
    console.log('data', data);
  };

  return (
    <div 
      className={cn("cell", { 'clicked': isChanged })} 
      onClick={() => handleClick(data)}
      onMouseOver={() => handleClick(data)}
      onMouseOut={() => handleClick(data)}
    >
      {`i=${i}, j=${j}`}
    </div>
  );
};