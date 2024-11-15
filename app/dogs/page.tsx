import { DOGS_API_RANDOM_IMAGE_PATH } from "@/constants/paths";
import DogImage from "@/components/DogImage";

async function getDogs(): Promise<DogApiResponse> {
  const res = await fetch(DOGS_API_RANDOM_IMAGE_PATH + "/" + 48, {
    next: { revalidate: 5, tags: ["dogs"] },
  });

  if (!res.ok) {
    throw new Error("Fetch error");
  }

  return res.json();
}

export default async function DogsPage() {
  const dogs = await getDogs();

  return (
    <section className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {dogs.message.map((src, index) => (
        <DogImage key={index} src={src} alt={`Dog photo number ${index + 1}`} />
      ))}
    </section>
  );
}
