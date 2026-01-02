import React, { useEffect, useState } from 'react';
import './../styles/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{`You've been on this page for ${timer} seconds`}</div>;
};

export default App;
