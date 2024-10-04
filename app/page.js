import Link from "next/link";
const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">ExploreGPT</h1>
          <p className="py-6 text-lg leading-loose">
            Your AI-powered travel companion. Experience seamless tour
            generation alongside a dedicated chat for all your research and
            planning, powered by OpenAI.
          </p>
          <Link href="/chat" className="btn btn-secondary ">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
