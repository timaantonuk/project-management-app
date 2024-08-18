export function generateRandomNumericID(length) {
  let id = '';
  const characters = '0123456789';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}