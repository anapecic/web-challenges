import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const data = volumes.find(({ slug }) => slug === "the-two-towers");
const index = volumes.findIndex(({ slug }) => slug === "the-two-towers");

export default function TowersPage() {
  console.log(data);

  return (
    <>
      <Link href="../">Back to Start</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book) => {
          return <li key={book.title}>{`${book.ordinal}: ${book.title}`}</li>;
        })}
      </ul>
      <Image alt={data.title} src={data.cover} width={140} height={230} />
      <br />
      <Link href={`../volumes/${volumes[index + 1].slug}`}>Next Volume</Link>
      <br />
      <Link href={`../volumes/${volumes[index - 1].slug}`}>
        Previous Volume
      </Link>
    </>
  );
}

// idea links: map over volumes and check for current index ->button next: index + 1, button previous: index -1
