import { useEffect, useRef, useState } from 'react'
import Timer from './pages/Timer'
import './App.css'

function App() {
  const initial = 120;
  const [timerValue, setTimerValue] = useState(initial);
  const interval = useRef(null);

  useEffect(() => {
    if (timerValue > 0 && !interval.current) {
      interval.current = setInterval(() => {
        setTimerValue(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (timerValue <= 0 && interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, [timerValue]);

  const stopTimer = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return (
    <>
      <Timer initial={timerValue} stopTimer={stopTimer} />
    </>
  )
}

export default App
