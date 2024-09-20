"use client";

import { handleGoogleLogin } from "@/components/handleGoogleLogin";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export const LogInPage: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-0 left-0 p-4">
        <Link href={"/"}>
          <Image src="/favicon.ico" alt="" width={52} height={52} />
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="flex justify-center">
          <button
            className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
            onClick={() => handleGoogleLogin()}
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
