import React, { createContext, useEffect, useState } from "react";

import request from "../helpers/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [curses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  const fetchData = async () => {
    const { data } = await request.get("/courses");
    setCourses(data.courses);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const newLocal = (curses, setCourses, user, setUser);
  return <StoreContext.Provider value={newLocal}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
