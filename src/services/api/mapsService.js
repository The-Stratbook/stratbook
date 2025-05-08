import httpClient from './httpClient';
import cacheService from './cacheService';

/**
 * Service for handling all map-related data operations
 */
class MapsService {
  constructor() {
    this.baseUrl = '/data/siege';
    this.indexUrl = `${this.baseUrl}/mapsIndex.json`;
  }

  /**
   * Get all maps
   * @returns {Promise<Array>} - Array of maps
   */
  async getAllMaps() {
    const cacheKey = 'all_maps';
    const cachedMaps = cacheService.get(cacheKey);
    
    if (cachedMaps) {
      return cachedMaps;
    }

    try {
      // Fetch the index file
      const mapsIndex = await httpClient.get(this.indexUrl);
      
      // Fetch all individual map files
      const maps = await Promise.all(
        mapsIndex.map(file => httpClient.get(`${this.baseUrl}/maps/${file}`))
      );
      
      cacheService.set(cacheKey, maps);
      return maps;
    } catch (error) {
      console.error('Failed to fetch maps:', error);
      throw error;
    }
  }

  /**
   * Get a specific map by name
   * @param {string} mapName - Map name
   * @returns {Promise<Object>} - The map data
   */
  async getMapByName(mapName) {
    try {
      const allMaps = await this.getAllMaps();
      const normalizedMapName = mapName.toLowerCase().trim();
      
      return allMaps.find(map => 
        map.name.toLowerCase().trim() === normalizedMapName
      );
    } catch (error) {
      console.error(`Failed to fetch map with name ${mapName}:`, error);
      throw error;
    }
  }

  /**
   * Get random featured maps
   * @param {number} count - Number of maps to return
   * @returns {Promise<Array>} - Array of random maps
   */
  async getRandomMaps(count = 3) {
    try {
      const allMaps = await this.getAllMaps();
      
      // Shuffle array and take the requested count
      return [...allMaps]
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    } catch (error) {
      console.error('Failed to get random maps:', error);
      throw error;
    }
  }
}

const mapsServiceInstance = new MapsService();
export default mapsServiceInstance;