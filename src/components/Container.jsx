import React from 'react';
import { Cell } from './Cell';

export const Container = () => {
  return (
    <div className='container'>
      {[...new Array(50)].map((gc, i) => {
        return [...new Array(365)].map((lc, j) => {
          return <Cell i={i} j={j} />;
        })
      })}
    </div>
  );
};