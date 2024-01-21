import React from 'react';
import { Pie } from '@ant-design/charts';

const DonutChart = () => {
  //data fed as hard coded values
  const config = {
    data: [
      { type: 'A', value: 27 },
      { type: 'B', value: 25 },
      { type: 'C', value: 18 },
      { type: 'D', value: 15 },
      { type: 'E', value: 10 },
      { type: 'F', value: 5 },
    ],
    //below we have configuration parameters for Pie chart
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    //below we have configuration parameters for legend
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  //Feed both of configuration and data to Pie of ant Design charts
  return <Pie {...config} />;
};

export default DonutChart;
