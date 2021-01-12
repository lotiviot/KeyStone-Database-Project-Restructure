import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import uuid from "uuid";
import {db} from 'constants/Fire'
export default function Upload(props) {
  const { onClose, selectedValue, open } = props;
  const [id, setId] = React.useState(uuid.v4());
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dateSubmitted, setDateSubmitted] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipCode, setzipCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [dateDonorContacted, setDateDonorContacted] = React.useState("");
  const [reason, setReason] = React.useState("");

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
 let AddDoc = async(e) => {     

    //object creation
    const doc = {
        docid:id ,
        docfirstName:firstName ,
        doclastName:lastName ,
        docdateSubmitted:dateSubmitted ,
        docphoneNumber:phoneNumber ,
        docaddress:address ,
        doccity:city ,
        docstate:state ,
        doczipCode:zipCode ,
        docemail:email ,
        docamount:amount ,
        docdateDonorContacted:dateDonorContacted ,
        docreason:reason ,
    }

    //firestore object creation with error checking
    await db.collection("payments")
        .doc(doc.docid)
        .set(doc)
        .then(
            function() { 
                console.log("check it");
            })
            .catch(function(error){
                console.error("wrong",error);
            })
    
    //data reset. 
    //maybe once this is complete we could have the page refresh immediately?
    
    alert("Refresh the page to see changes!")
}
  var asdf = ""
  var asdf2 = ""
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <form >
        <DialogTitle id="simple-dialog-title">Upload Donation</DialogTitle>
                        <input 
                            value={firstName} 
                            onChange={(e)=>{ 
                              setFirstName(e.target.value)
                            }}
                           type="text"   
                            className="backend-field"
                            placeholder="First Name" 
                        />
                        <input 
                            value={lastName} 
                            onChange={(e)=>{
                              setLastName(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Last Name" 
                        />
                        <input 
                            value={dateSubmitted} 
                            onChange={(e)=>{
                              setDateSubmitted(e.target.value)
                            }}
                            type="date"   
                            className="backend-field"
                            placeholder="Date Submitted" 
                        />
                        <input 
                            value={phoneNumber} 
                            onChange={(e)=>{
                              setPhoneNumber(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Phone Number" 
                        />
                        <input 
                            value={address} 
                            onChange={(e)=>{
                              setAddress(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Address" 
                        />
                        <input 
                            value={city} 
                            onChange={(e)=>{
                              setCity(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="City" 
                        />
                        <input 
                            value={state} 
                            onChange={(e)=>{
                              setState(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="State" 
                        />
                        <input 
                            value={zipCode} 
                            onChange={(e)=>{
                              setzipCode(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Zip Code" 
                        />
                        <input 
                            value={email} 
                            onChange={(e)=>{
                              setEmail(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Email" 
                        />
                        <input 
                            value={amount} 
                            onChange={(e)=>{
                              setAmount(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Amount" 
                        />
                        <input 
                            value={dateDonorContacted} 
                            onChange={(e)=>{
                              setDateDonorContacted(e.target.value)
                            }}
                            type="date"   
                            className="backend-field"
                            placeholder="Date Donor Contacted" 
                        />
                        <input 
                            value={reason} 
                            onChange={(e)=>{
                              setReason(e.target.value)
                            }}
                            type="text"   
                            className="backend-field"
                            placeholder="Reason" 
                        />
                        <input className="backend-field" type="submit" value="Submit"/>
                </form>
    </Dialog>
  );
}