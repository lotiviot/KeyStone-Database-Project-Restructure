import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

export default function Delete(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
//   const componentDidMount= (e) ={
//     //load_notes().then(i => {this.setState({item: i})})
//   }

// //basic implementation of pushing a document to firebase
// AddDoc = async(e) => {

//     //photo specific file creation and push that also fetches URL for simpler data request
//     const dp_PhotoPath = this.state.collectionName+'/'+this.state.dp_image.name
//     await storage.ref(dp_PhotoPath).put(this.state.dp_image)
     
//     //object creation
//     const doc = {
//         DocName: this.state.dp_DocName,
//         TextArea: this.state.dp_TextArea,
//         Title: this.state.dp_Title,
//         key: this.state.dp_key,
//     }

//     //firestore object creation with error checking
//     await db.collection(this.state.collectionName)
//         .doc(doc.DocName)
//         .set(doc)
//         .then(
//             function() { 
//                 console.log("check it");
//             })
//             .catch(function(error){
//                 console.error("wrong",error);
//             })
    
//     //data reset. 
//     //maybe once this is complete we could have the page refresh immediately?
//     this.setState({
//         dp_DocName: '',
//         dp_TextArea: '',
//         dp_Title: '',
//         dp_key: uuid.v4(),
//     }) 
//     alert("Refresh the page to see changes!")
// }
  var asdf = ""
  var asdf2 = ""
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <form >
        <DialogTitle id="simple-dialog-title">Delete Donation</DialogTitle>
                        <input 
                            value={asdf} 
                            /*onChange={this.handleChange}*/ 
                            type="text" 
                            name="text" 
                            id="text" 
                            className="backend-field"
                            placeholder="Text" 
                        />
                        <input 
                            value={asdf2} 
                            /*onChange={this.handleChange}*/   
                           type="date" 
                            name="date" 
                            id="date" 
                            className="backend-field"
                            placeholder="Date" 
                        />
                        <input className="backend-field" type="submit" value="Submit"/>
                </form>
    </Dialog>
  );
}