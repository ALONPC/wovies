import React from "react";
import { useEffect } from "react";

const Section = ({ videos, genre }) => {
  useEffect(() => {
    console.log("🚀 ~ file: Section.jsx ~ line 4 ~ Section ~ videos", videos);
  }, []);

  return <h3>{genre}</h3>;
};

export default Section;
