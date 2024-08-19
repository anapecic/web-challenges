import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>
        {data.reviews.map((review) => (
          <div
            key={review.title}
            style={{ border: "1px solid black", padding: "1rem" }}
          >
            <p style={{ fontWeight: "bold" }}>{review.title}</p>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
