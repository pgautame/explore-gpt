"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateChatResponse } from "@/utils/actions";
import { FaUser } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { fetchUserTokensById, subtractTokens } from "@/utils/actions";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { userId } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: async (query) => {
      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 200) {
        toast.error("Token balance too low....");
        return;
      }

      const response = await generateChatResponse([...messages, query]);

      if (!response) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  // console.log(messages);

  return (
    <div
      className={`min-h-[calc(100vh-6rem)] ${
        messages.length === 0 ? "" : "grid grid-rows-[1fr,auto]"
      }`}
    >
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar =
            role == "user" ? <FaUser /> : <BsFillRocketTakeoffFill />;
          const bcg = role == "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={`${bcg} flex py-6 -mx-8 px-8
               text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-6">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending && <span className="loading py-2"></span>}
      </div>
      <form onSubmit={handleSubmit} className="max-w-5xl">
        <h1
          className={`${
            messages.length === 0 ? "block" : "hidden"
          } text-4xl mb-8 font-bold`}
        >
          What can I help you with?
        </h1>

        <div className="join w-full">
          <input
            type="text"
            placeholder="Message ExploreGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
            // disabled
          >
            {isPending ? "please wait..." : "ask question"}
          </button>
        </div>

        <div>
          {messages.length === 0 ? (
            <h2 className="my-6 text-xs">
              * uses tokens, visit{" "}
              <a
                href="/profile"
                className="font-semibold underline underline-offset-2"
              >
                profile
              </a>{" "}
              for available token amount.
            </h2>
          ) : null}
        </div>
      </form>
    </div>
  );
};
export default Chat;
