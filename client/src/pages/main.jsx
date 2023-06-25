import {Suspense, useState} from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';
import { Box } from '@mui/material';

export const Main = () => {

  const[openDrawer,setDrawer] = useState(true);
  const toggleDrawer = () => {
    setDrawer(prevState => !prevState);
  }

  return (
    <>
      <Header toggleDrawer = {toggleDrawer}/>
      <Box>
        <SideBar openDrawer={openDrawer}/>
        <Suspense fallback={<SuspenseLoader/>}>
          <Outlet context={{openDrawer}} />
        </Suspense>
      </Box>
    </>
    
  )
}

export default Main;