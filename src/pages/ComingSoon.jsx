import React from 'react';
import Layout from '../components/templates/Layout';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/cards/FeatureCard';
import StatusCard from '../components/StatusCard';
import RoadmapCategory from '../components/RoadmapCategory';
import FaqItem from '../components/FaqItem';
import PageHeader from '../components/layout/PageHeader';
import SectionContainer from '../components/layout/SectionContainer';
import ContributeCard from '../components/cards/ContributeCard';

const ComingSoon = () => {
  const features = [
    {
      category: "Operator Content",
      items: [
        { name: "Operator Guides", description: "Comprehensive guides for each operator, including loadout recommendations, role analysis, and play styles", status: "planned" },
        { name: "Operator Comparison", description: "Side-by-side comparisons of operators with similar roles to help players choose the best operator for their situation", status: "planned" },
        { name: "Operator Tier Lists", description: "Season-specific rankings of operators based on utility, weapons, and current meta", status: "planned" }
      ]
    },
    {
      category: "Map Content",
      items: [
        { name: "Map Guides", description: "Detailed walkthroughs of each map, including callouts, common strategies, and key areas to control", status: "planned" },
        { name: "Map Callouts", description: "Interactive maps with standard callouts used by the community and pro players", status: "planned" },
        { name: "Site Setups", description: "Specific defensive setups for each bomb site across all maps", status: "planned" }
      ]
    },
    {
      category: "Pro Scene",
      items: [
        { name: "Pro Setups", description: "Replication of strategies and setups used by professional teams in tournaments", status: "planned" },
        { name: "Pro Settings", description: "Collection of hardware setups, sensitivities, and settings used by professional players", status: "planned" },
        { name: "Tournament Recaps", description: "Analysis and highlights from major competitive events", status: "planned" }
      ]
    },
    {
      category: "Meta Analysis",
      items: [
        { name: "Meta Tier Lists", description: "Regular updates on the current meta and which strategies are most effective", status: "planned" },
        { name: "Patch Reviews", description: "Analysis of game updates and how they affect the meta", status: "planned" },
        { name: "Season Reviews", description: "Comprehensive review of each season's changes and impacts on gameplay", status: "planned" }
      ]
    },
    {
      category: "Fun Tools",
      items: [
        { name: "Strat Roulette", description: "Random challenge generator to make casual play more interesting", status: "planned" },
        { name: "Random Operator", description: "Generate random operator selections with optional weapon constraints", status: "in-progress" },
        { name: "Kill Board", description: "Track the operators you used during your matches, if a operator died you need to cross it off the board and you cannot use it again untill all operators have died (from that side)", status: "in-progress" }
      ]
    },
    {
      category: "Educational Content",
      items: [
        { name: "Myths Section", description: "Testing and debunking common myths and misconceptions about game mechanics", status: "planned" },
        { name: "Beginner Guides", description: "Fundamental guides for players new to tactical FPS games", status: "planned" },
        { name: "Advanced Techniques", description: "Tips and tricks for more experienced players looking to refine their skills", status: "planned" }
      ]
    },
    {
      category: "Community Features",
      items: [
        { name: "Open Collective", description: "Collaborate with other creative people and get a reward out of it based on a score system", status: "planned" },
        { name: "Community Submissions", description: "Platform for users to submit their own strategies and tips", status: "planned" },
        { name: "Rating System", description: "Allow users to rate strategies and tips based on effectiveness", status: "planned" }
      ]
    },
    {
      category: "Site Improvements",
      items: [
        { name: "Advanced Filtering", description: "Enhanced filtering options to find exactly the content you need", status: "in-progress" },
        { name: "Content Search", description: "Powerful search functionality across all site content", status: "planned" },
        { name: "Mobile Optimization", description: "Improved mobile experience for on-the-go strategy access", status: "planned" }
      ]
    }
  ];
  
  // Define route mappings for feature items
  const featureRouteMap = {
    "Operator Guides": "/coming-soon/operator-guides",
    "Map Guides": "/coming-soon/map-guides",
    "Pro Setups": "/coming-soon/pro-setups",
    "Meta Tier Lists": "/coming-soon/meta-tier-lists",
    "Strat Roulette": "/coming-soon/fun-tools",
    "Random Operator": "/coming-soon/fun-tools",
    "Kill Board": "/coming-soon/fun-tools",
    "Myths Section": "/coming-soon/myths-section",
    "Beginner Guides": "/coming-soon/educational-content",
    "Advanced Techniques": "/coming-soon/educational-content",
    "Community Submissions": "/coming-soon/community-features",
    "Rating System": "/coming-soon/community-features",
    "Advanced Filtering": "/coming-soon/site-improvements",
    "Content Search": "/coming-soon/site-improvements",
    "Mobile Optimization": "/coming-soon/site-improvements"
  };
  
  // Status cards data
  const statusItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Current Pillars",
      value: "2",
      description: "Tips & Tricks, External Tools",
      color: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Future Pillars",
      value: "6+",
      description: "Expanding our core content areas",
      color: "secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
      title: "Planned Features",
      value: "25+",
      description: "From our comprehensive roadmap",
      color: "accent"
    }
  ];
  
  // Feature cards for the "Explore Feature Details" section
  const featureCards = [
    {
      title: "Operator Guides",
      description: "Master every operator with our comprehensive loadout and strategy guides.",
      to: "/coming-soon/operator-guides"
    },
    {
      title: "Map Guides",
      description: "Master every map with detailed callouts, angles, and strategic positions.",
      to: "/coming-soon/map-guides"
    },
    {
      title: "Fun Tools",
      description: "Enhance your gameplay with Strat Roulette, Random Operator, and more.",
      to: "/coming-soon/fun-tools"
    },
    {
      title: "Pro Setups",
      description: "Learn tournament-tested strategies used by professional teams.",
      to: "/coming-soon/pro-setups"
    },
    {
      title: "Myths Section",
      description: "Discover what really works and what doesn't in Rainbow Six Siege mechanics.",
      to: "/coming-soon/myths-section"
    },
    {
      title: "Community Features",
      description: "Create accounts, save strategies, and contribute your own content.",
      to: "/coming-soon/community-features"
    },
    {
      title: "Meta Tier Lists",
      description: "Stay updated with the current meta and most effective strategies.",
      to: "/coming-soon/meta-tier-lists"
    },
    {
      title: "Educational Content",
      description: "Learn fundamental concepts and advanced techniques to improve your gameplay.",
      to: "/coming-soon/educational-content"
    },
    {
      title: "Site Improvements",
      description: "Enhanced filtering, powerful search, and improved mobile experience.",
      to: "/coming-soon/site-improvements"
    }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: "When will these features be released?",
      answer: "Our roadmap isn't time-bound as we're focusing on quality over speed. Features will be released as they're completed, with priority given to the most requested items. Join our Discord for the latest updates!",
      defaultChecked: true
    },
    {
      question: "How can I request a specific feature?",
      answer: "You can suggest features through our Discord server or by creating an issue on our GitHub repository. We review all community suggestions and prioritize those with the most demand."
    },
    {
      question: "Will you expand beyond Rainbow Six Siege?",
      answer: "Yes! While our initial focus is on Rainbow Six Siege, we plan to expand to other tactical FPS games in the future. Our platform is being built with this scalability in mind."
    },
    {
      question: "How can I stay updated on new features?",
      answer: "Follow us on social media and join our Discord server for the latest updates on feature releases and development progress."
    }
  ];

  // Get involved items
  const contributeItems = [
    {
      title: "Share Content",
      description: "Submit your strategies, tips, or content ideas to help us grow our knowledge base."
    },
    {
      title: "Development Help",
      description: "Contribute to our open-source codebase if you have web development skills."
    },
    {
      title: "Spread the Word",
      description: "Tell other players about The Stratbook to help grow our community."
    }
  ];

  return (
    <Layout seoProps={{
      title: 'Coming Soon | The Stratbook Roadmap',
      description: 'Explore our roadmap of upcoming features and content for The Stratbook, your ultimate tactical FPS resource.',
      keywords: 'Tactical FPS roadmap, Siege roadmap, upcoming features, game guides, operator guides, map guides, meta analysis',
      url: window.location.href,
      image: '/images/general/logo.png',
      canonicalUrl: `${window.location.origin}/coming-soon`
    }}>
      <div className="container mx-auto p-4 max-w-6xl">
        <PageHeader 
          title="Our Roadmap" 
          subtitle="The future of The Stratbook is packed with exciting content and features"
        >
          <div className="max-w-3xl mx-auto">
            <div className="alert alert-info mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>
                This roadmap is not time-bound but represents our vision for the platform. 
                Want to help accelerate development? <Link to="/contribute" className="underline">Contribute</Link> your expertise!
              </span>
            </div>
          </div>
        </PageHeader>

        {/* Current Status Section */}
        <SectionContainer>
          <StatusCard items={statusItems} />
        </SectionContainer>

        {/* Featured Pages Section */}
        <SectionContainer title="Explore Feature Details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.slice(0, 3).map((card, index) => (
              <FeatureCard 
                key={index}
                title={card.title}
                description={card.description}
                to={card.to}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {featureCards.slice(3, 6).map((card, index) => (
              <FeatureCard 
                key={index + 3}
                title={card.title}
                description={card.description}
                to={card.to}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {featureCards.slice(6, 9).map((card, index) => (
              <FeatureCard 
                key={index + 6}
                title={card.title}
                description={card.description}
                to={card.to}
              />
            ))}
          </div>
        </SectionContainer>

        {/* Roadmap Timeline */}
        <SectionContainer title="Feature Roadmap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <RoadmapCategory 
                key={index}
                title={category.category}
                items={category.items}
                routeMap={featureRouteMap}
              />
            ))}
          </div>
        </SectionContainer>

        {/* Get Involved Section */}
        <SectionContainer>
          <ContributeCard 
            title="Get Involved"
            description="We're passionate about building the ultimate resource for tactical FPS players, but we need your help! Here's how you can contribute to accelerating this roadmap:"
            items={contributeItems}
            buttonText="Learn How to Contribute"
            buttonLink="/contribute"
          />
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer title="Frequently Asked Questions">
          <div className="join join-vertical w-full bg-base-200">
            {faqItems.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                name="roadmap-faq"
                defaultChecked={item.defaultChecked}
              />
            ))}
          </div>
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default ComingSoon;