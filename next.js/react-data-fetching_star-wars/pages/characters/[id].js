import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const dynamicId = router.query.id;
  const {
    data: cha,
    error,
    isLoading,
  } = useSWR(`https://swapi.dev/api/people/${dynamicId}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={dynamicId}
        name={cha.name}
        height={cha.height}
        eyeColor={cha.eye_color}
        birthYear={cha.birth_year}
      />
    </Layout>
  );
}
