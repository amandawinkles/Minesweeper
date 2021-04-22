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

// const OpenTd = styled.td`
//   height: 46px;
//   width: 46px;
//   color: e6e6e6;
//   padding: 0.5rem;
//   text-align: center;
//   border-style: none;
//   font-weight: bold;
//   font-size: 1.2em;
//   box-sizing: border-box;
// `;

const Cell = (props) => { //key, handleClick, handleFlag, cellClicked, cellValue
  //check cellClicked state
  // if (props.cellClicked) {
  //   if (props.cellValue === 10) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //         {
  //           <img alt="mine" src="bomb.png" height="15" />
  //         }
  //       </OpenTd>
  //     );
  //   } else if (props.cellValue === 0) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //       </OpenTd>
  //     );
  //   } else if (props.cellValue === 1) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //         {
  //           <img alt="1" src="one.png" height="15" />
  //         }
  //       </OpenTd>
  //     );
  //   } else if (props.cellValue === 2) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //         {
  //           <img alt="2" src="two.png" height="15" />
  //         }
  //       </OpenTd>
  //     );
  //   } else if (props.cellValue === 3) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //         {
  //           <img alt="3" src="three.png" height="15" />
  //         }
  //       </OpenTd>
  //     );
  //   } else if (props.cellValue === 4) {
  //     return (
  //       <OpenTd onClick={() => props.handleClick()}
  //       onContextMenu={(e) => {
  //         e.preventDefault();
  //         props.handleFlag();
  //       }} >
  //         {
  //           <img alt="4" src="four.png" height="15" />
  //         }
  //       </OpenTd>
  //     );
  //   }
  // } else {
    return (
      <Td onClick={() => props.handleClick()}
          onContextMenu={(e) => {
            e.preventDefault();
            props.handleFlag();
          }} >
      </Td>
    );
  // }
};

export default Cell;