import React from 'react';
import styled from "styled-components";
import Cell from './Cell.jsx';



const PuzzleContainer = styled.div`
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  height: 460px;
  width: 460px;
  padding: 0px 30px 0px 30px;
`;

const PuzzleTable = styled.table`
  height: 480px;
  width: 480px;
  display: grid;
  grid-template-rows: repeat(10, auto);
  grid-template-columns: repeat(10, auto);
  align-items: center;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
`;

const Board = (props) => {
  const { board, handleClick, handleFlag } = props;
  return (
    <PuzzleContainer>
      <PuzzleTable>
        <tbody>
          {
            board.map((row, rowIndex) => {
              return (
                <Tr key={rowIndex}>
                  {
                    row.map((cell, colIndex) => {
                      return (
                        <Cell key={colIndex}
                          handleClick={() => {
                            handleClick(colIndex, rowIndex)
                          }}
                          handleFlag={() => {
                            handleFlag(colIndex, rowIndex)
                          }}
                        />
                      );
                    })
                  }
                </Tr>
              );
            })
          }
        </tbody>
      </PuzzleTable>
    </PuzzleContainer>
  );
};

export default Board;


//board, onClick, win, lose, minesLeft, currentTime, startTime, counter, cellClicked, cellValue, handleClick, handleFlag

/* onClick={() => {
  onClick(colIndex, rowIndex)
}}
*/