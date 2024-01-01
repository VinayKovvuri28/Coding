import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <p className="lead fw-medium clock">
      {date.toLocaleDateString()}&nbsp;&&nbsp;{date.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
