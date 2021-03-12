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
  display: grid;
`;

const PuzzleTable = styled.table`
  height: 410px;
  width: 460px;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Tr = styled.tr`
  display: grid;
`;

const Board = (props) => { //board, win, lose, minesLeft, currentTime, startTime, counter, handleClick, handleFlag
  return (
    <PuzzleContainer>
      <PuzzleTable>
        <tbody>
          {
            props.board.map((row, rowIndex) => {
              return (
                <Tr key={rowIndex}>
                  {
                    row.map((cell, colIndex) => {
                      return (
                        <Cell key={colIndex}
                          handleClick={() => {
                            this.props.handleClick(colIndex, rowIndex)
                          }}
                          handleFlag={() => {
                            this.props.handleFlag(colIndex, rowIndex)
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