export const Cell = ({ i, j, data }) => {
  const handleMouseOver = (data) => {
    for (let k = 0; k < 14; k++) {
      const cell = document.querySelector(`.cell-${i}-${j+k}`);
      cell?.classList.add('changed');

      data[`${i}-${j+k}`] = `${i}-${j+k}`;
    }

    console.log('data', data);
  };

  const handleMouseOut = (data) => {
    for (let k = 0; k < 14; k++) {
      const cell = document.querySelector(`.cell-${i}-${j+k}`);
      cell?.classList.remove('changed');

      data[`${i}-${j+k}`] = `${i}-${j+k}`;
    }

    console.log('data', data);
  };

  return (
    <div 
      className={`cell cell-${i}-${j}`}
      onMouseOver={() => handleMouseOver(data)}
      onMouseOut={() => handleMouseOut(data)}
    >
      {`i=${i}, j=${j}`}
    </div>
  );
};