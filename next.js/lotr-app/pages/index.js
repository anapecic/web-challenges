import Link from "next/link";
import { introduction, volumes } from "../resources/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const allSlugs = volumes.map((volume) => {
    return volume.slug;
  });

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`./volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => router.push(`/volumes/${getRandomElement(allSlugs)}`)}
      >
        Random Volume
      </button>
    </div>
  );
}
