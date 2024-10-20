import React from 'react';

const ChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <h4>{payload[0].name}</h4>
        <p>{`Amount: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default ChartTooltip;
