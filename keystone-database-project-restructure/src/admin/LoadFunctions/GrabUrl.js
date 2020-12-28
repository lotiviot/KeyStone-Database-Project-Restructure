import { storage } from 'constants/Fire';

//simple JS function that grabs url's based off variable ref in storage to download
//this function is only used when an image is verified to not explicitly have a firestore related document to it
export default async function GrabUrl(ref) {
    var test = null
    await storage.ref(ref).getDownloadURL().then(
        function(e){
            //console.log(e)
            test = e
        }
    )
    return test
}
