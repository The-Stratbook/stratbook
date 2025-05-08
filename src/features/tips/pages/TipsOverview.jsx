"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SideFilter from "../../../components/filters/SideFilter";
import MapFilter from "../../../components/filters/MapFilter";
import OperatorFilter from "../../../components/filters/OperatorFilter";
import SkillLevelFilter from "../../../components/filters/SkillLevelFilter";
import TagFilter from "../../../components/filters/TagFilter";
import SearchFilter from "../../../components/filters/SearchFilter";
import TipsList from "../components/tips/TipsList";
import Layout from '../../../components/templates/Layout';
import { SIDES, normalizeSide } from '../../../utils/sideUtils';
import { tipsService, operatorsService } from '../../../services/api';

const TipsOverview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tipsData, setTipsData] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Parse query parameters using useMemo to avoid recreation on every render
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  
  const [filters, setFilters] = useState({
    map: queryParams.get('map') || '',
    operator: queryParams.get('operator') || '',
    side: queryParams.get('side') || SIDES.BOTH, // Default to SIDES.BOTH
    skill: queryParams.get('skill') || '',
    tag: queryParams.get('tag') || ''
  });
  
  // Set selected values for components that maintain their own state
  const [selectedMap, setSelectedMap] = useState(queryParams.get('map') || '');
  const [selectedOperator, setSelectedOperator] = useState('');

  // Handle search parameter
  useEffect(() => {
    const searchParam = queryParams.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [queryParams]);

  // Update URL whenever filters change
  useEffect(() => {
    const newParams = new URLSearchParams();
    
    if (filters.map) newParams.set('map', filters.map);
    if (filters.operator) newParams.set('operator', filters.operator);
    if (filters.side) newParams.set('side', filters.side);
    if (filters.skill) newParams.set('skill', filters.skill);
    if (filters.tag) newParams.set('tag', filters.tag);
    if (searchTerm) newParams.set('search', searchTerm);
    
    // Only update URL if filters have changed to avoid unnecessary history entries
    if (location.search !== `?${newParams.toString()}`) {
      navigate(`?${newParams.toString()}`, { replace: true });
    }
  }, [filters, searchTerm, navigate, location.search]);

  const pageTitle = "Tips Overview | The Stratbook";
  const cleanDescription = "Browse a comprehensive list of tips and strategies for Rainbow Six Siege.";
  const canonicalUrl = `${window.location.origin}/siege/tips`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use our service layer instead of direct fetch calls
        const tips = await tipsService.getAllTips();
        setTipsData(tips);
        
        // If operator filter is set, fetch operator details
        if (filters.operator) {
          const operators = await operatorsService.getAllOperators();
          const foundOperator = operators.find(op => 
            op && op.name.toLowerCase() === filters.operator.toLowerCase()
          );
          
          if (foundOperator) {
            setSelectedOperator(foundOperator);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filters.operator]);

  const filteredTips = tipsData
    .filter(tip => 
      (!filters.operator || tip.operator?.toLowerCase() === filters.operator.toLowerCase()) &&
      (!filters.side || 
        filters.side === SIDES.BOTH || 
        normalizeSide(tip.side) === normalizeSide(filters.side)
      ) &&
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
    setFilters({ ...filters, side });
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <Layout seoProps={{ 
      title: pageTitle, 
      description: cleanDescription, 
      url: canonicalUrl, 
      image: "/images/general/logo.png",
      keywords: "Rainbow Six Siege tips, R6S strategies, Siege gameplay tips, tactical FPS guides, operator strategies, map strategies, R6 tricks",
      canonicalUrl: canonicalUrl,
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
                  <MapFilter 
                    selectedMap={selectedMap} 
                    onSelectMap={handleSelectMap} 
                  />
                  <OperatorFilter
                    selectedOperator={selectedOperator}
                    onSelectOperator={handleSelectOperator}
                    selectedSide={filters.side}
                    onSideChange={handleSideChange}
                  />
                  <SideFilter 
                    selectedSide={filters.side} 
                    onSideChange={handleSideChange}
                    showUniversal={true}
                  />
                  <SkillLevelFilter
                    selectedSkill={filters.skill}
                    onSelectSkill={(skill) => setFilters({ ...filters, skill })}
                    skillLevels={['Beginner', 'Intermediate', 'Expert']}
                  />
                </div>
              )}

              {filtersVisible && (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mb-3">
                  <SearchFilter 
                    searchTerm={searchTerm} 
                    onSearchChange={handleSearchChange} 
                  />
                </div>
              )}

              {filtersVisible && (
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <TagFilter
                    selectedTag={filters.tag}
                    onSelectTag={(tag) => setFilters({ ...filters, tag })}
                    allTags={[...new Set(tipsData.flatMap(tip => tip.tags).filter(Boolean))]}
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
