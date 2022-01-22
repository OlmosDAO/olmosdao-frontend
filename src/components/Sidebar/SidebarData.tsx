import {MdOutlineDashboard} from 'react-icons/md'; 
import {GiJamesBondAperture,GiStakeHammer,GiPresent,GiWrappingStar} from 'react-icons/gi'; 
import {AiFillGithub} from 'react-icons/ai'; 
import {FaTelegramPlane} from 'react-icons/fa'; 
import {ImTwitter} from 'react-icons/im'; 

export const mainData = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <MdOutlineDashboard/>,
    
    },
    {
      title: 'Bond',
      path: '/bond',
      icon: <GiJamesBondAperture />,
    
    },
    {
      title: 'Stake',
      path: '/stake',
      icon: <GiStakeHammer />,
    
    },
    {
      title: 'Give',
      path: '/give',
      icon: <GiPresent  />,
    
    },
    {
      title: 'Wrap',
      path: '/wrap',
      icon: <GiWrappingStar  />,
    
    }
  
  ];
export const infoData = [
    {
      title: 'Forum',
      path: '/',
      icon: <MdOutlineDashboard/>,
    
    },
    {
      title: 'Governance',
      path: '/bond',
      icon: <GiJamesBondAperture />,
    
    },
    {
      title: 'Docs',
      path: '/stake',
      icon: <GiStakeHammer />,
    
    },
    {
      title: 'Bug Bounty',
      path: '/give',
      icon: <GiPresent size={'1.5em'} />,
    
    }
  
  ];
export const socialData = [
    {
      title: 'Facebook',
      path: '/',
      icon: <AiFillGithub size={'1.5em'}/>,
    
    },
    {
      title: 'Telegram',
      path: '/bond',
      icon: <FaTelegramPlane size={'1.5em'} />,
    
    },
    {
      title: 'Twitter',
      path: '/stake',
      icon: <ImTwitter size={'1.5em'} />,
    
    }
  
  ];
