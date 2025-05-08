import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Link } from 'react-router-dom';

const EducationalContent = () => {
  return (
    <Layout seoProps={{
      title: 'Educational Content | Coming Soon | The Stratbook',
      description: 'Educational content coming soon to The Stratbook. Learn fundamental concepts, advanced techniques, and skill development resources for Rainbow Six Siege.',
      keywords: 'Rainbow Six guides, Siege tutorials, R6 beginner guides, advanced Siege techniques',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Educational Content</h1>
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
              Our upcoming Educational Content will provide comprehensive learning resources for players of all skill levels. 
              For newcomers, our Beginner Guides will introduce fundamental concepts, controls, and game mechanics to help you 
              build a solid foundation. We'll cover essential terminology, basic strategies, and operator selection guidance to 
              help you get up to speed quickly.
            </p>
            <p className="mb-4">
              For experienced players looking to refine their skills, our Advanced Techniques section will explore complex concepts 
              like vertical play, sound manipulation, utility optimization, and coordinated team strategies. These guides will help 
              you transform from a competent player into a truly dangerous opponent by mastering the nuanced aspects of Siege that 
              separate high-level players from the rest.
            </p>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Planned Features</h2>
            <ul className="space-y-6 mt-4">
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Beginner Guides</h3>
                <p className="mt-2">Comprehensive introduction to Rainbow Six Siege fundamentals, including controls, basic mechanics, 
                team composition, and entry-level strategies. Perfect for new players or those transitioning from other FPS games who 
                need to understand Siege's unique tactical elements.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Advanced Techniques</h3>
                <p className="mt-2">In-depth exploration of high-level concepts and techniques used by experienced players. 
                Learn about pixel peeks, advanced droning, sophisticated site setups, execute timing, and coordinated utility usage 
                to significantly elevate your gameplay.</p>
              </li>
              
              <li className="p-4 bg-base-300 rounded-lg">
                <h3 className="font-bold text-primary">Skill Development Resources</h3>
                <p className="mt-2">Targeted training regimens, practice scenarios, and skill-building exercises to help you improve 
                specific aspects of your gameplay. From aim training to game sense development, these resources will help you identify 
                and address your weaknesses.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Topics We'll Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">For Beginners</h3>
                <ul className="space-y-1 list-disc ml-6">
                  <li>Understanding roles (anchor, roamer, entry, support, flex)</li>
                  <li>Basic map knowledge and callouts</li>
                  <li>Drone placement and information gathering</li>
                  <li>Economy management (reinforcements, utility)</li>
                  <li>Crosshair placement and basic gunfight principles</li>
                  <li>Common mistakes to avoid</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">For Advanced Players</h3>
                <ul className="space-y-1 list-disc ml-6">
                  <li>Advanced vertical play techniques</li>
                  <li>Sound manipulation and silent movement</li>
                  <li>Psychology and mind games against opponents</li>
                  <li>Adaptive strategies and mid-round adjustments</li>
                  <li>Team coordination and communication protocols</li>
                  <li>Counter-strating and opponent analysis</li>
                </ul>
              </div>
            </div>
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

export default EducationalContent;