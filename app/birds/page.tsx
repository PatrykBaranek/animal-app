import { getBirds } from "@/lib/getBirds";

export default async function BirdsPage() {
  const birds = await getBirds();

  return (
    <section>
      <h1>Birds Page</h1>
      <p>{JSON.stringify(birds)}</p>
    </section>
  );
}
