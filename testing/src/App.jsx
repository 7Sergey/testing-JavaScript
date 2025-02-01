// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(null);

//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//   const handleClick = () => {
//     setToggle((toggle) => !toggle);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 1000);
//   }, []);

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello world</h1>
//       <button data-testid="toggle-btn" onClick={handleClick}>
//         Click me!
//       </button>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="input value..."
//         value={value}
//       ></input>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link data-testid="main-link" to="/">
          Main
        </Link>
        <Link data-testid="about-link" to="/about">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
