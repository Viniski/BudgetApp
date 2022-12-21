import React, {useState, useEffect} from "react";

import '../Clock/Clock.css';

function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      // console.log(interval);
    }, 1000);
  }, []);

  return <span>{time}</span>;
}

export default Clock;
