
import {Typography, Box,styled,Divider} from '@mui/material';

const Component = styled(Box)`
  display:flex;
  align-items:center;
  flex-direction:column;
  margin: 50px 0 0 0;
  opacity: 0.8;
  width: 100%;
`
const StyledDivider = styled(Divider)`
  width: 95%;
  margin: 10px 0 0 0 ;
`

const NoMails = ({message}) => {
  return (
    <Component>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <StyledDivider/>
    </Component>
  )
}

export default NoMails;