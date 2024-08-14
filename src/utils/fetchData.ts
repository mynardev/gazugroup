/**
 * Fetch data from a given URL.
 * @param url - The URL to fetch data from.
 * @param options - Optional fetch options.
 * @returns A promise that resolves with the fetched data.
 */
export const fetchData = async (url: string, options?: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  