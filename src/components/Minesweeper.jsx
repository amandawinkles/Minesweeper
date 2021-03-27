import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spectral', serif;
    background-color: #333333;
  }
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: .75rem;
  color: #e6e6e6;
`;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 640px;
  width: 560px;
  border-style: outset;
  border-width: 8.5px;
  border-color: #ffffff #c5c7c8 #c5c7c8 #ffffff;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1.3rem 0rem 1.3rem 0rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  width: 460px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 8.2px 30px 8.2px 30px;
`;

const MinesWrapper = styled.div`
  padding: 4px 24px 4px 24px;
  position: relative;
  margin: auto;
`;

const TimeWrapper = styled.div`
  padding: 4px 24px 4px 24px;
  position: relative;
  margin: auto;
`;

const HeaderText = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const MinesWindow = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const TimeWindow = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const FooterContainer = styled.div`
  height: 48px;
  width: 460px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  margin: auto;
  padding: 8.2px 30px 8.2px 30px;
`;

const NewGameButton = styled.div`
  height: 24px;
  width: 114px;
  border-width: 2.5px;
  padding: 2px 1.5px 2.6px 1.5px;
  margin: auto;
  &:focus {outline:0;};
  border-style: outset;
  border-color: #ffffff #dadcdd #dadcdd #ffffff;
  justify-content: center;
  text-align: center;
`;

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      win: false,
      lose: false,
      minesLeft: 0,
      currentTime: Date.now(),
      startTime: Date.now(),
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
    this.handleNewGameClick = this.handleNewGameClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.state.win && !this.state.lose) {
        this.setState({
          time: Date.now()
        });
      }
    }, 1000);
  }

  handleNewGameClick(e) {
    e.preventDefault();
    //create board/matrix
    const board = Array(10).fill(0).map(() =>
      Array(10).fill(0)
    );
    //place 10 bombs randomly on new board
    let bombs = 0;
    while (bombs < 10) {
      //select random row & column junction
      const randRow = Math.floor(Math.random() * 10);
      const randCol = Math.floor(Math.random() * 10);
      console.log(board[randRow][randCol]);
      //place bomb if space = 0
      if (board[randRow][randCol] === 0) {
        board[randRow][randCol] = 10;
        //increase bombs count
        bombs++;
      }
    }
    //check number of bombs around each cell, increment cell value for each bomb
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let count = 0;
        if (board[i][j] !== 10) {
          if (i < 9 && j < 9 && board[i + 1][j + 1] === 10) {
            count++;
          }
          if (i < 9 && j > 0 && board[i + 1][j - 1] === 10) {
            count++;
          }
          if (i < 9 && board[i + 1][j] === 10) {
            count++;
          }
          if (j < 9 && board[i][j + 1] === 10) {
            count++;
          }
          if (i > 0 && j > 0 && board[i - 1][j - 1] === 10) {
            count++;
          }
          if (i > 0 && board[i - 1][j] === 10) {
            count++;
          }
          if (i > 0 && j < 9 && board[i - 1][j + 1] === 10) {
            count++;
          }
          if (j > 0 && board[i][j - 1] === 10) {
            count++;
          }
          board[i][j] = count;
        }
      }
    }
    console.log('board 3: ', board);
    this.setState({
      board: board,
      minesLeft: bombs
    });
  }

  handleClick(x, y) {

  }

  handleFlag(x, y) {

  }

  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <Title>
          <h2>M I N E S W E E P E R</h2>
        </Title>
        <Container>
          <HeaderContainer>
            <MinesWrapper>
              <HeaderText>mines:</HeaderText>
              <MinesWindow>2</MinesWindow>
            </MinesWrapper>
            <TimeWrapper>
              <HeaderText>time:</HeaderText>
              <TimeWindow>095</TimeWindow>
            </TimeWrapper>
          </HeaderContainer>
          <Board board={this.state.board} win={this.state.win} lose={this.state.lose} minesLeft={this.state.minesLeft} currentTime={this.state.currentTime} startTime={this.state.startTime} counter={this.state.counter} handleClick={(x, y) => this.handleClick(x, y)} handleFlag={(x, y) => this.handleFlag(x, y)} />
          <FooterContainer>
            <NewGameButton>
              <button type="submit" value="New Game" onClick={this.handleNewGameClick}>NEW GAME</button>
            </NewGameButton>
          </FooterContainer>
        </Container>
      </div>
    );
  }
};

export default Minesweeper;
