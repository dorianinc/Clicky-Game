import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import teams from "./teams.json";
import "./App.css";

function shuffleTeams(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    teams,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    console.log("NewScore: ", newScore)
    if (newScore === 12) {
      this.setState({
        topScore: newScore,
        currentScore: 0,
        rightWrong: "You win!",
        clicked: []
      })
      console.log("You Win!")
    }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You lose, try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledTeams = shuffleTeams(teams);
    this.setState({ teams: shuffledTeams });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Overwatch League Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each team, but don't hit any duplicates
        </Title>

        <Container>
          <Row>
            {this.state.teams.map(team => (
              <Column size="md-3 sm-6 ">
                <TeamCard
                  key={team.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={team.id}
                  image={team.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;