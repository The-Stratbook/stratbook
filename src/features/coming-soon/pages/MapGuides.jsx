import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const MapGuides = () => {
  return (
    <Layout seoProps={{
      title: 'Map Guides | Coming Soon | The Stratbook',
      description: 'Comprehensive map guides coming soon to The Stratbook. Master callouts, common strategies, and key areas to control for all Rainbow Six Siege maps.',
      keywords: 'Rainbow Six map guides, Siege map callouts, R6 map strategies, tactical FPS maps',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Map Guides</h1>
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
              Our upcoming Map Guides will provide detailed walkthroughs of every map in Rainbow Six Siege, helping you master 
              essential callouts, identify key choke points, and understand the flow of attack and defense. Each guide will break down 
              maps floor-by-floor, highlighting common angles, rotation routes, and strategic positions that can give you the advantage.
            </p>
            <p className="mb-4">
              Beyond static information, these guides will focus on practical strategies tailored to the current meta. You'll learn 
              bomb site priorities, effective roaming paths, and attack routes favored by experienced players. Our guides will 
              bridge the gap between basic map knowledge and the advanced spatial awareness needed to compete at higher ranks.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Interactive map layouts with standard callouts used by the community and pro players</li>
              <li>Comprehensive vertical play opportunities with floor destruction guides</li>
              <li>Detailed bomb site breakdowns with reinforcement priorities</li>
              <li>Common pre-placed rotation and line-of-sight holes</li>
              <li>Camera and gadget placement recommendations</li>
              <li>Map-specific operator synergies and recommendations</li>
              <li>Updated regularly to reflect map reworks and meta changes</li>
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

export default MapGuides;