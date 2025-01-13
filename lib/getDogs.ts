import { DOGS_API_RANDOM_IMAGE_PATH } from "@/constants/paths";
import { DogApiResponse } from "@/types";

export async function getDogs(): Promise<DogApiResponse> {
  const url = new URL(DOGS_API_RANDOM_IMAGE_PATH + "/" + 48);

  const res = await fetch(url, {
    next: { revalidate: 5, tags: ["dogs"] },
  });

  if (!res.ok) {
    throw new Error("Fetch error");
  }

  return res.json();
}