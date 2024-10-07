import Link from "next/link";
const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl py-2 font-bold text-primary">ExploreGPT</h1>
          <p className="py-4 text-2xl font-mono leading-loose">
            (your AI-powered travel companion)
          </p>
          <p className="pb-6 text-lg leading-loose">
            Experience seamless tour generation alongside a dedicated chat for
            all your research and planning, powered by OpenAI.
          </p>
          <Link href="/chat" className="btn btn-secondary mt-2 px-6">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
