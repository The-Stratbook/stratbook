import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const CommunityFeatures = () => {
  return (
    <Layout seoProps={{
      title: 'Community Features | Coming Soon | The Stratbook',
      description: 'Community features coming soon to The Stratbook. Create accounts, save strategies, submit your own content, and rate strategies with our upcoming interactive tools.',
      keywords: 'Rainbow Six community, Siege user accounts, R6 strategy submissions, tactical FPS community',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Community Features</h1>
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
              Our upcoming Community Features will transform The Stratbook from a static resource into an interactive platform 
              where players can contribute, collaborate, and customize their experience. We're building user account functionality 
              that will allow you to save favorite strategies, track your progress, and create personal collections of tips and tactics 
              that work for your playstyle.
            </p>
            <p className="mb-4">
              Beyond personal customization, we're developing robust community submission tools that will let you share your own 
              strategies and tips with other players. A rating system will help highlight the most effective and popular submissions, 
              ensuring quality content rises to the top. This collaborative approach will create a living repository of tactical knowledge 
              that grows and evolves with the game and its community.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-6 mt-4">
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">User Accounts</h3>
                <p className="mt-2">Create your personal Stratbook profile to save favorite strategies, track progress, and 
                customize your experience. Sync your settings across devices and receive personalized recommendations based on your 
                preferences and playstyle.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Community Submissions</h3>
                <p className="mt-2">Share your own strategies, tips, and discoveries with an intuitive submission system. Include 
                images, videos, and step-by-step instructions to help other players implement your ideas. Earn recognition for 
                your contributions to the community.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Rating System</h3>
                <p className="mt-2">Vote on the effectiveness of strategies and tips, helping the best content rise to the top. 
                Filter content by rating, popularity, or recency to find exactly what you're looking for. Leave comments and 
                suggestions to improve existing strategies.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Benefits for Players</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Save time by bookmarking and organizing strategies you want to try later</li>
              <li>Get recognition for your tactical knowledge and creativity</li>
              <li>Help new players improve by sharing your expertise</li>
              <li>Find strategies that have been verified as effective by other players</li>
              <li>Connect with like-minded players who share your tactical approach</li>
              <li>Track which strategies you've tried and how they worked for you</li>
              <li>Contribute to building the ultimate community-driven tactical resource</li>
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

export default CommunityFeatures;