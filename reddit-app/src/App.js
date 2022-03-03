import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Home from "./components/Home";
import BestList from "./components/BestList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login/callback" element={<BestList/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
