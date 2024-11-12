import Link from "next/link";
import Image from "next/image";
import World from "../images/world-new.svg";

const HomePage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen overflow-hidden">
      <div className="hero-content p-4 md:p-10 flex-col md:flex-row-reverse">
        <Image
          src={World}
          alt="logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg common-transition"
          priority
        />
        <div className="max-w-xl">
          <h1 className="py-4 text-6xl font-bold text-primary text-center md:text-left md:text-5xl lg:text-6xl common-transition">
            ExploreGPT
          </h1>

          <p className="py-6 text-2xl font-mono leading-loose text-center md:text-left md:text-xl lg:text-2xl common-transition">
            (your AI-powered travel companion)
          </p>

          <p className="pb-8 text-lg leading-loose text-center md:text-left md:text-base lg:text-lg common-transition">
            Experience seamless tour generation alongside a dedicated chat for
            all your research and planning, powered by OpenAI.
          </p>
          <div className="flex justify-center md:justify-normal">
            <Link href="/tours" className="btn btn-secondary mt-2 px-6">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
