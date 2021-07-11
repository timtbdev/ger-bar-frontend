import Head from "@components/Head";
import Container from "@components/Container";
import Divider from "@components/Divider";
import { groq } from "next-sanity";
import { getClient, urlFor } from "@libs/sanity";
import Error from "next/error";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import getOgImage from "@libs/getOgImage";


interface Props {
  project: IProject;
  meta: IMeta;
  baseUrl: string;
  ogImage: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const project = await getClient().fetch(projectQuery);
  const meta = await getClient().fetch(metaDataQuery);
  const title = "Oh Hello there,";
  const subtitle = "Welcome to my portfolio";
  const image = process.env.NEXT_PUBLIC_BASE_URL + "profile.jpg";
  const ogImage = await getOgImage(
    `/timtb/post?title=${title}&subtitle=${subtitle}&image=${image}&url=${process.env.NEXT_PUBLIC_BASE_URL}`
  );
  return {
    props: {
      project,
      meta,
      ogImage,
    },
  };
}

export default function Home({ project, meta, ogImage }: Props) {
  const router = useRouter();
  const baseUrl = process.env.BASE_URL;

  if (!router.isFallback && !project && !meta) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        author={meta.author}
        date={meta.date}
        url={baseUrl}
        image={ogImage}
      />

      <Container>
      </Container>
    </>
  );
}
