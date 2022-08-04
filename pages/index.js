import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useEffect } from "react";
import Section from "../components/Section";

import styles from "./index.module.css";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPHQL_CMS_TOKEN,
    },
  });
  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const { videos } = data;
  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {
  useEffect(() => {
    console.log(videos);
  }, []);

  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const chosenRandomVideo = randomVideo(videos);
  const {
    thumbnail: { url },
    title,
  } = chosenRandomVideo;

  const filterVideos = (videos, genre) =>
    videos.filter((videos) => videos.tags.includes(genre.toLowerCase()));

  return (
    <div className={styles.app}>
      <div className={styles.mainVideo}>
        <div className={styles.imageContainer}>
          <Image src={url} alt={title} layout="fill"></Image>
        </div>
      </div>
      <div className={styles.videoFeed}>
        <Section
          genre="Drama"
          videos={filterVideos(videos, "horror")}
        ></Section>
        <Section genre="Action"></Section>
        <Section genre="Crime"></Section>
      </div>
    </div>
  );
};

export default Home;
