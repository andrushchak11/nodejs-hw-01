import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const clearedData = [];
    await fs.writeFile(PATH_DB, JSON.stringify(clearedData, null, 2), 'utf8');
    console.log('All contacts have been removed.');
  } catch (err) {
    console.error('Failed to remove contacts:', err);
  }
};

removeAllContacts();
