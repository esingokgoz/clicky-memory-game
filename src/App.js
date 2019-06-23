import React, { Component } from 'react';
import Header from './components/Header';
import Flower from './components/Flower';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Footer from './components/Footer';
import Alert from './components/Alert';
import './App.css';
import flowers from './flower.json';

class App extends Component {
  state = {
    flowers: flowers,
    statement: '',
    score: 0,
    topScore: 0,
    clicked: []
  }

  handleOnClick = id => {
    //check to see if id of the clicked img is already in the clicked array, if not, add it to the array
    if (!this.state.clicked.includes(id)) {
      this.setState({ clicked: this.state.clicked.concat(id) })

      const updatedScore = this.state.score + 1
      this.setState({
        score: updatedScore,
        statement: "Wooohoo, that's correct!"
      })

      //update topScore
      if (updatedScore >= this.state.topScore) {
        this.setState({ topScore: updatedScore })
      }

      //if score is max (12), show message and then reset values
      if (updatedScore === 12) {
        this.setState({
          flowers,
          statement: 'Congrats! You won!',
          score: 0,
          clicked: []
        })
      }
      //sort the flowers randomly
      this.setState({ flowers: this.state.flowers.sort(function (a, b) { return 0.5 - Math.random() }) })
    } else {
      //if the guess is incorrect, reset the values
      this.setState({
        flowers,
        statement: "uh oh! That was incorrect!",
        score: 0,
        clicked: []
      })
      this.setState({ flowers: this.state.flowers.sort(function (a, b) { return 0.5 - Math.random() }) })
    }
  }


  render() {
    return (
      <div>
        <Header
          statement={this.state.statement}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          <Row>
            {this.state.flowers.map(flowers => (
              <Col size="md-3" key={flowers.id} >
                <Flower
                  id={flowers.id}
                  image={flowers.image}
                  handleOnClick={this.handleOnClick} />
              </Col>
            ))}
          </Row>
        </Container>
        <Alert
          type="success"
          style={{ opacity: this.state.topScore === 12 ? 1 : 0, marginBottom: 10 }}
        >
          <h1 style={{ textAlign: "center" }}> {this.statement} </h1>

        </Alert>
        <Footer />
      </div>
    );
  }
}

export default App;