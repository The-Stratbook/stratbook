"use client";
import React, { useState, useEffect } from "react";
import SideFilter from "../components/filters/SideFilter";
import MapFilter from "../components/filters/MapFilter";
import OperatorFilter from "../components/filters/OperatorFilter";
import SkillLevelFilter from "../components/filters/SkillLevelFilter";
import TagFilter from "../components/filters/TagFilter";
import SearchFilter from "../components/filters/SearchFilter";
import TipsList from "../components/tips/TipsList";
import Layout from '../layouts/Layout';

const TipsOverview = () => {
  const [tipsData, setTipsData] = useState([]);
  const [selectedMap, setSelectedMap] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [filters, setFilters] = useState({
    map: '',
    operator: '',
    side: '',
    skill: '',
    tag: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const pageTitle = "Tips Overview | The Stratbook";
  const cleanDescription = "Browse a comprehensive list of tips and strategies for Rainbow Six Siege.";
  const canonicalUrl = `${window.location.origin}/siege/tips`;

  useEffect(() => {
    const fetchTips = async () => {
      try {
        // Fetch the index file listing all JSON files in the tips folder
        const response = await fetch('/data/siege/tipsIndex.json');
        if (!response.ok) throw new Error('Failed to fetch tips index');
        const files = await response.json();

        // Fetch each tip file dynamically
        const tips = await Promise.all(
          files.map(async (file) => {
            const res = await fetch(`/data/siege/tips/${file}`);
            if (!res.ok) throw new Error(`Failed to fetch tip: ${file}`);
            return res.json();
          })
        );

        setTipsData(tips);
      } catch (error) {
        console.error("Error fetching tips:", error);
      }
    };

    fetchTips();
  }, []);

  const filteredTips = tipsData
    .filter(tip => 
      (!filters.operator || tip.operator === filters.operator) &&
      (!filters.side || tip.side === filters.side) &&
      (!filters.skill || tip.skill === filters.skill) &&
      (!filters.map || tip.map === filters.map || tip.map === 'Any') &&
      (!filters.tag || (Array.isArray(tip.tags) && tip.tags.includes(filters.tag)))
    )
    .filter(tip => 
      !searchTerm || 
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (Array.isArray(tip.tags) && tip.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  // Create structured data for the collection
  const generateCollectionSchema = () => {
    const baseUrl = window.location.origin;
    
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": filteredTips.map((tip, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": tip.title,
          "description": tip.description?.substring(0, 150) + (tip.description?.length > 150 ? '...' : ''),
          "image": tip.imageUrl || `${baseUrl}/images/general/logo.png`,
          "author": {
            "@type": "Person",
            "name": tip.contributor?.name || "The Stratbook"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Stratbook",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/general/logo.png`
            }
          },
          "url": `${baseUrl}/siege/tip/${tip.id}`
        }
      }))
    };
  };

  const handleSelectMap = (map) => {
    setSelectedMap(map);
    setFilters({ ...filters, map });
  };

  const handleSelectOperator = (operator) => {
    setSelectedOperator(operator);
    setFilters({ ...filters, operator: operator.name, side: operator.side });
  };

  const handleSideChange = (side) => {
    setFilters({ ...filters, side, operator: "" });
    setSelectedOperator("");
  };

  return (
    <Layout seoProps={{ 
      title: pageTitle, 
      description: cleanDescription, 
      url: canonicalUrl, 
      image: "/images/general/logo.png",
      faqSchema: generateCollectionSchema()
    }}>
      <div className="p-4">
        <div className="container mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <button
                className="btn btn-primary mb-4"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                {filtersVisible ? "Hide Filters" : "Show Filters"}
              </button>

              {filtersVisible && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                  <MapFilter selectedMap={selectedMap} onSelectMap={handleSelectMap} />
                  <OperatorFilter
                    selectedOperator={selectedOperator}
                    onSelectOperator={handleSelectOperator}
                    selectedSide={filters.side}
                    onSideChange={handleSideChange}
                  />
                  <SideFilter selectedSide={filters.side} onSideChange={handleSideChange} />
                  <SkillLevelFilter
                    selectedSkill={filters.skill}
                    onSelectSkill={(skill) => setFilters({ ...filters, skill })}
                    skillLevels={['Beginner', 'Intermediate', 'Expert']}
                  />
                </div>
              )}

              {filtersVisible && (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mb-3">
                  <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                </div>
              )}

              {filtersVisible && (
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <TagFilter
                    selectedTag={filters.tag}
                    onSelectTag={(tag) => setFilters({ ...filters, tag })}
                    allTags={[...new Set(tipsData.flatMap(tip => tip.tags))]}
                  />
                </div>
              )}

              <TipsList tips={filteredTips} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TipsOverview;
