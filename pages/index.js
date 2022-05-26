import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useEffect } from "react";

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

  // const chosenRandomVideo = randomVideo(videos);
  // const {
  //   thumbnail: { url },
  //   title,
  // } = chosenRandomVideo;

  return (
    <div className={styles.app}>
      <div className={styles.mainVideo}>
        <div className={styles.imageContainer}>
          <Image
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
            layout="fill"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
