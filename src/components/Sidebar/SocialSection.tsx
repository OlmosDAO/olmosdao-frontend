import React from 'react';
import '../../assets/Sidebar.css'
const SocialSection = ({item}:any) => {
  return(
      
      <>
        <li className='social-media'>
            <span className='social-media__icons'>{item.icon}</span>
        </li>
            
    


      </>
  );
};

export  {SocialSection};
