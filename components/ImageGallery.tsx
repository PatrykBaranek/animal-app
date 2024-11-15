import { Suspense, Fragment } from "react";

interface ImageGalleryProps<T> {
  data: T[];
  renderItems: (item: T) => React.ReactNode;
  SkeletonComponent?: React.ElementType;
}

export default function ImageGallery<T>({
  data,
  renderItems,
  SkeletonComponent,
}: ImageGalleryProps<T>) {
  return (
    <div className="container mx-auto grid animate-fade-up grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      <Suspense fallback={SkeletonComponent ? <SkeletonComponent /> : null}>
        {data.map((item, index) => (
          <Fragment key={index}>{renderItems(item)}</Fragment>
        ))}
      </Suspense>
    </div>
  );
}
