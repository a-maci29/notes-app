import React from 'react';
import Button from '@mui/material/Button';
import {  Modal, Box, Typography, Stack, Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          aria-labelledby="Confirmation"
          aria-describedby="Confirmation"
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
                sx={{
                    border: 2,
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
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      width: '60%'}}>
              
              <ShareIcon></ShareIcon>
              
              <FacebookIcon></FacebookIcon>
              
              <InstagramIcon></InstagramIcon>
              
              <TwitterIcon></TwitterIcon>
              
              <GitHubIcon></GitHubIcon>
                  
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
