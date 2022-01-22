import React from 'react';
import '../../assets/Sidebar.css';
import {mainData,infoData,socialData} from './SidebarData';
import {MainSection} from './MainSection'
import {SocialSection} from './SocialSection'
function Sidebar() {


console.log(mainData)


  return(
  
     <aside className="aside-container">
          <div className='aside-container__layout'>
             <div className='aside-container__logo'>
                 NextDao
             </div>

             <div className='aside-container__main'>
                <ul className='aside-container__main__sections'>
                {mainData.map((item, index) => <MainSection key={index} item={item} />)}
                </ul>
             </div>

             <div className='aside-container__info'>
                <ul className='aside-container__main__sections'>
                 {infoData.map((item, index) => <MainSection key={index} item={item} />)}
                </ul>
             </div>
             
             <div className='aside-container__social'>
             <ul className='aside-container__social__section'>
                 {socialData.map((item, index) => <SocialSection key={index} item={item} />)}
                </ul>
             </div>

          </div>
    </aside>

  );
}

export default Sidebar;
