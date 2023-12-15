import React, { useEffect } from 'react';
import { Cell } from './Cell';
import { v4 as uuidv4 } from 'uuid';

export const Container = ({ ref, contRef }) => {
  useEffect(() => {
    contRef.current.addEventListener('click', () => {
      console.log('ref.current 3', ref?.current);
    });
  }, [ref]);

  return (
    <div className='container' ref={contRef}>
      {[...new Array(50)].map((_, i) => {
        return [...new Array(365)].map((_, j) => {
          return <Cell key={uuidv4()} i={i} j={j} ref={ref} />;
        })
      })}
    </div>
  );
};