import React from 'react';
import styled from "styled-components";
import Cell from './Cell.jsx';
import mine from '../../assets/bomb.png';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';



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

const OpenTd = styled.td`
  height: 46px;
  width: 46px;
  color: e6e6e6;
  padding: 0.5rem;
  text-align: center;
  border-style: none;
  font-weight: bold;
  font-size: 1.2em;
  box-sizing: border-box;
`;

const Board = (props) => { //board, win, lose, minesLeft, currentTime, startTime, counter, cellClicked, cellValue, handleClick, handleFlag
  const { board, win, lose, minesLeft, currentTime, startTime, counter, cellClicked, cellValue, handleClick, handleFlag } = props;
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
                      //check cellClicked state
                      if (cellClicked) {
                        if (cellValue === 10) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                              {
                                <img alt="mine" src={mine} height="15" />
                              }
                            </OpenTd>
                          );
                        } else if (cellValue === 0) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                            </OpenTd>
                          );
                        } else if (cellValue === 1) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                              {
                                <img alt="1" src={one} height="15" />
                              }
                            </OpenTd>
                          );
                        } else if (cellValue === 2) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                              {
                                <img alt="2" src={two} height="15" />
                              }
                            </OpenTd>
                          );
                        } else if (cellValue === 3) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                              {
                                <img alt="3" src={three} height="15" />
                              }
                            </OpenTd>
                          );
                        } else if (cellValue === 4) {
                          return (
                            <OpenTd
                            key={colIndex}
                            onClick={() => handleClick()}
                            onContextMenu={(e) => {
                              e.preventDefault();
                              handleFlag();
                            }} >
                              {
                                <img alt="4" src={four} height="15" />
                              }
                            </OpenTd>
                          );
                        }
                      }
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

/*
{
      //check cellClicked state
      if (this.state.cellClicked) {
        if (this.state.cellValue === 10) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
              {
                <img alt="mine" src="assets/bomb.png" height="15" />
              }
            </OpenTd>
          );
        } else if (this.state.this.state.cellValue === 0) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
            </OpenTd>
          );
        } else if (this.state.cellValue === 1) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
              {
                <img alt="1" src="assets/one.png" height="15" />
              }
            </OpenTd>
          );
        } else if (this.state.cellValue === 2) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
              {
                <img alt="2" src="assets/two.png" height="15" />
              }
            </OpenTd>
          );
        } else if (this.state.cellValue === 3) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
              {
                <img alt="3" src="assets/three.png" height="15" />
              }
            </OpenTd>
          );
        } else if (this.state.cellValue === 4) {
          return (
            <OpenTd onClick={() => this.state.handleClick()}
            onContextMenu={(e) => {
              e.preventDefault();
              this.state.handleFlag();
            }} >
              {
                <img alt="4" src="assets/four.png" height="15" />
              }
            </OpenTd>
          );
        }
      }
    }
*/