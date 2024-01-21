import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const LineChart = () => {

  //we may or may not get the json from URL but still initialize a placeholder  with empty array []
  const [data, setData] = useState([]);
  
  //below function reads from URL asynchronously 
  //only when the component mounts for 1 time
  useEffect(() => {
    asyncFetch();
  }, []);

  //we fetch sample json from internet URL which returns json
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };
  return <Line {...config} />;
};

export default LineChart;
