import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();

    if (data.length === 0) {
      console.log('No contacts to remove. The list is already empty');
      return;
    }

    data.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');
    console.log('Last contact successfully removed.');
  } catch (err) {
    console.error('Error removing last contact:', err);
  }
};

removeLastContact();
