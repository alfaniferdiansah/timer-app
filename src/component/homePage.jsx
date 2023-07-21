import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [time, setTime] = useState({
      hour: '',
      min: '',
      sec: '',
      am_pm: '',
    });
  
    useEffect(() => {
      const updateClock = () => {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
  
        let d = hour < 12 ? 'AM' : 'PM';
        hour = hour > 12 ? hour - 12 : hour;
        hour = hour === 0 ? (hour = 12) : hour;
  
        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
  
        setTime({ hour, min, sec, am_pm: d });
      };
  
      const intervalId = setInterval(updateClock, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const handleIconClick = () => {
      setIsDarkMode((prev) => !prev);
    };
  
    return (
      <section className={isDarkMode ? "dark" : ""}>
        <div className="container">
          <div className={`icons ${isDarkMode ? "dark" : ""}`} onClick={handleIconClick}>
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </div>
          <div className="time">
            <div className="time-colon">
              <div className="time-text">
                <span className="num hour_num">{time.hour}</span>
                <span className="text">Hours</span>
              </div>
              <span className="colon">:</span>
            </div>
            <div className="time-colon">
              <div className="time-text">
                <span className="num min_num">{time.min}</span>
                <span className="text">Minutes</span>
              </div>
              <span className="colon">:</span>
            </div>
            <div className="time-colon">
              <div className="time-text">
                <span className="num sec_num">{time.sec}</span>
                <span className="text">Seconds</span>
              </div>
              <span className="am_pm">{time.am_pm}</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomePage
