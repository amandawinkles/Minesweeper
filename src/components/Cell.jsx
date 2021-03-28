import React from 'react';
import styled from "styled-components";


const Td = styled.td`
  height: 46px;
  width: 46px;
  color: e6e6e6;
  padding: 0.5rem;
  text-align: center;
  border-style: outset;
  border-color: #ffffff #dadcdd #dadcdd #ffffff;
  font-weight: bold;
  font-size: 1.2em;
  box-sizing: border-box;
`;

const Cell = (props) => { //key, handleClick, handleFlag
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