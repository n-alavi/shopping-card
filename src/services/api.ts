import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getProduct() {
  const { data } = await client.get("/products");
  return data;
}

export async function getSingleProduct(id: string | number) {
  const { data } = await client.get(`/products/${id}`);
  return data;
}

export async function Login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
