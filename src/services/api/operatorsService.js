import httpClient from './httpClient';
import cacheService from './cacheService';

/**
 * Service for handling all operator-related data operations
 */
class OperatorsService {
  constructor() {
    this.baseUrl = '/data/siege';
    this.indexUrl = `${this.baseUrl}/operatorsIndex.json`;
  }

  /**
   * Get all operators
   * @returns {Promise<Array>} - Array of operators
   */
  async getAllOperators() {
    const cacheKey = 'all_operators';
    const cachedOperators = cacheService.get(cacheKey);
    
    if (cachedOperators) {
      return cachedOperators;
    }

    try {
      // Fetch the index file
      const operatorsIndex = await httpClient.get(this.indexUrl);
      
      // Fetch all individual operator files
      const operators = await Promise.all(
        operatorsIndex.map(file => httpClient.get(`${this.baseUrl}/operators/${file}`))
      );
      
      cacheService.set(cacheKey, operators);
      return operators;
    } catch (error) {
      console.error('Failed to fetch operators:', error);
      throw error;
    }
  }

  /**
   * Get a specific operator by name
   * @param {string} operatorName - Operator name
   * @returns {Promise<Object>} - The operator data
   */
  async getOperatorByName(operatorName) {
    try {
      const allOperators = await this.getAllOperators();
      const normalizedOperatorName = operatorName.toLowerCase().trim();
      
      return allOperators.find(operator => 
        operator.name.toLowerCase().trim() === normalizedOperatorName
      );
    } catch (error) {
      console.error(`Failed to fetch operator with name ${operatorName}:`, error);
      throw error;
    }
  }

  /**
   * Get operators filtered by side (attacker/defender)
   * @param {string} side - The side to filter by ('attacker', 'defender', or 'both')
   * @returns {Promise<Array>} - Filtered operators
   */
  async getOperatorsBySide(side) {
    if (!side || side === 'both') {
      return this.getAllOperators();
    }
    
    try {
      const allOperators = await this.getAllOperators();
      const normalizedSide = this.normalizeSide(side);
      
      return allOperators.filter(operator => 
        this.normalizeSide(operator.side) === normalizedSide
      );
    } catch (error) {
      console.error(`Failed to fetch operators for side ${side}:`, error);
      throw error;
    }
  }

  /**
   * Get random featured operators
   * @param {number} count - Number of operators to return
   * @returns {Promise<Array>} - Array of random operators
   */
  async getRandomOperators(count = 3) {
    try {
      const allOperators = await this.getAllOperators();
      
      // Shuffle array and take the requested count
      return [...allOperators]
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    } catch (error) {
      console.error('Failed to get random operators:', error);
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

const operatorsServiceInstance = new OperatorsService();
export default operatorsServiceInstance;