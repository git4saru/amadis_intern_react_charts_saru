/*
ChartSelector has 
1. a container/placeholder to put the chart and 
2. Dropdown to select a chart
*/
//Import React functionality useState 
import React, { useState } from 'react';
//Import individual chart components into ChartSelector.js
import StackedColumn from './StackedColumn';
import GroupedColumn from './GroupedColumn';
import DonutChart from './DonutChart';
import LineChart from './LineChart';

const ChartSelector = () => {
  //set default option in dropdown to line.
  const [selectedChart, setSelectedChart] = useState('line');
  
  //listener method to track DOM event changes in dropdown and
  //set the Chart on DOM containeer to match the selection
  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);//'event.target.value' will have the selected Chart option like Stacked,Grouped,Donut,Line etc
  };

  //HTML  Code which will be exported from this page and help us display the chart and drop down
  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>
      {/* Add style for  1.center alignment for chart and dropdown and 2.border around the chart */}
      
      
      {selectedChart === 'stackedColumn' && <StackedColumn />}
      {selectedChart === 'groupedColumn' && <GroupedColumn />}
      {selectedChart === 'donut' && <DonutChart />}
      {selectedChart === 'line' && <LineChart />}
      {/* selectedChart === 'stackedColumn' evaluates to true or false.
      If true, it injects the corresponding Chart component to the assigned space */}
      
      <label style={{ marginRight: '10px' }}>Select Chart Type:</label>
      {/* Add style for dropdown */}
      <select value={selectedChart} onChange={handleChartChange}>
        <option value="stackedColumn">Stacked Column Chart</option>
        <option value="groupedColumn">Grouped Column Chart</option>
        <option value="donut">Donut Chart</option>
        <option value="line">Line Chart</option>
      </select>
      {/* HTML code for dropdown. 'onChange' will listen for dropdown
      changes and trigger  'handleChartChange' listener function through events*/}
      
    </div>
  );
};

export default ChartSelector;
