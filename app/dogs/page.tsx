import CatsListSkeleton from "@/components/CatsListSkeleton";
import DogImage from "@/components/DogImage";
import ImageGallery from "@/components/ImageGallery";
import { getDogs } from "@/lib/getDogs";

export default async function DogsPage() {
  const dogs = await getDogs();

  return (
    <ImageGallery
      data={dogs.message}
      renderItems={(item) => <DogImage src={item} alt="Dog photo" />}
      SkeletonComponent={CatsListSkeleton}
    />
  );
}
