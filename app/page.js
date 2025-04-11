import Image from "next/image";
import Link from "next/link";
import { RiSendPlane2Fill } from "react-icons/ri";
import { SiOpenaigym } from "react-icons/si";
import World from "../images/world-new.svg";

const HomePage = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-base-100 shadow-sm py-4 px-6">
        <div className="flex flex-col max-w-5xl mx-auto sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 pr-6">
            <SiOpenaigym className="w-10 h-10 text-primary" />
            <span className="text-xl font-bold text-primary">ExploreGPT</span>
          </div>
          <div className="flex items-center space-x-8 pt-4 sm:py-0">
            <Link href="#features" className="hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-primary">
              Pricing
            </Link>
            <Link href="/tours" className="btn btn-sm btn-primary">
              Explore
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero flex-grow overflow-hidden">
        <div className="hero-content p-6 md:p-16 md:py-7 flex-col md:flex-row-reverse duration-700 max-w-6xl mx-auto gap-10">
          <Image
            src={World}
            alt="ExploreGPT Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg transition-transform duration-700 hover:scale-105 drop-shadow-md"
            priority
          />
          <div className="max-w-xl">
            <h1 className="py-4 text-5xl lg:text-6xl font-bold text-center md:text-left bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              ExploreGPT
            </h1>

            <p className="text-xl font-mono text-center md:text-left text-secondary">
              Your AI-powered travel companion.
            </p>

            <p className="mt-4 text-base lg:text-lg text-center md:text-left text-base-content/90">
              Plan smart. Travel better. ExploreGPT helps you discover places,
              plan trips, and ask questions — all in one place.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/tours"
                className="btn btn-secondary px-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started{" "}
                <RiSendPlane2Fill className="ml-0.5 transition-transform duration-300 opacity-80 group-hover:opacity-90 group-hover:translate-x-0.5 w-3 h-3 " />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-14 px-6 bg-base-100">
        <div className="max-w-5xl mx-auto text-center duration-700">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Why ExploreGPT?
          </h2>
          <div className="grid text-center md:grid-cols-3 gap-8 sm:text-left">
            {[
              {
                title: "🗺️ Tour Generation",
                desc: "Generate exciting tour plans based on your chosen city and country.",
              },
              {
                title: "🔍 Tour Search",
                desc: "Browse tours created by others to get inspired for your next trip.",
              },
              {
                title: "💬 AI Chat Assistance",
                desc: "Ask questions, get suggestions, or refine your planning with ease.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-base-200 rounded-box shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-base-content/90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action + Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-primary-content"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Start Planning Smarter 🧠</h2>
          <p className="mb-10 text-lg text-white/80">
            Your next trip is just a few clicks away. Try it for free — no
            hassle, no cards!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <div className="bg-base-100 text-base-content rounded-box p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-md">
                Early Users Special
              </span>
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-xl mb-4 text-blue-600 font-semibold">
                $0 / mo
              </p>
              <ul className="text-sm text-center space-y-3 mb-6">
                <li>✅ 1000 free tokens to explore</li>
                <li>✅ Browse existing tours</li>
                <li>✅ Use the AI chat assistant</li>
              </ul>
              <Link href="/tours" className="btn btn-secondary w-full">
                Try for Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-base-100 text-base-content rounded-box p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              {/* <h3 className="text-xl font-bold mb-2">(Coming Soon)</h3> */}
              <p className="text-xl mb-4 text-blue-600 font-semibold">
                $9 / mo
              </p>
              <ul className="text-sm text-center space-y-3 mb-6">
                <li>🚀 Unlimited tour generation</li>
                <li>🗃️ Save & manage your trips</li>
                <li>💬 Enhanced AI planning support</li>
              </ul>
              <button className="btn btn-disabled w-full">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-base-300 text-center text-sm text-base-content">
        <div className="max-w-5xl mx-auto">
          <p className="mb-2">
            © {new Date().getFullYear()} ExploreGPT. All rights reserved.
          </p>
          <p className="text-xs opacity-90">
            This is a demo project built for portfolio and demonstration
            purposes only. ExploreGPT is not a real product (yet 😉).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
