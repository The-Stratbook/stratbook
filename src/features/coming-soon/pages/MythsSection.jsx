import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const MythsSection = () => {
  return (
    <Layout seoProps={{
      title: 'Myths Section | Coming Soon | The Stratbook',
      description: 'Testing and debunking common Rainbow Six Siege myths and misconceptions about game mechanics. Learn what really works and what doesn\'t.',
      keywords: 'Rainbow Six myths, Siege mythbusters, R6 game mechanics, Siege misconceptions',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Myths Section</h1>
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
              Our upcoming Myths Section will systematically test and debunk common misconceptions about Rainbow Six Siege's game mechanics. 
              The Siege community often shares tips and tricks that may not be entirely accurate or might have been changed by patches. 
              We'll conduct rigorous testing to verify what really works and what doesn't, providing clear explanations with video evidence 
              to help players separate fact from fiction.
            </p>
            <p className="mb-4">
              We'll examine everything from gadget interactions and sound mechanics to damage models and movement properties. Each myth will 
              be clearly categorized as "Confirmed," "Busted," or "Plausible," along with detailed explanations of our testing methodology. 
              By demystifying the complex mechanics of Siege, we aim to help players make better strategic decisions based on how the game 
              actually works, not how it's rumored to work.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Categorized myth collections by operator, gadget, and game mechanic</li>
              <li>Video demonstrations of each myth being tested</li>
              <li>Clear verdict system (Confirmed, Busted, Plausible) with explanation</li>
              <li>Community submission system for myths that need testing</li>
              <li>Historical tracking of myths that were changed by patches</li>
              <li>Collaboration with content creators for special mythbusting episodes</li>
              <li>Regular updates to reflect new discoveries and game changes</li>
            </ul>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Example Myths We'll Test</h2>
            <ul className="space-y-4 mt-2">
              <li className="p-3 bg-base-300 rounded-lg">
                <span className="font-bold text-warning">PLAUSIBLE</span>: "Crouching makes your footsteps completely silent."
              </li>
              <li className="p-3 bg-base-300 rounded-lg">
                <span className="font-bold text-success">CONFIRMED</span>: "Mute jammers can prevent Lion scans but only if you're standing in their radius when the scan activates."
              </li>
              <li className="p-3 bg-base-300 rounded-lg">
                <span className="font-bold text-error">BUSTED</span>: "Smoke's gas canisters deal more damage the closer you are to them."
              </li>
              <li className="p-3 bg-base-300 rounded-lg">
                <span className="font-bold text-warning">PLAUSIBLE</span>: "You can trick Kapkan by entering a doorway and backing out quickly to trigger his trap safely."
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

export default MythsSection;