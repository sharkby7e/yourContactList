// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB('contact', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('contact')) {
                console.log('contact database alaready exits');
                return;
            }
            db.createObjectStore('contact', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
        }
    });

};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const contactsDb = await openDB('contact', 1);
    const tx = contactsDb.transaction('contact', 'readwrite');
    const store = tx.objectStore('contact');
    const request = store.add({ contact: name, home: home, cell: cell, email: email });
    const result = await request;
    console.log(result);
 
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
