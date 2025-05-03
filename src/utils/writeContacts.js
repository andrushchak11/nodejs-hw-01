import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();
    const updatedData = [...data, ...updatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf8');
    console.log('Data successfully written to file.');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};
