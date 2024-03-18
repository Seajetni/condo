import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="grid grid-cols-2 w-full  items-center  p-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className=" text-3xl">
        Logo
      </div>

    </div>
  );
}
