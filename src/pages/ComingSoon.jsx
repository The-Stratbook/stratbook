import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

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
        { name: "Random Operator", description: "Generate random operator selections with optional weapon constraints", status: "planned" },
        { name: "Kill Board", description: "Track the operators you used during your matches, if a operator died you need to cross it off the board and you cannot use it again untill all operators have died (from that side)", status: "planned" }
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
        { name: "User Accounts", description: "Create accounts to save favorite strategies and track personal progress", status: "planned" },
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
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Roadmap</h1>
          <p className="text-xl mb-4 text-base-content">
            The future of The Stratbook is packed with exciting content and features
          </p>
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
        </div>

        {/* Current Status Section */}
        <div className="mb-12">
          <div className="stats shadow w-full bg-base-200">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Current Pillars</div>
              <div className="stat-value text-primary">2</div>
              <div className="stat-desc">Tips & Tricks, External Tools</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="stat-title">Future Pillars</div>
              <div className="stat-value text-secondary">6+</div>
              <div className="stat-desc">Expanding our core content areas</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div className="stat-title">Planned Features</div>
              <div className="stat-value text-accent">25+</div>
              <div className="stat-desc">From our comprehensive roadmap</div>
            </div>
          </div>
        </div>

        {/* Featured Pages Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Feature Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/coming-soon/operator-guides" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Operator Guides</h3>
                <p className="text-sm text-base-content">Master every operator with our comprehensive loadout and strategy guides.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/map-guides" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Map Guides</h3>
                <p className="text-sm text-base-content">Master every map with detailed callouts, angles, and strategic positions.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/fun-tools" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Fun Tools</h3>
                <p className="text-sm text-base-content">Enhance your gameplay with Strat Roulette, Random Operator, and more.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Link to="/coming-soon/pro-setups" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Pro Setups</h3>
                <p className="text-sm text-base-content">Learn tournament-tested strategies used by professional teams.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/myths-section" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Myths Section</h3>
                <p className="text-sm text-base-content">Discover what really works and what doesn't in Rainbow Six Siege mechanics.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/community-features" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Community Features</h3>
                <p className="text-sm text-base-content">Create accounts, save strategies, and contribute your own content.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Link to="/coming-soon/meta-tier-lists" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Meta Tier Lists</h3>
                <p className="text-sm text-base-content">Stay updated with the current meta and most effective strategies.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/educational-content" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Educational Content</h3>
                <p className="text-sm text-base-content">Learn fundamental concepts and advanced techniques to improve your gameplay.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
            
            <Link to="/coming-soon/site-improvements" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">Site Improvements</h3>
                <p className="text-sm text-base-content">Enhanced filtering, powerful search, and improved mobile experience.</p>
                <div className="card-actions mt-2">
                  <span className="btn btn-sm btn-primary">Learn More</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Roadmap</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-primary text-2xl">{category.category}</h3>
                  
                  <ul className="space-y-6 mt-4">
                    {category.items.map((item, itemIndex) => {
                      // Determine if we have a dedicated page for this feature
                      let routePath = null;
                      if (item.name === "Operator Guides") routePath = "/coming-soon/operator-guides";
                      else if (item.name === "Map Guides") routePath = "/coming-soon/map-guides";
                      else if (item.name === "Pro Setups") routePath = "/coming-soon/pro-setups";
                      else if (item.name === "Meta Tier Lists") routePath = "/coming-soon/meta-tier-lists";
                      else if (item.name === "Strat Roulette" || item.name === "Random Operator" || item.name === "Kill Board") 
                        routePath = "/coming-soon/fun-tools";
                      else if (item.name === "Myths Section") routePath = "/coming-soon/myths-section";
                      else if (item.name === "Beginner Guides" || item.name === "Advanced Techniques") 
                        routePath = "/coming-soon/educational-content";
                      else if (item.name === "User Accounts" || item.name === "Community Submissions" || item.name === "Rating System") 
                        routePath = "/coming-soon/community-features";
                      else if (item.name === "Advanced Filtering" || item.name === "Content Search" || item.name === "Mobile Optimization") 
                        routePath = "/coming-soon/site-improvements";
                      
                      return (
                        <li key={itemIndex} className="flex items-start">
                          <div className={`badge ${item.status === 'completed' ? 'badge-success' : item.status === 'in-progress' ? 'badge-warning' : 'badge-outline'} mr-2 mt-1 px-3 whitespace-nowrap`}>
                            {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                          </div>
                          <div>
                            {routePath ? (
                              <Link to={routePath} className="hover:text-primary">
                                <h4 className="font-bold">{item.name}</h4>
                              </Link>
                            ) : (
                              <h4 className="font-bold">{item.name}</h4>
                            )}
                            <p className="text-sm">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="card bg-base-300 shadow-xl mb-12">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Get Involved</h2>
            <p className="mb-4 text-base-content">
              We're passionate about building the ultimate resource for tactical FPS players, but we need your help!
              Here's how you can contribute to accelerating this roadmap:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-base-200 p-4 rounded-lg">
                <h3 className="font-bold text-primary">Share Content</h3>
                <p className="text-sm text-base-content">Submit your strategies, tips, or content ideas to help us grow our knowledge base.</p>
              </div>
              
              <div className="bg-base-200 p-4 rounded-lg">
                <h3 className="font-bold text-primary">Development Help</h3>
                <p className="text-sm text-base-content">Contribute to our open-source codebase if you have web development skills.</p>
              </div>
              
              <div className="bg-base-200 p-4 rounded-lg">
                <h3 className="font-bold text-primary">Spread the Word</h3>
                <p className="text-sm text-base-content">Tell other players about The Stratbook to help grow our community.</p>
              </div>
            </div>
            
            <div className="card-actions justify-center mt-6">
              <Link to="/contribute" className="btn btn-primary">Learn How to Contribute</Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="join join-vertical w-full bg-base-200">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
                When will these features be released?
              </div>
              <div className="collapse-content"> 
                <p className="text-base-content">Our roadmap isn't time-bound as we're focusing on quality over speed. Features will be released as they're completed, with priority given to the most requested items. Join our Discord for the latest updates!</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl font-medium">
                How can I request a specific feature?
              </div>
              <div className="collapse-content"> 
                <p className="text-base-content">You can suggest features through our Discord server or by creating an issue on our GitHub repository. We review all community suggestions and prioritize those with the most demand.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl font-medium">
                Will you expand beyond Rainbow Six Siege?
              </div>
              <div className="collapse-content"> 
                <p className="text-base-content">Yes! While our initial focus is on Rainbow Six Siege, we plan to expand to other tactical FPS games in the future. Our platform is being built with this scalability in mind.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl font-medium">
                How can I stay updated on new features?
              </div>
              <div className="collapse-content"> 
                <p className="text-base-content">Follow us on social media and join our Discord server for the latest updates on feature releases and development progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;