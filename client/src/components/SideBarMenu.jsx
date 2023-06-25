import { useState} from 'react';
import { Box, Button, ListItem,List, styled } from '@mui/material';
import {CreateOutlined} from '@mui/icons-material';
import { SideBarData } from '../config/sidebarData';
import Composemail from './Composemail';
import {NavLink,useParams} from 'react-router-dom';
import { routes } from '../routes/routes';


const ComposeButton = styled(Button)`
  background: #c2e7ff;
  color: #001d35;
  padding: 15px;
  border-radius: 16px;
  min-width: 140px;
  text-transform: none;
`
const Container = styled(Box)`
  padding:8px;
  & > ul {
    padding: 10px 0 0 5px;
    font-size:14px;
    font-weight:600;
    cursor: pointer;
    & > a {
      text-decoration:none;
      color:inherit;
    }
  },
  & > ul > a > li > svg {
    margin-right:20px;
  }
  
`

const SideBarMenu = () => {

  const [openDialog,setDialog] = useState(false);
  const {type} = useParams();

  const onComposeClick = () => {
    setDialog(true);
  }

  return (
    <Container>
          <ComposeButton variant='contained' onClick={() => onComposeClick()} >
              <CreateOutlined/>Compose
          </ComposeButton>
        <List>
          {
            SideBarData.map(data =>(
              <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                <ListItem style={type === data.name.toLowerCase() ? {
                  backgroundColor:'#d3e3fd',
                  borderRadius:'0 16px 16px 0'
                }:{}}>
                  <data.icon fontSize='small'/>
                  {data.title}
                </ListItem>
              </NavLink>
            ))
          }
        </List>
        <Composemail openDialog={openDialog} setDialog={setDialog}/>
    </Container>
  )
}

export default SideBarMenu;