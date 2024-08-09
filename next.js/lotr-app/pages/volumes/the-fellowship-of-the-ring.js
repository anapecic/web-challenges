import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

const data = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function FellowshipPage() {
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
      <Link href="../volumes/the-two-towers">Next Volume</Link>
    </>
  );
}
