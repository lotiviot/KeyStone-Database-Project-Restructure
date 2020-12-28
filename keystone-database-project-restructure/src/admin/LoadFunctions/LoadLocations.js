import { db } from 'constants/Fire';
import { Simulate } from 'react-dom/test-utils';

//simple JS async template function that loads information based off of a given collection and runs
//hard to template because of uncertainty of information
export default async function Load_Locations() {

  const note_arr = [];

  //calls db at given collection
  await db.collection('Mengs-Martial-Arts/Mengs-Martial-Arts/locations')
  .get()
  .then(e => {
      //for each doc load it into data 
      //load data into an item 
      //load item into note_arr 
      //return note_arr
      e.forEach( doc => {
        const item = {};
        const data = doc.data()
        item.key = data.key    
        item.DocName = data.DocName
        item.address = data.address
        item.city = data.city
        item.owner = data.owner
        item.site = data.site
        item.tel = data.tel
        item.range = data.range
        note_arr.push(item)
      })
  })
  .catch(error => console.log(error))

return note_arr;
}