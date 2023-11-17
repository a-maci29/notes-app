import React from 'react';
import Button from '@mui/material/Button';
import {  Modal, Box, Typography } from '@mui/material';
// import styles from './styles/ConfirmationModal.module.scss';


const ConfirmationModal = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }
    

    return (
      <>
        <Button variant="outlined" onClick={handleOpen}>Soy un Button</Button>
  
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              display: 'flex',
              text: 'center',
              width: 500,
              pb: '25px',
              pt: '10px',
              bgcolor: 'white',
            }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </>
    )
  }

export default ConfirmationModal;
