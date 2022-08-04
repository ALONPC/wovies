import React from "react";
import { useEffect } from "react";
import { Card } from "./Card";

const Section = ({ videos, genre }) => {
  useEffect(() => {
    console.log("🚀 ~ file: Section.jsx ~ line 4 ~ Section ~ videos", videos);
  }, []);

  return (
    <div className="section">
      <h3>{genre}</h3>
      <div className="video-feed">
        {videos.map((video) => (
          <a key={video.id} href={`/video/${video.slug}}`}>
            <Card thumbnail={video.thumbnail}></Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section;
