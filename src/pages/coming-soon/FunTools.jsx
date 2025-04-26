import React from 'react';
import Layout from '../../layouts/Layout';
import { Link } from 'react-router-dom';

const FunTools = () => {
  return (
    <Layout seoProps={{
      title: 'Fun Tools | Coming Soon | The Stratbook',
      description: 'Interactive fun tools coming soon to The Stratbook. Try Strat Roulette, Random Operator selection, and Kill Board tracking for Rainbow Six Siege.',
      keywords: 'Rainbow Six Strat Roulette, Siege Random Operator, R6 Kill Board, fun Siege tools',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Fun Tools</h1>
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
              Our upcoming Fun Tools section will offer a collection of interactive features designed to add variety and enjoyment to your 
              Rainbow Six Siege experience. When you're looking to break away from the intensity of ranked play or just want to try something 
              different with friends, our tools will provide fresh ways to engage with the game. From challenging yourself with unusual 
              constraints to tracking your operator usage patterns, these tools will enhance your casual play sessions.
            </p>
            <p className="mb-4">
              We're developing three main tools to start: Strat Roulette will generate random challenges and constraints for your team to 
              follow, adding an unpredictable twist to casual matches. Our Random Operator selector will help you discover new operators 
              and loadouts you might not normally choose. Finally, the Kill Board will track your operator usage and success rates, creating 
              visual representations of your play patterns over time.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-6 mt-4">
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Strat Roulette</h3>
                <p className="mt-2">Random challenge generator for casual play with adjustable difficulty levels. Challenges can range from "Crawlers Only" 
                to "No Headphones" or "Shield Team Six." Create custom challenges and share them with friends.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Random Operator</h3>
                <p className="mt-2">Generate random operator selections with filters for role, side, and weapon types. Save favorite 
                randomization settings and challenge yourself to master unfamiliar operators.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Kill Board</h3>
                <p className="mt-2">Track your operator usage, win rates, and kill statistics. Visualize your favorite operators and 
                identify which ones you might want to practice more with interactive charts and graphs.</p>
              </li>
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

export default FunTools;