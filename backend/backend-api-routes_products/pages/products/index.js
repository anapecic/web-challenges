import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products/", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>Fish Shop</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <p>{product.name}</p>
            </Link>
            {/* <p>{product.description}</p>
            <p>
              {product.price} {product.currency}
            </p>
            <p>{product.category}</p> */}
          </li>
        ))}
      </ul>
    </>
  );
}
