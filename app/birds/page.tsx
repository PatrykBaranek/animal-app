import { BIRDS_API_PATH } from "@/constants/paths";

async function getBirds() {
  const res = await fetch(
    BIRDS_API_PATH + "?family=Troglodytidae&hasImg=true",
    {
      headers: {
        "api-key": String(process.env.BIRDS_API_KEY),
      },
    },
  );

  if (!res.ok) {
    throw new Error("Can't fetch birds images");
  }

  return res.json();
}

export default async function BirdsPage() {
  const birds = await getBirds();

  console.log(birds);
  return (
    <section>
      <h1>Birds Page</h1>
    </section>
  );
}
