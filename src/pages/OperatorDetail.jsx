import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';

const OperatorDetail = () => {
  const { operatorName } = useParams();
  const [operatorData, setOperatorData] = useState(null);

  useEffect(() => {
    const fetchOperatorData = async () => {
      try {
        const response = await fetch(`/data/siege/operators/${operatorName}.json`);
        if (!response.ok) throw new Error('Failed to fetch operator data');
        const data = await response.json();
        setOperatorData(data);
      } catch (error) {
        console.error('Error fetching operator data:', error);
      }
    };

    fetchOperatorData();
  }, [operatorName]);

  if (!operatorData) return <p>Loading...</p>;

  return (
    <Layout seoProps={{
      title: `${operatorData.name} | Operator Details | The Stratbook`,
      description: `Learn about ${operatorData.name}, their roles, tips, tricks, and more.`,
      keywords: `${operatorData.name}, Rainbow Six Siege, Operator Guide`,
      url: window.location.href
    }}>
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{operatorData.name}</h1>
        <p className="text-lg mb-4">Side: {operatorData.side}</p>
        <p className="text-lg mb-4">Roles: {operatorData.roles.join(', ')}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Loadout</h2>
          <p className="text-lg mb-2">Primary Weapons:</p>
          <ul className="list-disc pl-5">
            {operatorData.loadout.primary.map((weapon, index) => (
              <li key={index}>{weapon.name} ({weapon.type})</li>
            ))}
          </ul>
          <p className="text-lg mb-2">Secondary Weapons:</p>
          <ul className="list-disc pl-5">
            {operatorData.loadout.secondary.map((weapon, index) => (
              <li key={index}>{weapon.name} ({weapon.type})</li>
            ))}
          </ul>
          <p className="text-lg mb-2">Gadgets:</p>
          <ul className="list-disc pl-5">
            {operatorData.loadout.gadgets.map((gadget, index) => (
              <li key={index}>{gadget}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Unique Ability</h2>
          <p>{operatorData.uniqueAbility}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p><strong>Real Name:</strong> {operatorData.biography.realName}</p>
          <p><strong>Date of Birth:</strong> {operatorData.biography.dateOfBirth}</p>
          <p><strong>Place of Birth:</strong> {operatorData.biography.placeOfBirth}</p>
          <p>{operatorData.biography.description}</p>
        </section>

        <p className="text-lg mb-4">Squad: {operatorData.squad}</p>
        <p className="text-lg mb-4">Health: {operatorData.health}</p>
        <p className="text-lg mb-4">Speed: {operatorData.speed}</p>
        <p className="text-lg mb-4">Difficulty: {operatorData.difficulty}</p>

        {operatorData.gameplayTips && operatorData.gameplayTips.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Gameplay Tips</h2>
            <ul className="list-disc pl-5">
              {operatorData.gameplayTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {operatorData.myths && operatorData.myths.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Myths</h2>
            <ul className="list-disc pl-5">
              {operatorData.myths.map((myth, index) => (
                <li key={index}>
                  <strong>{myth.myth}</strong>: {myth.status}
                </li>
              ))}
            </ul>
          </section>
        )}

        {operatorData.tricks && operatorData.tricks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tricks</h2>
            <ul className="list-disc pl-5">
              {operatorData.tricks.map((trick, index) => (
                <li key={index}>{trick}</li>
              ))}
            </ul>
          </section>
        )}

        {operatorData.videos && operatorData.videos.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <ul className="list-disc pl-5">
              {operatorData.videos.map((video, index) => (
                <li key={index}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {operatorData.externalTools && operatorData.externalTools.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Related External Tools</h2>
            <ul className="list-disc pl-5">
              {operatorData.externalTools.map((tool, index) => (
                <li key={index}>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default OperatorDetail;