import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  console.log(
    "🚀 ~ file: [slug].js ~ line 4 ~ getServerSideProps ~ pageContext",
    pageContext
  );
  const url = process.env.ENDPOINT;
  const {
    query: { slug: pageSlug },
  } = pageContext;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPHQL_CMS_TOKEN,
    },
  });
  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
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
        mp4 {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, { pageSlug });
  console.log(
    "🚀 ~ file: [slug].js ~ line 39 ~ getServerSideProps ~ data",
    data
  );
  const video = data.video;
  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }) => {
  console.log("🚀 ~ file: [slug].js ~ line 47 ~ Video ~ video", video);
  return <div></div>;
};

export default Video;
