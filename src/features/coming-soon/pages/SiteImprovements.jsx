import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const SiteImprovements = () => {
  return (
    <Layout seoProps={{
      title: 'Site Improvements | Coming Soon | The Stratbook',
      description: 'Technical improvements coming soon to The Stratbook. Enhanced filtering, powerful search, and improved mobile experience for Rainbow Six Siege players.',
      keywords: 'Rainbow Six search, Siege filtering, R6 mobile site, tactical FPS resource',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Site Improvements</h1>
          <p className="text-xl text-gray-400 mb-4">Coming Soon to The Stratbook</p>
          
          <div className="alert alert-info mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
              Some features are currently in development, with Advanced Filtering already in progress. Want to help? <Link to="/contribute" className="underline">Contribute</Link> your expertise!
            </span>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">What to Expect</h2>
            <p className="mb-4">
              We're working on several technical improvements to make The Stratbook more powerful, user-friendly, and accessible. 
              Our advanced filtering system will help you quickly narrow down content to find exactly what you need, 
              whether you're looking for operator-specific strategies, map-specific setups, or skill-level appropriate tips.
            </p>
            <p className="mb-4">
              In addition to filtering enhancements, we're developing a robust search functionality that will index all content across 
              the site, making it easy to find information with natural language queries. We're also optimizing the mobile experience 
              to ensure you can access strategies and tips on the go, whether you're looking for a quick reference between matches 
              or studying new techniques while away from your gaming setup.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-6 mt-4">
              <li className="p-4 bg-base-300 rounded-lg flex items-start">
                <div className="badge badge-warning mr-2 mt-1">In Progress</div>
                <div>
                  <h3 className="font-bold text-primary">Advanced Filtering</h3>
                  <p className="mt-2">Enhanced filtering options with multi-select capabilities, saved filter presets, and intuitive 
                  UI for quickly finding specific content. Filter by multiple operators, map sections, difficulty levels, and more.</p>
                </div>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg flex items-start">
                <div className="badge badge-outline mr-2 mt-1">Planned</div>
                <div>
                  <h3 className="font-bold text-primary">Content Search</h3>
                  <p className="mt-2">Powerful search functionality that indexes all site content and understands natural language queries. 
                  Find specific strategies, tips, and information with simple searches like "Mira windows on Coastline" or "countering Kaid tricking."</p>
                </div>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg flex items-start">
                <div className="badge badge-outline mr-2 mt-1">Planned</div>
                <div>
                  <h3 className="font-bold text-primary">Mobile Optimization</h3>
                  <p className="mt-2">Improved mobile experience with touch-friendly interfaces, offline access to saved strategies, 
                  and responsive layouts that make browsing comfortable on any device. Perfect for checking strategies between matches.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Technical Improvements</h2>
            <ul className="space-y-2 list-disc ml-6">
              <li>Performance optimizations for faster page loading</li>
              <li>Improved accessibility features for all users</li>
              <li>Dark mode and theme customization options</li>
              <li>Bookmark and sharing capabilities for individual strategies</li>
              <li>Interactive elements to better visualize complex strategies</li>
              <li>Progressive Web App (PWA) support for app-like experience</li>
              <li>Synchronized settings across devices when logged in</li>
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

export default SiteImprovements;