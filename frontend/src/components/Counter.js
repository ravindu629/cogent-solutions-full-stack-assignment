import React, { useState, useEffect } from "react";

export default function Counter() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-08-09T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="counter-section bg-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="counter-text">
              <span>Event Date</span>
              <h3>
                Count Every Second <br />
                Until the Event
              </h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cd-timer" id="countdown">
              <div className="cd-item">
                <span>{timeLeft.days}</span>
                <p>Days</p>
              </div>
              <div className="cd-item">
                <span>{timeLeft.hours}</span>
                <p>Hours</p>
              </div>
              <div className="cd-item">
                <span>{timeLeft.minutes}</span>
                <p>Minutes</p>
              </div>
              <div className="cd-item">
                <span>{timeLeft.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
