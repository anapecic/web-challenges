import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styled";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWR(`/api/products`);
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      mutate();
    }
    router.push("/");
  }
  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

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
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        ✏️
      </StyledButton>
      <StyledButton
        onClick={() => handleDeleteProduct(id)}
        disabled={isEditMode ? isEditMode : false}
      >
        ❌
      </StyledButton>
      {isEditMode ? <ProductForm onSubmit={handleEditProduct} /> : null}
      <br />
      <br />
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
