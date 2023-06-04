"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import { client, urlFor } from "@/client";

const Hook = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "project"]|order(orderRank)';

    // if (contentData.length === 0) {
    setIsLoading(true);
    client.fetch(query).then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
    // }
  }, []);
  return {
    projects,
    isLoading,
  };
};

export default Hook;
