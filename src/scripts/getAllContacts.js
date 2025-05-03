import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = readContacts();
    return data;
  } catch (err) {
    console.error('Failed to get contacts:', err);
  }
};

console.log(await getAllContacts());
