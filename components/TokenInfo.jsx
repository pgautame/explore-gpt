import Link from "next/link";

const TokenInfo = () => {
  return (
    <div>
      <h2 className="my-6 text-xs">
        * uses tokens, visit{" "}
        <Link
          href={"/profile"}
          className="font-semibold underline underline-offset-2"
        >
          profile
        </Link>{" "}
        for available token amount.
      </h2>
    </div>
  );
};
export default TokenInfo;
