import httpClient from './httpClient';
import cacheService from './cacheService';

/**
 * Service for handling all tips-related data operations
 */
class TipsService {
  constructor() {
    this.baseUrl = '/data/siege';
    this.indexUrl = `${this.baseUrl}/tipsIndex.json`;
  }

  /**
   * Get all tips
   * @returns {Promise<Array>} - Array of tips
   */
  async getAllTips() {
    const cacheKey = 'all_tips';
    const cachedTips = cacheService.get(cacheKey);
    
    if (cachedTips) {
      return cachedTips;
    }

    try {
      // Fetch the index file
      const tipsIndex = await httpClient.get(this.indexUrl);
      
      // Fetch all individual tip files
      const tips = await Promise.all(
        tipsIndex.map(file => httpClient.get(`${this.baseUrl}/tips/${file}`))
      );
      
      cacheService.set(cacheKey, tips);
      return tips;
    } catch (error) {
      console.error('Failed to fetch tips:', error);
      throw error;
    }
  }

  /**
   * Get a specific tip by ID
   * @param {string} id - Tip ID
   * @returns {Promise<Object>} - The tip data
   */
  async getTipById(id) {
    const cacheKey = `tip_${id}`;
    const cachedTip = cacheService.get(cacheKey);
    
    if (cachedTip) {
      return cachedTip;
    }

    try {
      const tip = await httpClient.get(`${this.baseUrl}/tips/${id}.json`);
      cacheService.set(cacheKey, tip);
      return tip;
    } catch (error) {
      console.error(`Failed to fetch tip with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * Filter tips based on specified criteria
   * @param {Object} filters - Filter criteria
   * @returns {Promise<Array>} - Filtered tips
   */
  async getFilteredTips(filters) {
    try {
      const allTips = await this.getAllTips();
      
      return allTips.filter(tip => {
        // Apply map filter
        if (filters.map && tip.map !== filters.map && tip.map !== 'Any') {
          return false;
        }
        
        // Apply operator filter
        if (filters.operator && (!tip.operator || tip.operator.toLowerCase() !== filters.operator.toLowerCase())) {
          return false;
        }
        
        // Apply side filter
        if (filters.side && 
            filters.side !== 'both' && 
            tip.side && 
            this.normalizeSide(tip.side) !== this.normalizeSide(filters.side)) {
          return false;
        }
        
        // Apply skill filter
        if (filters.skill && tip.skill !== filters.skill) {
          return false;
        }
        
        // Apply tag filter
        if (filters.tag && (!Array.isArray(tip.tags) || !tip.tags.includes(filters.tag))) {
          return false;
        }
        
        // Apply search term filter
        if (filters.searchTerm) {
          const term = filters.searchTerm.toLowerCase();
          const titleMatch = tip.title?.toLowerCase().includes(term);
          const descMatch = tip.description?.toLowerCase().includes(term);
          const tagMatch = Array.isArray(tip.tags) && tip.tags.some(tag => 
            tag.toLowerCase().includes(term)
          );
          
          if (!titleMatch && !descMatch && !tagMatch) {
            return false;
          }
        }
        
        return true;
      });
    } catch (error) {
      console.error('Failed to get filtered tips:', error);
      throw error;
    }
  }

  /**
   * Helper method to normalize side values for comparison
   * @param {string} side - Side value to normalize
   * @returns {string} - Normalized side value
   */
  normalizeSide(side) {
    const side_lower = side.toLowerCase();
    if (side_lower === 'attacker' || side_lower === 'attackers') {
      return 'attacker';
    } else if (side_lower === 'defender' || side_lower === 'defenders') {
      return 'defender';
    }
    return side_lower;
  }
}

const tipsServiceInstance = new TipsService();
export default tipsServiceInstance;