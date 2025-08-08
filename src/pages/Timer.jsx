const Timer = ({initial, stopTimer}) => {

  return (
    <div>
      <h1>Timer</h1>
      <p role="timer">{initial}</p>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
