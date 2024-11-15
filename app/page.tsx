import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532353949707-2e77707ee8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-gradient-to-r from-rose-400 backdrop-blur-3xl">
      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 gap-5 p-7 md:grid-cols-4 lg:grid-cols-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative w-72 cursor-pointer transition hover:z-20"
          >
            <Image
              src={src}
              fill
              className="rounded-lg object-cover transition group-hover:scale-105"
              alt="wallpaper"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
