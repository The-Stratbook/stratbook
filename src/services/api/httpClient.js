/**
 * Base HTTP client for API requests
 * Handles common fetch operations with error handling
 */
class HttpClient {
  /**
   * Make a GET request to the specified URL
   * @param {string} url - The URL to fetch from
   * @returns {Promise<any>} - The parsed JSON response
   * @throws {Error} - Any error that occurs during the fetch operation
   */
  async get(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`GET request failed for ${url}:`, error);
      throw error;
    }
  }

  /**
   * Make a POST request to the specified URL
   * @param {string} url - The URL to send data to
   * @param {Object} data - The data to send in the request body
   * @returns {Promise<any>} - The parsed JSON response
   * @throws {Error} - Any error that occurs during the fetch operation
   */
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`POST request failed for ${url}:`, error);
      throw error;
    }
  }
}

const httpClientInstance = new HttpClient();
export default httpClientInstance;