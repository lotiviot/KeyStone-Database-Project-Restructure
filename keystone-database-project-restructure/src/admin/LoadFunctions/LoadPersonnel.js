import { db } from 'constants/Fire';

//simple JS async template function that loads information based off of a given collection and runs
//hard to template because of uncertainty of information
export default async function loadPersonnel() {

  const note_arr = [];

  //calls db at given collection
  await db.collection('Mengs-Martial-Arts/Mengs-Martial-Arts/personnel')
  .get()
  .then(e => {
      //for each doc load it into data 
      //load data into an item 
      //load item into note_arr 
      //return note_arr
      e.forEach( doc => {
        const item = {};
        const data = doc.data()
        item.Title = data.Title
        item.key = data.key
        item.DocName = data.DocName
        item.PhotoPath = data.PhotoPath
        item.PhotoURL = data.PhotoURL
        item.name = data.name
        item.position = data.position
        item.type = data.type
        
        note_arr.push(item)
      })
  })
  .catch(error => console.log(error))

return note_arr;
}

//collection specific to any project we create
const load_collections = [
  'Mengs-Martial-Arts/Mengs-Martial-Arts/locations',
  'Mengs-Martial-Arts/Mengs-Martial-Arts/temp2',
  'Mengs-Martial-Arts/Mengs-Martial-Arts/temp3',
  'Mengs-Martial-Arts/Mengs-Martial-Arts/temp4',
  'Mengs-Martial-Arts/Mengs-Martial-Arts/template'
]

export { load_collections};