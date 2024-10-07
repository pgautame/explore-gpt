"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const GuestCredentials = () => {
  const guestEmail = process.env.NEXT_PUBLIC_GUEST_EMAIL;
  const guestPassword = process.env.NEXT_PUBLIC_GUEST_PASSWORD;

  const [showCredentials, setShowCredentials] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect will run after the component mounts
    setIsMounted(true);
  }, []);

  const handleToggleCredentials = () => {
    setShowCredentials((prev) => !prev);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert("Copied to clipboard");
        let message = text.includes("@") ? "Email" : "Password";
        toast.success(`${message} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  if (!isMounted) return null; // Prevent rendering until the component is mounted

  return (
    <div>
      <Toaster position="top-center" />
      {/* View Guest Credentials Button */}
      <button
        onClick={handleToggleCredentials}
        className="bg-blue-500 text-white px-4 py-2 mb-6 rounded-xl hover:bg-blue-600 transition"
      >
        Guest Credentials
      </button>

      {/* Guest Credentials Container */}
      {showCredentials && (
        <div className="p-4 bg-white rounded-xl shadow-lg mb-4 border-solid border border-slate-200">
          {/* Email Section */}
          <div className="mb-2">
            <p className="font-bold">Email:</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">{guestEmail}</span>
              <button
                onClick={() => copyToClipboard(guestEmail)}
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-lg transition"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Password Section */}
          <div>
            <p className="font-bold">Password:</p>
            <div className="flex items-center space-x-2 space-y-1">
              <span className="text-gray-700">{guestPassword}</span>
              <button
                onClick={() => copyToClipboard(guestPassword)}
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-lg transition"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(GuestCredentials);
