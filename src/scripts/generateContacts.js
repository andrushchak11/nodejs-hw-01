import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const oldContacts = await readContacts();
    let newContacts = [];

    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    await writeContacts([...oldContacts, ...newContacts]);
  } catch (err) {
    console.error('Failed to generate contacts:', err);
  }
};

generateContacts(5);
