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
    <Td onClick={() => this.props.handleClick()}
        onContextMenu={(e) => {
          e.preventDefault();
          this.props.handleFlag();
        }} >
    </Td>
  );
};

export default Cell;