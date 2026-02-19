import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [data, setdata] = useState("");
  const [info, setinfo] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function getdata() {
      const get = await fetch("https://api.adviceslip.com/advice");
      const res = await get.json();
      setdata(res.slip.advice);
    }
    getdata();
  }, [info]);

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="app">
      
      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="card">
        <h1 className='heading'>{data}</h1>
        <button 
          className='button' 
          onClick={() => setinfo(info + 1)}
        >
          <span>TODAY's ADVICE!</span>
        </button>
      </div>

    </div>
  )
}

export default App;