import React, { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import ExternalToolCard from '../components/cards/ExternalToolCard';

const ExternalTools = () => {
  const [tools, setTools] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/data/externalTools.json');
        if (!response.ok) {
          throw new Error('Failed to fetch external tools data');
        }
        const data = await response.json();
        setTools(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching external tools:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto p-4">
          <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto p-4">
          <div className="alert alert-error">
            <p>Error loading external tools: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout seoProps={{ 
      title: 'External Tools & Resources | The Stratbook', 
      description: 'Discover useful external tools, websites, and resources for Rainbow Six Siege and other tactical FPS games to improve your gameplay.',
      keywords: 'Rainbow Six tools, Siege resources, R6 stats, FPS tools, tactical shooter resources',
      url: window.location.href
    }}>
      <div className="container mx-auto p-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">External Tools & Resources</h1>
          <p className="text-xl text-base-content">
            A curated collection of useful websites, tools, and resources for tactical FPS players
          </p>
        </div>

        {/* Pro League Section */}
        <section className="mb-12">
          <div className="divider">
            <h2 className="text-3xl font-bold text-primary mb-2">Pro League Resources</h2>
          </div>
          <p className="text-center mb-8 max-w-3xl mx-auto text-base-content">
            Stay up-to-date with professional play, tournaments, and esports events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools?.proLeague?.map(tool => (
              <ExternalToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Competitive Section */}
        <section className="mb-12">
          <div className="divider">
            <h2 className="text-3xl font-bold text-primary mb-2">Competitive Tools</h2>
          </div>
          <p className="text-center mb-8 max-w-3xl mx-auto text-base-content">
            Enhance your competitive play with strategy planning, statistics tracking, and skill improvement resources
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools?.competitive?.map(tool => (
              <ExternalToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Content Creators Section */}
        <section className="mb-12">
          <div className="divider">
            <h2 className="text-3xl font-bold text-primary mb-2">Content Creators</h2>
          </div>
          <p className="text-center mb-8 max-w-3xl mx-auto text-base-content">
            Educational content creators who provide in-depth analysis and valuable gameplay insights
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools?.creators?.map(tool => (
              <ExternalToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-12">
          <div className="divider">
            <h2 className="text-3xl font-bold text-primary mb-2">Community Resources</h2>
          </div>
          <p className="text-center mb-8 max-w-3xl mx-auto text-base-content">
            Connect with the wider community through forums, discussion boards, and social platforms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools?.community?.map(tool => (
              <ExternalToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Fun Section - This is commented out as requested to leave fun tools out of scope for now
        <section className="mb-12">
          <div className="divider">
            <h2 className="text-3xl font-bold text-primary mb-2">Fun Tools</h2>
          </div>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Spice up your gameplay with fun challenges and casual game modes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools?.fun?.map(tool => (
              <ExternalToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
        */}
      </div>
    </Layout>
  );
};

export default ExternalTools;