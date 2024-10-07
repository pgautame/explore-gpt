"use client";

import GuestCredentials from "@/components/GuestCredentials";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="flex flex-col space-y-4">
        <div className="w-full max-w-md">
          <GuestCredentials />
        </div>
        <div className="w-full max-w-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
