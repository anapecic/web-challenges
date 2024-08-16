import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Details() {
  const router = useRouter();
  const currentId = router.query.id;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${currentId}`, fetcher);

  console.log(product);
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading</p>;

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        {product.price} {product.currency}
      </p>
      <p>{product.category}</p>
    </div>
  );
}
