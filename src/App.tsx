// import React from "react";
// import { app, Menu } from "electron";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomescreen from "./screens/Welcomescreen.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomescreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
