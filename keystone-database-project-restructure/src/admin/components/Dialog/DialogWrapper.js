import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import Upload from 'admin/components/Dialog/Dialogs/Upload'
import Delete from 'admin/components/Dialog/Dialogs/Delete'

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

Upload.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DialogWrapper(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  let renderSwitch = (dialog) => {
    switch(dialog) {
      case 'Upload':
        return <Upload open={open} onClose={handleClose} />
       case 'Delete':
         return <Delete selectedData={props.selectedData} open={open} onClose={handleClose} />
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.label}
      </Button>
      {renderSwitch(props.label)}
    </div>
  );
}
