import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;

  return (
    <>
      <h1>
        {character.firstName} {character.lastName}
      </h1>
      <p>{character.profession}</p>
    </>
  );
}
