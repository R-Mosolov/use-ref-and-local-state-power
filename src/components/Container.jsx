import React from 'react';

export const Container = () => {
  return (
    <>
      {[...new Array(50)].map((gc, i) => {
        return [...new Array(365)].map((lc, j) => {
          return (
            <div>
              {`i=${i}, j=${j}`}
            </div>
          );
        })
      })}
    </>
  );
};