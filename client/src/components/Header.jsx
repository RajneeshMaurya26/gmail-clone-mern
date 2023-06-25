import React from 'react'
import {AppBar, Box, InputBase, Toolbar, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {gmailLogo} from '../assets/constant';


const Appbar = styled(AppBar)`
   background:#F5F5F5;
   box-shadow: none;
`
const SearchBox = styled(Box)`
   background:#EAF1FB;
   margin-left:80px;
   border-radius:8;
   min-width:690px;
   max-width:720px;
   height:48px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:0 20px;
   & > div{
    width:100%;
    padding: 0 10px;
   }
`
const OptionsWrapper = styled(Box)`
  width:100%;
  display:flex;
  justify-content:end;
  & > svg {
    margin-left:20px;
  }
`
const Header = ({toggleDrawer}) => {
  return (
    <>
      <Appbar position='static'>
        <Toolbar>
            <MenuIcon color='action' onClick= {toggleDrawer}/>
            <img src={gmailLogo} alt='logo' style={{width:110, marginLeft:15}}/>
            <SearchBox>
                <SearchIcon color='action'/>
                <InputBase placeholder='Search Mail'/>
                <TuneIcon color='action'/>
            </SearchBox>
            <OptionsWrapper>
                <HelpOutlineOutlinedIcon color='action' />
                <SettingsOutlinedIcon color='action'/>
                <AppsOutlinedIcon color='action'/>
                <AccountCircleOutlinedIcon color='action'/>
            </OptionsWrapper>
        </Toolbar>
      </Appbar>
    </>
  )
}

export default Header