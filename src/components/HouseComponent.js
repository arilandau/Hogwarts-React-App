import React from 'react';

class HouseComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPoints: 0
    }
    this.addPoint = this.addPoint.bind(this);
    this.minusPoint = this.minusPoint.bind(this);
  }

  addPoint(event) {
    let newTotal = this.state.totalPoints + 1;
    this.setState({ totalPoints: newTotal});
  }

  minusPoint(event) {
    let newTotal = this.state.totalPoints - 1;
    this.setState({ totalPoints: newTotal});
  }

  render() {
    return (
      <div>
        <h2>{this.props.house}</h2>
        <p>Points: {this.state.totalPoints}</p>
        <p><div className="points" onClick={this.addPoint}>+      </div><div className="points" onClick={this.minusPoint}>      -</div></p>
      </div>
    );
  }
};

export default HouseComponent;
