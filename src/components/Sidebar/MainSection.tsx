import '../../assets/Sidebar.css';
function MainSection({ item,index }:any) {
    return (
      <>
        <li className='items__main__section'>
            <div className='items__main__section__layout'>
                 <span className='items__main__section__icon'>{item.icon}</span>
                 <span className='items__main__section__text'>{item.title}</span>
            </div>
          
        </li>
      </>
    )
  }
  
  export { MainSection }