import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  console.log(router);
  const dynamicSlug = router.query.slug;

  const currentVolume = volumes.find(({ slug }) => slug === dynamicSlug);
  // const index = volumes.findIndex(({ slug }) => slug === dynamicSlug);

  if (!currentVolume) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
      <Link href="../">Back to Start</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => {
          return <li key={book.title}>{`${book.ordinal}: ${book.title}`}</li>;
        })}
      </ul>
      <Image
        alt={currentVolume.title}
        src={currentVolume.cover}
        width={140}
        height={230}
      />
      <br />
      {/* <Link href={`../volumes/${volumes[index + 1].slug}`}>Next Volume</Link>
      <Link href={`../volumes/${volumes[index - 1].slug}`}> 
        Previous Volume
      </Link> */}
    </>
  );
}

//add conditional rendering of previous / next
