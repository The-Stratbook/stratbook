import httpClient from './httpClient';
import cacheService from './cacheService';

/**
 * Service for handling external tools data
 */
class ExternalToolsService {
  constructor() {
    this.baseUrl = '/data/externalTools.json';
  }

  /**
   * Get all external tools
   * @returns {Promise<Object>} - External tools data
   */
  async getAllTools() {
    const cacheKey = 'external_tools';
    const cachedTools = cacheService.get(cacheKey);
    
    if (cachedTools) {
      return cachedTools;
    }

    try {
      const tools = await httpClient.get(this.baseUrl);
      cacheService.set(cacheKey, tools);
      return tools;
    } catch (error) {
      console.error('Failed to fetch external tools:', error);
      throw error;
    }
  }

  /**
   * Get tools by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} - Tools in the specified category
   */
  async getToolsByCategory(category) {
    try {
      const tools = await this.getAllTools();
      return tools[category] || [];
    } catch (error) {
      console.error(`Failed to fetch ${category} tools:`, error);
      throw error;
    }
  }

  /**
   * Get competitive tools
   * @returns {Promise<Array>} - Competitive tools
   */
  async getCompetitiveTools() {
    return this.getToolsByCategory('competitive');
  }

  /**
   * Get tracker tools
   * @returns {Promise<Array>} - Tracker tools
   */
  async getTrackerTools() {
    return this.getToolsByCategory('trackers');
  }

  /**
   * Get learning tools
   * @returns {Promise<Array>} - Learning tools
   */
  async getLearningTools() {
    return this.getToolsByCategory('learning');
  }
}

const externalToolsServiceInstance = new ExternalToolsService();
export default externalToolsServiceInstance;