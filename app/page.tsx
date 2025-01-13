import Image from "next/image";
import PedroGif from "@/assets/mapache-pedro.gif";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-svw items-center justify-center">
      <Image
        src={PedroGif}
        width={300}
        height={300}
        unoptimized
        alt="Pedro the raccoon"
      />
      <p>Main page not ready</p>
    </div>
  );
}
