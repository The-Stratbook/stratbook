"use client";
import React from "react";
import { Link } from "react-router-dom";
import LayoutFullWidth from "./components/templates/LayoutFullWidth";

const Home = () => {
  const pageTitle = "Tactical FPS Tips & Strategies | The Stratbook";
  const cleanDescription = "Discover expert tactical FPS strategies, tips, and tricks to improve your gameplay. Community-driven guides for all skill levels across tactical shooters like Rainbow Six Siege.";
  const canonicalUrl = `${window.location.origin}/`;
  
  // Create website schema for structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Stratbook",
    "url": window.location.origin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${window.location.origin}/siege/tips?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "description": cleanDescription
  };
  
  // Organization schema for branding
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Stratbook",
    "url": window.location.origin,
    "logo": `${window.location.origin}/images/general/logo.png`,
    "sameAs": [
      "https://github.com/The-Stratbook/stratbook"
      // Add other social profiles if available (Twitter, Discord, etc.)
    ]
  };
  
  // Combine schemas
  const schemaMarkup = [websiteSchema, organizationSchema];
  
  // Define custom keywords for the homepage
  const keywords = "Tactical FPS, Rainbow Six Siege, R6, FPS tips, tactical shooter strategies, gaming guides, shooter tips, operator guides, map strategies, beginner tips";

  return (
      <LayoutFullWidth 
        seoProps={{ 
          title: pageTitle, 
          description: cleanDescription, 
          url: canonicalUrl, 
          image: "/images/general/logo.png",
          faqSchema: schemaMarkup,
          keywords: keywords
        }}
      >
        <div className="bg-base-100 text-white min-h-screen">
          {/* Hero Section */}
          <section className="hero min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl px-6">
              <h1 className="text-6xl font-extrabold mb-6 bg-clip-text bg-gradient-to-r leading-tight text-secondary">
                Tactical FPS Strategies & Tips
              </h1>
              <p className="mb-6 text-lg text-base-content">
                Elevate your gameplay with curated tips & tricks for tactical shooters. Designed for beginner and intermediate players to improve their skills and understanding.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <Link to="/siege/tips" className="btn btn-primary btn-lg">
                  Explore Tips & Tricks
                </Link>
                <a
                  href="/contribute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  Contribute Now
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-base-200">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-4xl font-bold mb-8 text-secondary">Content Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card bg-base-100 shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Tips & Tricks</h3>
                  <p className="text-base-content">Practical advice for improving your <span className="font-bold">gameplay</span>, <span className="font-bold">positioning</span>, and <span className="font-bold">decision-making</span> in tactical FPS games.</p>
                </div>
                <div className="card bg-base-100 shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">External Resources</h3>
                  <p className="text-base-content">Curated collection of helpful <span className="font-bold">tools</span>, <span className="font-bold">videos</span>, and content from community creators to enhance your gaming experience.</p>
                </div>
                <div className="card bg-base-100 shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Community Driven</h3>
                  <p className="text-base-content"><span className="font-bold">Contribute</span> your own tips and collaborate with other tactical FPS enthusiasts to grow our knowledge base.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-16 bg-base-100">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Coming Soon</h2>
              <p className="mb-6 text-lg text-base-content">
                We're constantly expanding! Look forward to these upcoming features:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/operator-guides" className="hover:underline">Operator Guides</Link>
                  </h3>
                </div>
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/map-guides" className="hover:underline">Map Guides</Link>
                  </h3>
                </div>
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/pro-setups" className="hover:underline">Pro Setups</Link>
                  </h3>
                </div>
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/meta-tier-lists" className="hover:underline">Meta Tier Lists</Link>
                  </h3>
                </div>
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/fun-tools" className="hover:underline">Fun Games</Link>
                  </h3>
                </div>
                <div className="card bg-base-200 shadow-lg p-4">
                  <h3 className="text-xl font-bold text-primary">
                    <Link to="/coming-soon/myths-section" className="hover:underline">Myth Busting</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="container mx-auto text-center px-6 pt-12">
              <Link
                to="/coming-soon"
                className="btn btn-primary btn-lg"
              >
                Read more about our roadmap
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-base-200">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Ready to Contribute?</h2>
              <p className="mb-6 text-lg text-base-content">
                Join our <span className="font-bold">GitHub repository</span> and start sharing your tips & tricks with the community today.
              </p>
              <a
                href="https://github.com/The-Stratbook/stratbook"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Contribute on GitHub
              </a>
            </div>
          </section>
        </div>
      </LayoutFullWidth>
  );
};

export default Home;
