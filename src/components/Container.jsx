import React from 'react';
import { Cell } from './Cell';
import { v4 as uuidv4 } from 'uuid';

export const Container = ({ contRef }) => {
  return (
    <div ref={contRef} className='container'>
      {[...new Array(50)].map((_, i) => {
        return [...new Array(365)].map((_, j) => {
          return <Cell key={uuidv4()} i={i} j={j} contRef={contRef} />;
        })
      })}
    </div>
  );
};