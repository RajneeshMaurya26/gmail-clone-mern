
import {DeleteOutline, InsertDriveFileOutlined, MailOutline, Photo,SendOutlined,StarOutline, } from '@mui/icons-material';

export const SideBarData = [
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarOutline
    },
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        name:'draft',
        title:'Draft',
        icon:InsertDriveFileOutlined
    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutline
    },
    {
        name:'allmail',
        title:'All Mail',
        icon:MailOutline
    }
    
]