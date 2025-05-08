import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutFullWidth from '../components/templates/LayoutFullWidth';

const Fun = () => {
  const navigate = useNavigate();

  // SEO metadata
  const pageTitle = "Fun Games & Tools | The Stratbook";
  const description = "Enhance your Rainbow Six Siege casual play with fun challenges, random operator selection, and other interactive gameplay tools.";
  const keywords = "Rainbow Six Siege fun games, strat roulette, random operator selection, kill board, R6S challenges, casual gameplay";
  const canonicalUrl = `${window.location.origin}/fun`;
  
  // Feature cards data
  const featureCards = [
    {
      id: "random-operator",
      title: "Random Operator",
      description: "Let fate decide your next operator! Select attacker or defender and generate a random pick.",
      image: "/images/general/logo.png",
      isAvailable: true,
      link: "/siege/fun/operator-roulette"
    },
    {
      id: "kill-board",
      title: "Kill Board",
      description: "Track which operators you've used in your session. Mark operators as used/dead.",
      image: "/images/general/logo.png",
      isAvailable: true,
      link: "/siege/fun/killboard"
    },
    {
      id: "strat-roulette",
      title: "Strat Roulette",
      description: "Generate random challenge strategies for your team to spice up casual matches.",
      image: "/images/general/logo.png",
      isAvailable: false,
      comingSoon: true,
      link: "/siege/fun/strat-roulette"
    },
    {
      id: "quiz",
      title: "R6 Quiz",
      description: "Test your Rainbow Six Siege knowledge with questions about maps, operators, and gameplay mechanics.",
      image: "/images/general/logo.png",
      isAvailable: false,
      comingSoon: true,
      link: "/siege/fun/quiz"
    }
  ];

  // Handle launch button click
  const handleLaunch = (card) => {
    if (card.link) {
      navigate(card.link);
    }
  };
  
  return (
    <LayoutFullWidth 
      seoProps={{
        title: pageTitle,
        description,
        keywords,
        url: canonicalUrl,
        image: "/images/general/logo.png"
      }}
    >
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Hero Section */}
        <div className="hero mb-8 bg-base-300 rounded-xl p-8">
          <div className="hero-content text-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Fun Games & Challenges</h1>
              <p className="text-lg max-w-3xl mx-auto mb-6">
                Spice up your gameplay with these fun challenges, random selections, and interactive tools.
                Perfect for casual play with friends!
              </p>
            </div>
          </div>
        </div>
        
        
        {/* Feature Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featureCards.map((card) => (
            <div key={card.id} className="card bg-base-200 shadow-xl h-full">
              <figure className="px-10 pt-10">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="rounded-xl w-24 h-24 object-contain"
                  onError={(e) => {e.target.src = "/images/general/logo.png"}} 
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-center mt-4">
                  {card.isAvailable ? (
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleLaunch(card)}
                    >
                      Launch
                    </button>
                  ) : (
                    <div className="badge badge-lg badge-secondary">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutFullWidth>
  );
};

export default Fun;