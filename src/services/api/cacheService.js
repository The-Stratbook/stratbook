/**
 * Simple in-memory cache service for API responses
 * Helps reduce redundant network requests
 */
class CacheService {
  constructor() {
    this.cache = new Map();
    this.ttl = 5 * 60 * 1000; // 5 minutes default TTL
  }

  /**
   * Get an item from the cache
   * @param {string} key - Cache key
   * @returns {*} - Cached value or undefined if not found/expired
   */
  get(key) {
    const item = this.cache.get(key);
    
    if (!item) {
      return undefined;
    }

    // Check if the item is expired
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return undefined;
    }

    return item.value;
  }

  /**
   * Set an item in the cache
   * @param {string} key - Cache key
   * @param {*} value - Value to store
   * @param {number} [ttl] - Time to live in milliseconds, defaults to the service default
   */
  set(key, value, ttl = this.ttl) {
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }

  /**
   * Remove an item from the cache
   * @param {string} key - Cache key
   */
  remove(key) {
    this.cache.delete(key);
  }

  /**
   * Clear all items from the cache
   */
  clear() {
    this.cache.clear();
  }
}

const cacheServiceInstance = new CacheService();
export default cacheServiceInstance;