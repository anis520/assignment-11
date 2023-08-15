"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <p className="bg-teal-400 text-white font-semibold text-2xl text-center p-5">
        Welcome to our website
      </p>
      <div className="flex bg-red-400 items-center justify-center gap-3 p-2">
        <Link href="/">
          <p
            className={` ${
              pathname == "/" && " bg-green-400"
            }  text-white font-semibold p-2 rounded-md  px-4 cursor-pointer`}
          >
            Home
          </p>
        </Link>

        <Link href="/blog">
          <p
            className={` ${
              pathname == "/blog" && " bg-green-400"
            }  text-white font-semibold p-2 rounded-md  px-4 cursor-pointer`}
          >
            {" "}
            Blog
          </p>
        </Link>
      </div>
    </>
  );
}
