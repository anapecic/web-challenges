import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const currentId = getProductById(id);

  response.json(currentId);
}
