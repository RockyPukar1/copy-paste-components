import { useEffect, useState } from "react";

export default function Countdown() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  const handleSetCountdown = () => {
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const handleStopCountdown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="flex justify-center space-x-4 text-white text-lg">
        <div>
          <span className="font-bold">{days.toString().padStart(2, "0")}</span>{" "}
          days
        </div>
        <div>
          <span className="font-bold">{hours.toString().padStart(2, "0")}</span>{" "}
          hours
        </div>
        <div>
          <span className="font-bold">
            {minutes.toString().padStart(2, "0")}
          </span>{" "}
          minutes
        </div>
        <div>
          <span className="font-bold">
            {seconds.toString().padStart(2, "0")}
          </span>{" "}
          seconds
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-5">
      <h2 className="text-white text-2xl mb-4">
        {countdownStarted ? eventName : "Countdown Timer"}
      </h2>

      {countdownStarted && (
        <p className="text-gray-400 mb-4">{formatDate(eventDate)}</p>
      )}

      {countdownStarted ? (
        <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
          {formatTime(timeRemaining)}
        </div>
      ) : (
        <form className="bg-gray-700 rounded-lg p-5 w-full max-w-md">
          <label htmlFor="title" className="block text-white font-bold mb-1">
            Event Name
          </label>
          <input
            className="bg-gray-600 text-white w-full h-10 px-3 mb-4 rounded focus:outline-none"
            name="title"
            type="text"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <label
            htmlFor="date-picker"
            className="block text-white font-bold mb-1"
          >
            Event Date
          </label>
          <input
            className="bg-gray-600 text-white w-full h-10 px-3 mb-4 rounded focus:outline-none"
            name="date-picker"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSetCountdown}
            >
              Start
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleStopCountdown}
            >
              Stop
            </button>
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleResetCountdown}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
