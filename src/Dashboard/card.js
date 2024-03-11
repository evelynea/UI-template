import React from 'react';
import Card from './cardLayout';
import stat from '../statistics.jpg'

const MyCard= () => {
  return (
    <>
    <div className=" mx-auto flex">
      <Card title="Total Subscribers" total="5000" percentage="40" />
      <Card title="Total frequency" total="3000" percentage="40" />
      <Card title="Total Feedback" total="800" percentage="40" />
    </div>

    </>
  );
};

export default MyCard;


