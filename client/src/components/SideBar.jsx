import React from 'react'
import { Drawer } from '@mui/material';
import SideBarMenu from './SideBarMenu';

const SideBar = ({openDrawer}) => {
  return (
    <>
      <Drawer
       anchor='left'
       open={openDrawer}
       hideBackdrop={true}
       ModalProps = {{
        keepMounted:true
       }}
       variant='persistent'
       sx={{
        '& > .MuiDrawer-paper':{
            marginTop:'64px',
            width: 250,
            background:'#F5F5F5',
            borderRight: 'none',
            height:'calc(100vh-64px)'
        }
       }}
      >
        <SideBarMenu/>
      </Drawer>
    </>
  )
}

export default SideBar;