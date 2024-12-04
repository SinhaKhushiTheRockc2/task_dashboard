import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Navbar from "./components/navbar/Navbar";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { useThemeValue } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const {theme}=useThemeValue();
  const [sidebarVisibility,setSideBarVisibility]=useState(false);
  return (
    <div className={`${theme} app`}>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar setSideBarVisibility={setSideBarVisibility}/>
        {sidebarVisibility && <Sidebar setSideBarVisibility={setSideBarVisibility}/>}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
