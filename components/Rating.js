const React = require('react');

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }


  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     audienceIncreasing: nextProps.rating > this.props.rating,
  //     audienceDecreasing: nextProps.rating < this.props.rating
  //   })
  // }

  componentWillReceiveProps(nextProps) {
    let trend;
    if (this.props.rating > nextProps.rating) {
      this.state = {
        increasing: false,
        decreasing: true
      };
    } else if (this.props.rating < nextProps.rating) {
      this.state = {
        increasing: true,
        decreasing: false
      };
    }
  }

  shouldComponentUpdate(nextProps) {

  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

module.exports = Rating;
