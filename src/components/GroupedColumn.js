// DemoColumn.js
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const GroupedColumn = () => {
  //we may or may not get the json from URL but still initialize a placeholder  with empty array []
  const [data, setData] = useState([]);
  
  //below function reads from URL asynchronously 
  //only when the component mounts for 1 time
  useEffect(() => {
    asyncFetch();
  }, []);

  //we fetch sample json from internet URL which returns json
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    colorField: 'type', // or seriesField in some cases
    color: ['#d62728', '#2ca02c', '#000000'],
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

export default GroupedColumn;
