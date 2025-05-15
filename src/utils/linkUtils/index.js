/**
 * Utility functions for generating consistent internal links
 */

/**
 * Formats a name for use in URLs (lowercase with hyphens)
 * @param {string} name - The name to format
 * @returns {string} - URL-friendly name
 */
export const formatNameForUrl = (name) => {
  if (!name) return '';
  return name.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Creates an operator link from an operator name
 * @param {string} operatorName - Name of the operator
 * @returns {string} - URL path to the operator page
 */
export const createOperatorLink = (operatorName) => {
  if (!operatorName) return '';
  return `/siege/hub/operators/${formatNameForUrl(operatorName)}`;
};

/**
 * Creates a map link from a map name
 * @param {string} mapName - Name of the map
 * @returns {string} - URL path to the map page
 */
export const createMapLink = (mapName) => {
  if (!mapName) return '';
  return `/siege/hub/maps/${formatNameForUrl(mapName)}`;
};

/**
 * Creates a filter URL for tips based on criteria
 * @param {Object} filters - Filter criteria
 * @param {string} filters.map - Map name to filter by
 * @param {string} filters.operator - Operator name to filter by
 * @param {string} filters.bombSite - Bomb site to filter by
 * @param {string} filters.tag - Tag to filter by
 * @returns {string} - URL path with query parameters
 */
export const createTipsFilterUrl = ({ map, operator, bombSite, tag }) => {
  const params = new URLSearchParams();
  
  if (map) params.append('map', map);
  if (operator) params.append('operator', operator);
  if (bombSite) params.append('bombSite', bombSite);
  if (tag) params.append('tag', tag);
  
  const queryString = params.toString();
  return queryString ? `/siege/tips?${queryString}` : '/siege/tips';
};

/**
 * Processes text to create links for operators and maps mentioned
 * @param {string} text - Text to process for links
 * @returns {string} - Text with markdown links for operators and maps
 */
export const processTextWithLinks = (text) => {
  if (!text) return '';
  
  // This is a simple example - in a real implementation, you would
  // check against actual data of operator and map names
  
  // Replace references to operators with links
  // Format: "Operator" becomes "[Operator](/siege/hub/operators/operator)"
  
  // Note: You would need to enhance this with a proper list of operator names
  // and a more sophisticated regex to avoid partial matches
  
  return text;
};