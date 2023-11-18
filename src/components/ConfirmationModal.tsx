import React from 'react';
import Button from '@mui/material/Button';
import {  Modal, Box, Typography, Stack, Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
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
          <Stack
            sx={{
              display: 'flex',
              text: 'center',
              width: 400,
              height: 600,
              pb: '25px',
              pt: '10px',
              bgcolor: 'white',
              alignItems: 'center'
            }}>
              <Box
                sx={{ flexDirection: 'column',
                display: 'flex',
                textAlign: 'center'
                }}>
                <Typography
                sx={{ fontWeight: 600,
                      fontSize: 'h4.fontSize' }}>
                  Thanks for sharing!
                </Typography>
                <Typography
                sx={{ fontSize: 'h6.fontSize'}}>
                  Your submission is under review.
                </Typography>   
              </Box>
              <Box
                  sx={{border: 2,
                     width:'100%',
                     height: '50%',
                     mt: 3,
                     mb: 3 }}>
                </Box>
            <Typography sx={{ fontSize: 16 }}>
              Follow us and spread the news
            </Typography>
            <Container
              sx={{ display: 'flex',
                    flexDirection: 'row'}}>
              <Box>
                BOX ONE
              </Box>
              <Box>
                BOX ONE
              </Box>
              <Box>
                BOX ONE
              </Box>
              <Box>
                BOX ONE
              </Box>
              <Box>
                BOX ONE
              </Box>
              
            </Container>
            <Typography>
              #PHLASK
            </Typography>
          </Stack>
        </Modal>
      </>
    )
  }

export default ConfirmationModal;
