import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/apiUrls";
import useAPI from "../hooks/useAPI";
import { useEffect, useState } from "react";
import {Checkbox, Box,List} from '@mui/material';
import {DeleteOutline} from '@mui/icons-material';
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../assets/constant";

const Emails = () => {
const {openDrawer} = useOutletContext();
const [selectedEmails, getSelectedEmails] = useState([]);
const [refreshScreen, setRefreshScreen] = useState(false);
const {type} = useParams();
const getEmailsServices = useAPI(API_URLS.getEmailFromType);
const moveToBinServices = useAPI(API_URLS.moveEmailsToBin);
const deleteEmailService = useAPI(API_URLS.deleteEmail);

useEffect(() => {
  getEmailsServices.call({}, type);
}, [type, refreshScreen])

const allSelectedEmails = (e) => {
  if(e.target.checked){
   const emails = getEmailsServices?.response?.map(email => email._id);
   getSelectedEmails(emails);
  }else{
    getSelectedEmails([]);
  }
}

const deleteSelectedEmails = () => {
  if( type === 'bin'){
    deleteEmailService.call(selectedEmails);
  }else{
    moveToBinServices.call(selectedEmails);
  }
  setRefreshScreen(prevState => !prevState);
}

  return (
    <Box style={openDrawer ? {marginLeft:250,width:'calc(100%-250px)'}:{width:'100%'}}>
      <Box style={{padding: '20px 10px 0px 10px', display: 'flex',alignItems:'center'}}>
        <Checkbox size="small" onChange={(e) => allSelectedEmails(e)}/>
        <DeleteOutline fontSize="small" onClick={() => deleteSelectedEmails()} />
      </Box>
      <Box>
        <List>
          {
            getEmailsServices?.response?.map(email => (
              <Email
                key={email._id}
                email={email}
                selectedEmails = {selectedEmails}
                setRefreshScreen = {setRefreshScreen}
                getSelectedEmails = {getSelectedEmails}
              />
            ))
          }
        </List>
        {
          getEmailsServices?.response?.length == 0 &&
            <NoMails message={EMPTY_TABS[type]}/>
        }
      </Box>
    </Box>
  )
}

export default Emails;