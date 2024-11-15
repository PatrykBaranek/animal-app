import Image from "next/image";
import { getCats } from "@/lib/getCats";
import ImageGallery from "@/components/ImageGallery";

export default async function CatsPage() {
  const cats = await getCats();

  return (
    <ImageGallery
      data={cats}
      renderItems={(item) => (
        <div className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <Image
            unoptimized
            src={item.url}
            fill
            alt="cat photo"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    />
  );
}
