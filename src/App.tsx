import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import Events from "./pages/Events/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
