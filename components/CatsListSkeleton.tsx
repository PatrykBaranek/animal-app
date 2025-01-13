import { Skeleton } from "@/components/ui/skeleton";

export default function CatsListSkeleton() {
  return (
    <>
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg shadow-md"
        >
          <Skeleton className="h-full w-full bg-gray-600 object-cover" />
        </div>
      ))}
    </>
  );
}
