import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Dog } from "lucide-react";
import { Cat } from "lucide-react";
import { Bird } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ul className="container mx-auto flex h-16 items-center justify-between px-4">
          <li>
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Animal App
              </span>
            </Link>
          </li>
          <ul className="flex items-center space-x-3 md:space-x-5">
            <li className="flex rounded-3xl border-2 p-2 text-gray-600 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 focus:text-blue-700 focus:outline active:ring-2">
              <Link href="/dogs">
                <Dog />
              </Link>
            </li>
            <li className="flex rounded-3xl border-2 p-2 font-bold text-gray-600 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500">
              <Link href="/cats">
                <Cat />
              </Link>
            </li>
            <li className="flex rounded-3xl border-2 p-2 font-bold text-gray-600 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500">
              <Link href="/birds">
                <Bird />
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}
