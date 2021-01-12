import { db } from 'constants/Fire';

//simple JS async template function that loads information based off of a given collection and runs
//hard to template because of uncertainty of information
export default async function LoadDataGrid() {

  const note_arr = [];

  //calls db at given collection
  await db.collection('payments')
  .get()
  .then(e => {
      //for each doc load it into data 
      //load data into an item 
      //load item into note_arr 
      //return note_arr
      e.forEach( doc => {
        const item = {};
        const data = doc.data()
        
        item.id = data.id;
        item.firstName = data.firstName;
        item.lastName = data.lastName
        item.dateSubmitted = data.dateSubmitted
        item.phoneNumber = data.phoneNumber
        item.address = data.address
        item.city = data.city
        item.state = data.state
        item.zipCode = data.zipCode
        item.email = data.email
        item.amount = data.amount
        item.dateDonorContacted = data.dateDonorContacted
        item.reason = data.reason

        note_arr.push(item)
      })
  })
  .catch(error => console.log(error))

return note_arr;
}

//collection specific to any project we create

