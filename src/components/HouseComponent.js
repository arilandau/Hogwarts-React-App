import React from 'react';

class HouseComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      points: 0
    }
    this.addPoints = this.addPoints.bind(this);
    this.minusPoints = this.minusPoints.bind(this);
  }

  addPoints(event) {
    let newPoints = this.state.points + 10;
    this.setState({ points: newPoints });
  }

  minusPoints(event) {
    let newPoints = this.state.points - 10;
    this.setState({ points: newPoints });
  }

  render() {
    return(
      <div>
        <h2>{this.props.house}</h2>
        <p>Points: {this.state.points}</p>
        <div className="points" onClick={this.addPoints}>+</div>
        <div className="points" onClick={this.minusPoints}>-</div>
      </div>
    );
  }
};

export default HouseComponent;
