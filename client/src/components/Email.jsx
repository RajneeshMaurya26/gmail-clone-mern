import {useNavigate} from 'react-router-dom'
import {Box, Checkbox, Typography,styled} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import {routes} from '../routes/routes';
import useAPI from '../hooks/useAPI';
import { API_URLS } from '../services/apiUrls';

const Wrapper = styled(Box)`
  padding: 0 0 0 10px;
  background: #f2f6fc;
  cursor:pointer;
  display:flex; 
  align-items:center;
  & > div {
    display:flex;
    width:100%;
    & > p {
        font-size:14px;
    }
  }
` 
const Indicator = styled(Typography)`
   font-size: 12px !important;
   background:#ddd;
   color:#222;
   padding: 0 4px;
   border-radius:4px;
   margin-right:6px;
`
const Date = styled(Typography)`
   margin-left:auto;
   margin-right:20px;
   font-size:12px;
   color:#5F6368;
`

const Email = ({email, selectedEmails,setRefreshScreen,getSelectedEmails}) => {

  const navigate = useNavigate();
  const toggleStarredMailService = useAPI(API_URLS.toggleStarredEmail);

  const toggleStarredMails = () => {
    toggleStarredMailService.call({ id: email._id, value: !email.starred });
    setRefreshScreen(prevState => !prevState);
  }

  const onValueChange = () => {
    if(selectedEmails.includes(email._id)){
      getSelectedEmails(prevState => prevState.filter(id => id != email._id));
    }else{
      getSelectedEmails(prevState => [...prevState,email._id]);
    }
  }

  return (
    <Wrapper>
        <Checkbox size='small'
         checked={selectedEmails.includes(email._id)}
         onChange={() => onValueChange()}
        />
        {
          email.starred ? 
              <Star fontSize='small'  style={{marginRight:10,color:'#FFD700'}} onClick={() => toggleStarredMails()} />
              :
              <StarBorder fontSize='small' style={{marginRight:'10px'}} onClick={() => toggleStarredMails()} />
        }
        <Box onClick={() => navigate(routes.view.path,{state: {email:email}} )}>
            <Typography width={200}>{email.name}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.bdy}</Typography>
            <Date>
                {(new window.Date(email.date)).getDate()} &nbsp;
                {(new window.Date(email.date)).toLocaleString('default', {month: 'long'})}
            </Date>
        </Box>
    </Wrapper>
  )
}

export default Email;