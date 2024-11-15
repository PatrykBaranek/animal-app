import Image from "next/image";
import FoxGif from "@/assets/fox.gif";

export default function SplashScreenLoading() {
  return (
    <div className="absolute inset-0 z-50 flex h-screen flex-col items-center justify-center">
      <Image unoptimized src={FoxGif} width={300} height={300} alt="Jump Fox" />
    </div>
  );
}
