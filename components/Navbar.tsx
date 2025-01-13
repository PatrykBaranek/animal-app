import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Cat, Dog } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="sticky left-0 top-0 z-50 mx-auto flex h-16 w-full justify-center bg-white px-4">
        <div className="container mx-auto flex items-center justify-center px-4 md:justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 font-sans text-3xl font-semibold text-gray-800">
              Animal App
            </span>
          </Link>
          <nav className="hidden h-16 items-center justify-center bg-white shadow-md backdrop-blur-sm md:flex">
            <ul className="flex justify-center gap-5">
              <li>
                <Link className="navbar-link" href="/dogs">
                  <Dog />
                  <span className="text-black">Dogs</span>
                </Link>
              </li>
              <li>
                <Link className="navbar-link" href="/cats">
                  <Cat />
                  <span className="text-black">Cats</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-center bg-white shadow-md backdrop-blur-sm md:hidden">
        <ul className="flex w-full justify-center gap-10">
          <li>
            <Link className="navbar-link" href="/dogs">
              <Dog />
              <span className="text-black">Dogs</span>
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/cats">
              <Cat />
              <span className="text-black">Cats</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
