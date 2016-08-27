import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from 'actions/counter';
import Counter from 'components/Counter/Counter';

class Home extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div className="Home">
        <Counter value={counter} onIncrement={increment} onDecrement={decrement} />
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({ counter });
export default connect(mapStateToProps, { increment, decrement })(Home);
