import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import { value, AppContext } from "./ContextAPI";

const val = "xyz";

const App = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  console.log("Inner Width" + deviceWidth);
  const [theming, setTheming] = useState(true);
  const [news, setNews] = useState([]);
  const [newsCount, setNewsCount] = useState(12);
  const [currency, setCurrency] = useState("inr");
  const [state, setState] = useState(false);
  // const [mobileView, setMobileView] = useState(false);

  const tColor = "";

  return (
    <AppContext.Provider
      value={{
        news,
        setNews,
        newsCount,
        currency,
        setCurrency,
        deviceWidth,
        setDeviceWidth,
        state,
        setState,
        theming,
        setTheming,
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
