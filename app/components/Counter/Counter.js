import React, { PropTypes } from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="Counter">
    <h3 className="Counter-value">counter: {value}</h3>
    <div className="Counter-controls">
      <button type="button" onClick={() => onIncrement()}>+1</button>
      <button type="button" onClick={() => onDecrement()}>-1</button>
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

export default Counter;
