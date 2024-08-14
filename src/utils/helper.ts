/**
 * Format a date to a readable string.
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  /**
   * Capitalize the first letter of a string.
   * @param str - The string to capitalize.
   * @returns The capitalized string.
   */
  export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  