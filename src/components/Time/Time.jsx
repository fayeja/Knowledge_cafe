import React from 'react';
import './Time.css'

const Time = (props) => {
  const time = props.time;
 
  let total_min = 0;

  for (const min of time) {
    console.log(min.Read_time)
    total_min = total_min + min.Read_time;
  }
    return (
        <div>
            <h2>Spent time on read: {total_min} min</h2>
        </div>
    );
};

export default Time;