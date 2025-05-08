import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const OperatorGuides = () => {
  return (
    <Layout seoProps={{
      title: 'Operator Guides | Coming Soon | The Stratbook',
      description: 'Comprehensive operator guides coming soon to The Stratbook. Learn about loadout recommendations, role analysis, and optimal play styles for all Rainbow Six Siege operators.',
      keywords: 'Rainbow Six operator guides, Siege operator loadouts, R6 operator roles, tactical FPS guides',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Operator Guides</h1>
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
              Our upcoming Operator Guides will be your comprehensive resource for mastering every operator in Rainbow Six Siege. 
              Each guide will provide in-depth analysis of operator abilities, optimal loadout configurations, and specialized role advice 
              to help you maximize your effectiveness in any match situation.
            </p>
            <p className="mb-4">
              Beyond basic mechanics, our guides will explore advanced techniques, counter-strategies, and synergies with other operators. 
              You'll find tailored recommendations for different play styles and skill levels, from newcomers just learning the basics to 
              experienced players looking to refine their techniques for competitive play.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Detailed weapon analysis with attachment recommendations</li>
              <li>Season-specific gadget usage strategies that adapt to the evolving meta</li>
              <li>Video demonstrations of unique operator techniques</li>
              <li>Map-specific recommendations for optimal operator usage</li>
              <li>Interactive loadout builder to experiment with different setups</li>
              <li>Community-sourced tips and strategies from top players</li>
              <li>Regular updates to reflect game patches and balance changes</li>
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

export default OperatorGuides;