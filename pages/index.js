import { gql, GraphQLClient } from "graphql-request";
import { useEffect } from "react";

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

  return <div>{JSON.stringify(videos)}</div>;
};

export default Home;
