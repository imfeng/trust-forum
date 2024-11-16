/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
"use client";

import Link from "next/link";

// import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { signIn, signOut, useSession } from "next-auth/react";
import CustomRainbowKitConnectButton from "../CustomRainbowKitConnectButton";

const paths = [
  {
    path: "/",
    name: "Ongoing Polls",
  },
];

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="shadow-md">
      {/* HEADER */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-xl text-primary">
          <Link href={"/"}>
            <h2 className="font-bold">True Forum</h2>
          </Link>
        </div>

        {/* NAVIGATIONS */}
        <div className="flex items-center space-between text-primary font-bold">
          {paths.map((path) => (
            <Link
              key={path.path}
              href={path.path}
              className={`transition-all duration-200 mr-6`}
            >
              {path.name}
            </Link>
          ))}
          {session ? (
            <>
              <button
                onClick={() => {
                  // logout();
                  signOut();
                }}
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Hello {session?.user?.name} Logout
              </button>

              <a
                href="/profile"
                className="text-white bg-blue-400 rounded px-3 py-1"
              >
                Profile
              </a>
            </>
          ) : (
            <>
              <button onClick={() => signIn("worldcoin")}>
                Sign In with Worldcoin
              </button>
            </>
          )}
          <CustomRainbowKitConnectButton />
          <Link href="/polls/create">
            <button className="bg-primary text-black ml-6 rounded-md px-3 py-1">
              Create Poll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
