import Image from "next/image";
import Head from "next/head";

export default function Henry({ data }) {
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

export async function getStaticProps() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/henry";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}
