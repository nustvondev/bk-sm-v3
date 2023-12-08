import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH_ROUTE } from "./constants/global";
import { Home, Login } from "./pages";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH_ROUTE.home} element={<Home />} />
        <Route path={PATH_ROUTE.login} element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
