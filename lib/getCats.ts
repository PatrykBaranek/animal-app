import { CATS_API_PATH } from "@/constants/paths";
import { CatApiResponse } from "@/types/CatsApi";

export async function getCats(): Promise<CatApiResponse[]> {
  const url = new URL(CATS_API_PATH);
  url.searchParams.set("limit", "100");

  const res = await fetch(url, {
    headers: {
      "x-api-key": String(process.env.CATS_API_KEY),
    },
    next: { revalidate: 5, tags: ["cats"] },
  });

  if (!res.ok) {
    throw new Error("Can't fetch cats images");
  }

  return res.json();
}