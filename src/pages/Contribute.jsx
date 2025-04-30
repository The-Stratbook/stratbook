import React, { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';

const Contribute = () => {

  return (
    <Layout seoProps={{ 
      title: 'Contribute to The Stratbook | Share Your Knowledge',
      description: 'Learn how to contribute your tactical FPS knowledge, strategies, tips, and tricks to The Stratbook community.',
      keywords: 'contribute, Rainbow Six Siege tips, tactical FPS strategies, gaming community, share knowledge',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Contribute to The Stratbook</h1>
          <p className="text-xl">
            Share your knowledge and help the tactical FPS community grow
          </p>
        </div>

        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Why Contribute?</h2>
            <div className="space-y-4">
              <p>
                The Stratbook is a community-driven platform built by players for players. By sharing 
                your knowledge, you help others improve their gameplay while establishing yourself as 
                a valuable contributor to the tactical FPS community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-base-300 p-4 rounded-lg">
                  <h3 className="font-bold text-primary">Recognition</h3>
                  <p className="text-sm">Get credit for your contributions with attribution on all published content.</p>
                </div>
                <div className="bg-base-300 p-4 rounded-lg">
                  <h3 className="font-bold text-primary">Impact</h3>
                  <p className="text-sm">Help thousands of players improve their skills and enjoyment of the game.</p>
                </div>
                <div className="bg-base-300 p-4 rounded-lg">
                  <h3 className="font-bold text-primary">Community</h3>
                  <p className="text-sm">Become part of a growing network of tactical FPS enthusiasts and content creators.</p>
                </div>
                <div className="bg-base-300 p-4 rounded-lg">
                  <h3 className="font-bold text-primary">Growth</h3>
                  <p className="text-sm">Expand your own understanding by articulating strategies and receiving feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">What Can You Contribute?</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">Tips & Tricks</h3>
                <p>Share practical advice, shortcuts, and techniques for improving gameplay.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">Strategy Guides</h3>
                <p>Detailed explanations of tactics for specific maps, bomb sites, or scenarios.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">Operator Insights</h3>
                <p>Specialized knowledge about using specific operators effectively.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">Weapon & Loadout Recommendations</h3>
                <p>Analysis of different weapons, attachments, and loadout combinations.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">External Tools & Resources</h3>
                <p>Suggestions for useful websites, apps, or tools that help tactical FPS players.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl">Technical suggestions</h3>
                <p>Suggestions for improvements for the website or other tools to mention.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">How to Contribute</h2>
            
            <div className="steps steps-vertical">
              <div className="step step-primary">
                <div className="text-left ml-4">
                  <h3 className="font-bold">Choose Your Contribution Type</h3>
                  <p className="text-sm">Decide what knowledge you want to share: a tip, strategy, operator guide, etc.</p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="text-left ml-4">
                  <h3 className="font-bold">Prepare Your Content</h3>
                  <p className="text-sm">
                    Format your content according to our guidelines. Include images, videos, or diagrams if 
                    applicable. Check our JSON structure documentation below.
                  </p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="text-left ml-4">
                  <h3 className="font-bold">Submit via GitHub or Discord</h3>
                  <p className="text-sm">
                    Fork our repository, add your content, and submit a pull request. Don't worry if you're 
                    not familiar with Git—we have a step-by-step guide.
                    The other option is to join our Discord server and submit your content there.
                  </p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="text-left ml-4">
                  <h3 className="font-bold">Review Process</h3>
                  <p className="text-sm">Our team will review your submission, provide feedback if needed, and publish your contribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Contribution Guidelines</h2>
            
            <div className="space-y-4">
              <p>To maintain quality and consistency, please follow these guidelines:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Content should be original or properly attributed if based on others' work.</li>
                <li>Focus on tactical, educational content that helps players improve.</li>
                <li>Test strategies and tips in the current version of the game before submitting.</li>
                <li>Use clear, concise language and proper formatting.</li>
                <li>Include relevant images, videos, or diagrams when possible to illustrate concepts.</li>
                <li>Specify which operators, maps, ranks, or playstyles your content is relevant for.</li>
              </ul>
              
              <div className="alert alert-info mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <span className="font-semibold">Seeking Help?</span> Join our <a href="https://discord.gg/vBt738jk" target="_blank" rel="noopener noreferrer" className="underline">Discord server</a> to connect with other contributors and get assistance with your submissions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">JSON Structure for Tips & Strategies</h2>
            
            <p className="mb-4">
              When submitting a tip or strategy, please use the following JSON structure. Your submission should 
              include at minimum all the required fields.
            </p>
            
            
            <div className="mockup-code text-xs md:text-sm">
              <pre><code>{`{
  "id": 0,                        // Leave as 0 for new submissions
  "title": "Your Strategy Title", // Required - Keep concise but descriptive
  "description": "Detailed explanation of the strategy...", // Required - Supports markdown
  "side": "Attacker",            // Required - "Attacker", "Defender", or "Both"
  "skill": "Intermediate",       // Required - "Beginner", "Intermediate", or "Expert"
  "tags": ["Vertical Play", "Entry"], // Required - Categories that describe your strategy
  "relatedStrategies": [],       // Required - Can be empty for new submissions
  "contributor": {               // Required - Information about you
    "name": "Your Name",         // Required - Your name or username
    "discord_username": "YourDiscord#1234", // Optional
    "twitter": "YourTwitter",    // Optional
    "youtube": "YourYoutubeURL"  // Optional
  },
  "operator": "Ace",             // Optional - Primary operator for this strategy
  "map": "Clubhouse",            // Optional - Specific map for this strategy
  "bombSite": "CCTV/Cash",       // Optional - Specific bomb site
  "imageUrl": "URL_to_image",    // Optional - Image to visualize the strategy
  "videoUrl": "YouTube_URL",     // Optional - Video demonstrating the strategy
  "lastTested": "2025-04-20",    // Optional - When this was last verified (YYYY-MM-DD)
  "videoTimestamps": [           // Optional - Timestamps in the video
    {
      "time": "0:45",
      "description": "Setting up reinforcements"
    }
  ],
  "detailedNotes": {             // Optional - Additional details
    "teamCoordination": "Medium", // Optional - "Low", "Medium", or "High"
    "riskLevel": "Medium",        // Optional - "Low", "Medium", or "High"
    "timeRequired": "30 seconds",  // Optional - Setup/execution time
    "counterStrategies": [        // Optional - Common counters
      "Thatcher can disable electronics"
    ],
    "alternativeOperators": [     // Optional - Other viable operators
      "Thermite", "Hibana"
    ],
    "extraTips": [                // Optional - Additional advice
      "Coordinate with Thatcher to handle electronics"
    ]
  },
  "FAQ": [                       // Optional - Common questions and answers
    {
      "question": "What if Thatcher is banned?",
      "answer": "Use Kali or Maverick as alternatives."
    }
  ]
}`}</code></pre>
            </div>
            
            <div className="alert alert-info mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <span className="font-semibold">Need a simpler example?</span> Check our <a href="https://github.com/The-Stratbook/stratbook/blob/main/docs/example-minimal.json" target="_blank" rel="noopener noreferrer" className="underline">minimal example</a> that shows just the required fields.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <a 
            href="https://github.com/The-Stratbook/stratbook" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Contribute on GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contribute;