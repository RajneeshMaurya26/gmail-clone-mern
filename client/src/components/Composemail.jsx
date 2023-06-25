import { useState } from 'react';
import { Box, Dialog, InputBase, Typography, styled, TextField,Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import useAPI from '../hooks/useAPI';
import { API_URLS } from '../services/apiUrls';

const styledDialog = `
  height:90%;
  width:80%;
  max-width:100%;
  max-height:100%;
  box-shadow:none;
  border-radius: 10px 10px 0 0;
`

const Header = styled(Box)`
  display: flex;
  justify-content:space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-size:14px;
    font-weight:500;
  }
`

const RecipientSubject = styled(Box)`
  display:flex;
  flex-direction:column;
  padding: 0 15px;
  & > div {
    font-size:14px;
    border-bottom:1px solid #f5f5f5;
    margin-top:5px;
  }
`

const Footer = styled(Box)`
  display:flex;
  justify-content:space-between;
  padding: 10px 15px;
  align-items:center;
`

const ButtonSend = styled(Button)`
  background:#0B57D0;
  color:#fff;
  font-size:500;
  text-transform: none;
  border-radius:18px;
  width:100px;
`

const Composemail = ({openDialog,setDialog}) => {

  const [mailData,setmailData] = useState();
  const sentEmailServices = useAPI(API_URLS.saveSentEmail);
  const saveDraftEmailServices = useAPI(API_URLS.saveDraftEmail);

    const closeCompose = (e) => {
        e.preventDefault();
        setDialog(false);

        const payload ={
          to:mailData.to,
          from: "rajneesh26011998maurya@gmail.com",
          subject:mailData.subject,
          body:mailData.body,
          date: new Date(),
          attachment:'',
          name: 'Rajneesh Maurya',
          starred:false,
          type:'draft'
        }

        saveDraftEmailServices.call(payload);

        if(!saveDraftEmailServices.error){
          setDialog(false);
          setmailData({});

        }else{
          
        }
    }
    
    const onValueChange = (e) => {
      setmailData({ ...mailData, [e.target.name]:e.target.value});
      console.log(mailData)
  }

    const config = {
        Host : "smtp.elasticemail.com",
        Username :"emailcloneapp1@yopmail.com",
        Password : "FED9C9C0B1AC6F5023FCE3DAE5B5B36B6B9B",
        Port: 2525,
    }

    const onsendMail = (e) => {
        e.preventDefault();
        setDialog(false);
        if(window.Email){
           window.Email.send({
                ...config,
                To : mailData.to,
                From : "rajneesh26011998maurya@gmail.com",
                Subject : mailData.subject,
                Body : mailData.body
            }).then(
              message => alert(message)
            );
        }

        const payload ={
          to:mailData.to,
          from: "rajneesh26011998maurya@gmail.com",
          subject:mailData.subject,
          body:mailData.body,
          date: new Date(),
          attachment:'',
          name: 'Rajneesh Maurya',
          starred:false,
          type:'sent'
        }

        sentEmailServices.call(payload);

        if(!sentEmailServices.error){
          setDialog(false);
          setmailData({});

        }else{
          
        }
    }

  return (
    <Dialog 
     open={openDialog}
     PaperProps={{sx:styledDialog}}
    >
      <Header>
        <Typography>
            New Message
        </Typography>
        <Close fontSize='small' onClick={(e) => closeCompose(e)} sx={{cursor:'pointer'}}/>
      </Header>
      <RecipientSubject>
        <InputBase placeholder='Recipients' onChange={(e) => onValueChange(e)} name="to"/>
        <InputBase placeholder='Subject' onChange={(e) => onValueChange(e)} name='subject'/>
      </RecipientSubject>
        <TextField 
            multiline
            rows={16.5}
            sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
            onChange={(e) => onValueChange(e)}
            name='body'
        />
      <Footer>
        <ButtonSend onClick={(e) => onsendMail(e)}>Send </ButtonSend>
        <DeleteOutline onClick={() => setDialog(false)} sx={{cursor:'pointer'}}/>
      </Footer>
    </Dialog>
  )
}

export default Composemail;