import { CATS_API_PATH } from "@/constants/paths";
import Image from "next/image";

async function getCats() {
  const url = new URL(CATS_API_PATH);
  url.searchParams.set("limit", "10");

  const res = await fetch(CATS_API_PATH, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": String(process.env.CATS_API_KEY),
    },
  });

  if (!res.ok) {
    throw new Error("Can't fetch cats images");
  }

  return res.json();
}

export default async function CatsPage() {
  const cats = await getCats();

  console.log(cats.breeds);

  return (
    <section>
      <h1>Cats Page</h1>
      <Image
        src={cats.url}
        alt="cat photo"
        width={cats.width}
        height={cats.height}
      />
    </section>
  );
}
