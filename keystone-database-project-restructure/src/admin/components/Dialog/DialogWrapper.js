import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import Upload from 'admin/components/Dialog/Dialogs/Upload'
import Delete from 'admin/components/Dialog/Dialogs/Delete'
// this makes object emails
const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
// sets style using mat ui
Upload.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
//checks different prop types and makes sure requireds are present for Upload
export default function DialogWrapper(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  // opens and sets open state then checks slected values for email props
  const handleClickOpen = () => {
    setOpen(true);
  };
  // sets open on click
  const handleClose = (value) => {
    setOpen(false);
  };
   // sets open false on close
  let renderSwitch = (dialog) => {
    switch(dialog) {
      case 'Upload':
        return <Upload open={open} onClose={handleClose}/>
       case 'Delete':
         return <Delete selectedData={props.selectedData} open={open} onClose={handleClose} />
    }
  }
   // checks case for upload or delete then handels based on case
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.label}
      </Button>
      {renderSwitch(props.label)}
    </div>
  ); 
}
// button render and styling