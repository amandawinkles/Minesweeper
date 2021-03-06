import React from 'react';
import styled from "styled-components";


const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
  border-style: outset;
  border-color: #ffffff #dadcdd #dadcdd #ffffff;
`;

const Cell = (props) => { //key
  return (
    <Td>

    </Td>
  );
};

export default Cell;

/**
 *
  handleCellClick: (x,y) => {
    dispatch(sweep(x,y));
  },
  handleRightClick: (x,y) => {
    dispatch(addFlag(x,y));
  }
 */