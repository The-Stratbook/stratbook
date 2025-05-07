import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const ProSetups = () => {
  return (
    <Layout seoProps={{
      title: 'Pro Setups | Coming Soon | The Stratbook',
      description: 'Learn professional Rainbow Six Siege strategies and setups used by pro teams. Replicate tournament-tested tactics to elevate your gameplay.',
      keywords: 'Rainbow Six pro strategies, Siege professional setups, R6 tournament tactics, pro league strats',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Pro Setups</h1>
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
              Our upcoming Pro Setups section will break down the strategies and tactics used by professional Rainbow Six Siege teams in tournaments. 
              We'll analyze how top teams coordinate their utility, positioning, and executions, then provide detailed guides on how to 
              implement these proven strategies with your own squad. Each setup will include operator composition, essential utility usage, 
              and timing considerations.
            </p>
            <p className="mb-4">
              Beyond just replicating setups, we'll provide insights into the decision-making and adaptations that pro teams make. 
              You'll learn when and why certain strategies are deployed, how teams counter specific defenses, and how the evolving meta 
              influences competitive play. This knowledge will help your team develop a deeper strategic understanding and improve your 
              competitive performance.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Detailed breakdowns of successful tournament strategies</li>
              <li>Step-by-step execution guides with timing and positioning</li>
              <li>Team role assignments and communications examples</li>
              <li>Video demonstrations with professional commentary</li>
              <li>Alternative approaches and modifications for ranked play</li>
              <li>Regular updates following major tournaments</li>
              <li>Region-specific meta analysis (NA, EU, LATAM, APAC)</li>
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

export default ProSetups;