import {useOutletContext, useLocation} from 'react-router-dom';
import {Box, Typography, styled} from '@mui/material';
import { ArrowBack, Delete } from '@mui/icons-material';
import { emptyProfilePic } from '../assets/constant';
import useAPI from '../hooks/useAPI';
import { API_URLS } from '../services/apiUrls';

const Icons = styled(Box)`
  padding:15px;
`
const Subject = styled(Typography)`
  font-size:22px;
  margin: 10px 0 20px 79px
`

const Indicator = styled(Box)`
  font-size:12px;
  background:#ddd;
  color:#222;
  padding:2px 4px; 
  margin-left:6px;
  border-radius:4px;
` 
const Container = styled(Box)`
  margin: 10px 0 0 15px;
  width:100%;
  & > div {
    display:flex;
    & > p > span {
      font-size:12px;
      color:#5E5E5E;
    }
  }
`


const Date = styled(Box)`
  margin: 0 50px 0 auto;
  font-size:12px;
  color:#5E5E5E;
`

const Image = styled('img')`
  border-radius:50%;
  width:40px;
  height:40px;
  margin: 5px 10px 0 10px;
  background:#cccccc;
`

const View = () => {
    const {openDrawer} = useOutletContext();
    
    const {state} = useLocation();
    const {email} = state;
    const moveToBinServices = useAPI(API_URLS.moveEmailsToBin);
    const deleteEmail = () => {
      moveToBinServices.call([email._id]);
      window.history.back();
    }
  return (
    <div style={openDrawer ? {marginLeft:250}:{width:'100%'}}>
        <Icons>
          <ArrowBack fontSize='small' onClick={() => window.history.back()} color='action'/>
          <Delete fontSize='small' color='action' style={{marginLeft:'40'}} onClick={() => deleteEmail()}/>
        </Icons>
        <Subject>
          {email.subject} <Indicator component='span'>Inbox</Indicator>
        </Subject>
        <Box style= {{display:'flex'}}>
          <Image src={emptyProfilePic} alt='dp' />
          <Container>
            <Box>
              <Typography>
                {email.name}
                <Box component='span'>&nbsp;&#60;{email.to}&#62;</Box>
              </Typography>
              <Date>
                {(new window.Date(email.date)).getDate()} &nbsp;
                {(new window.Date(email.date)).toLocaleString('default', {month: 'long'})}
                {(new window.Date(email.date)).getFullYear()}
              </Date>
            </Box>
            <Typography style={{marginTop:20}}>
              {email.body}
            </Typography>
          </Container>
        </Box>
        <Box>

        </Box>
    </div>
  )
}

export default View;