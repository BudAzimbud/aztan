import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import LogoBig from "../assets/images/aztan-logo.png";
import LogoSmall from '../assets/images/aztan-logo-small.png'


const Sidebar = ({menus}) => {
    const [active, setActive] = useState(0)

    const [smallSidebar,setSmallSidebar] = useState(false)

    const handleSidebarSize = () => {
        setSmallSidebar(!smallSidebar)
    }
  return (
    <div className={`${smallSidebar? 'sidebar-small' : 'sidebar'}`}>
        <div className='logo-sidebar'>
          <img src={smallSidebar? LogoSmall : LogoBig} alt='Aztan' width='60%' />
        </div>
        <div className='btn-sidebar'>
            <button onClick={handleSidebarSize}>{smallSidebar?  <AiOutlineRight className='icon-btn'/> : <AiOutlineLeft className='icon-btn'/> }</button>
          </div>
        <ul>
          {menus.map((item, index) => (
            <Link to={item.link} className="menus">
              <li
                key={index}
                className={`${active === index && "active"}`}
                onClick={() => setActive(index)}
              >
                <div className="icon">{item.icon}</div>
                <div className="name">{item.name}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
  )
}

export default Sidebar
