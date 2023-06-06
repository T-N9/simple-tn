import React, { createContext, useState, useEffect } from "react";
import { client } from "../client";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    setIsLoading(true);
    // Check if data exists in context
    if (projectData) {
      setIsLoading(false);
      return;
    }
    try {
      // Fetch data from API

      const query = '*[_type == "project"]|order(orderRank)';

      // if (contentData.length === 0) {
      setIsLoading(true);
      client.fetch(query).then((data) => {
        setProjectData(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ projectData, isLoading, fetchProjectData }}>
      {children}
    </DataContext.Provider>
  );
};
