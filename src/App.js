import React, { createContext, useContext, useMemo } from "react";
import "./App.css";

import UserIcon from "./user.png";
import AdminIcon from "./admin.png";
import Header from "./Components/Header";
import Main from "./Components/Main";

const labels = {
  user: {
    role: "user",
    firstName: "Basic",
    lastName: "User",
    headerWithIcon: true,
    assignedTheme: "blue",
    orgName: "GEICO",
    headerIcon: UserIcon,
  },
  admin: {
    role: "Admin",
    firstName: "Super",
    lastName: "Admin",
    headerWithIcon: false,
    assignedTheme: "red",
    orgName: "GEICO",
    headerIcon: AdminIcon,
  },
};

export const AppContext = createContext(labels);

function App() {
  const label = useMemo(
    () =>
      window.location.pathname.includes("user") ? labels.user : labels.admin,
    []
  );
  return (
    <div className="App">
      <AppContext.Provider value={label}>
        <Header />
        <Main />
        <Header />
      </AppContext.Provider>
    </div>
  );
}

export default App;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
