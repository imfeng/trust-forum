import Image from "next/image";
import { useState } from "react";

export default function DebateComments() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-[#2D2D2D] rounded-r-lg p-6 my-4 border-l-4 border-l-[#C9E052]">
      <div className="flex justify-between">
        <div className="flex items-start gap-4">
          <Image
            src="/shines_logo.png"
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full"
          />

          <div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">John Doe</span>
              <span className="text-gray-400 text-sm">@johndoe</span>
            </div>

            <p className="text-gray-300 mt-2">
              I believe humans are inherently good. We are born with empathy and
              compassion, though our experiences can shape how we express these
              innate qualities.
            </p>

            <span className="text-gray-500 text-sm mt-2 block">
              2 hours ago
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            {isLiked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
