export function generateUniqueEmail(prefix = 'user') {
  const timestamp = Date.now();
  return `${prefix}_${timestamp}@gmail.com`;
}