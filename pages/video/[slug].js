import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const {
    query: { slug: pageSlug },
  } = pageContext;
  console.log(
    "🚀 ~ file: [slug].js ~ line 9 ~ getServerSideProps ~ pageSlug",
    pageSlug
  );
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
  return null;
  // return (
  //   <div>
  //     <Image className="video-image" src={url} alt={title}></Image>
  //     <div className="info">
  //       <p>{video.tags}</p>
  //       <p>{video.description}</p>
  //       <a href="/">go back</a>
  //       <button>PLAY</button>
  //     </div>
  //   </div>
  // );
};

export default Video;
