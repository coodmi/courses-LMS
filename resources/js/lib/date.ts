import { format } from 'date-fns';

/**
 * Format a date string to a human-readable format
 * @param dateString - The date string to format
 * @param formatString - The format string (default: 'MMMM dd, yyyy, hh:mm a')
 * @returns Formatted date string or 'N/A' if invalid
 */
export const formatDate = (dateString: string | undefined, formatString: string = 'MMMM dd, yyyy, hh:mm a'): string => {
   if (!dateString) return 'N/A';
   try {
      const date = new Date(dateString);
      return format(date, formatString);
   } catch (error) {
      return 'N/A';
   }
};

/**
 * Format a date string to short format (e.g., "Jan 1, 2024")
 * @param dateString - The date string to format
 * @returns Formatted date string or 'N/A' if invalid
 */
export const formatDateShort = (dateString: string | undefined): string => {
   return formatDate(dateString, 'MMM d, yyyy');
};

/**
 * Format a date string to locale string
 * @param dateString - The date string to format
 * @returns Formatted date string using browser locale
 */
export const formatDateLocale = (dateString: string): string => {
   return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
   });
};

/**
 * Format a date string to locale date and time string
 * @param dateString - The date string to format
 * @returns Formatted date and time string using browser locale
 */
export const formatDateTimeLocale = (dateString: string): string => {
   return new Date(dateString).toLocaleString();
};

/**
 * Format a Date object to Laravel datetime format (YYYY-MM-DD HH:mm:ss)
 * This is used when sending dates to Laravel backend
 * @param date - The Date object or string to format
 * @returns Formatted datetime string for Laravel
 */
export const formatDateForLaravel = (date: Date | string): string => {
   if (!date) return '';
   const d = date instanceof Date ? date : new Date(date);
   const year = d.getFullYear();
   const month = String(d.getMonth() + 1).padStart(2, '0');
   const day = String(d.getDate()).padStart(2, '0');
   const hours = String(d.getHours()).padStart(2, '0');
   const minutes = String(d.getMinutes()).padStart(2, '0');
   const seconds = String(d.getSeconds()).padStart(2, '0');
   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * Format datetime for datetime-local input (YYYY-MM-DDTHH:mm)
 * @param datetime - The datetime string in format "YYYY-MM-DD HH:mm:ss"
 * @returns Formatted datetime for datetime-local input
 */
export const formatDatetimeLocal = (datetime?: string): string => {
   if (!datetime) return '';
   return datetime.replace(' ', 'T').substring(0, 16);
};
