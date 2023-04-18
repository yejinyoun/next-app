import Head from "next/head";
import Image from "next/image";

export default function Dogs({ data }) {
  const { content } = data;
  const { image } = content;

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width:750px)100vw, 750px"
      />
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);

  // If no data - no page (404)
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map((object) => {
    return { params: { slug: object.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
