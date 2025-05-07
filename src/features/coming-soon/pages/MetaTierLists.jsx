import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const MetaTierLists = () => {
  return (
    <Layout seoProps={{
      title: 'Meta Tier Lists | Coming Soon | The Stratbook',
      description: 'Stay updated with Rainbow Six Siege meta tier lists. Learn which strategies, operators, and tactics are most effective in the current meta.',
      keywords: 'Rainbow Six meta, Siege tier lists, R6 best operators, current Siege meta',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Meta Tier Lists</h1>
          <p className="text-xl text-gray-400 mb-4">Coming Soon to The Stratbook</p>
          
          <div className="alert alert-info mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
              This feature is currently in development. Want to help? <Link to="/contribute" className="underline">Contribute</Link> your expertise!
            </span>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">What to Expect</h2>
            <p className="mb-4">
              Our upcoming Meta Tier Lists will provide regular updates on the current competitive landscape in Rainbow Six Siege. 
              We'll analyze which operators, strategies, and tactics are dominating at different ranks and in professional play. 
              Each tier list will be backed by data, professional insights, and practical gameplay experience to help you understand 
              why certain choices are more effective in the current state of the game.
            </p>
            <p className="mb-4">
              Beyond just ranking operators, our tier lists will examine site viability on each map, weapon effectiveness, and utility 
              combinations that define the meta. We'll also offer predictions on how upcoming changes might shift the meta, helping you 
              stay ahead of the curve and adapt your strategies accordingly. Whether you're playing ranked or organizing a competitive 
              team, our tier lists will be an essential resource for understanding the ever-evolving state of Siege.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Season-by-season operator tier lists for attack and defense</li>
              <li>Rank-specific meta analysis from Copper to Champion</li>
              <li>Map and site tier rankings for competitive play</li>
              <li>Ban phase recommendations based on current meta</li>
              <li>Visual tier list charts with detailed explanations</li>
              <li>Patch impact predictions and post-patch analysis</li>
              <li>Meta shift tracking to identify emerging trends</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link to="/coming-soon" className="btn btn-primary">
            View Full Roadmap
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default MetaTierLists;