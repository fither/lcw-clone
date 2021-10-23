import { useState } from 'react';
import { Link } from "react-router-dom";
import MegaMenuItems from '../../data/categories/kadin';
import TopBarItems from '../../data/topbaritems';

export default function TopbarItems(props) {
  const [show, setShow] = useState('')
  
  return (
    <div 
      className="topbar" 
      onMouseLeave={() => setShow('')}
    >
      <ul className="topbar-items">
        {
          TopBarItems.map((item) => {
            return (
              <li>
                <div className="topbar-item">
                  <Link to="/" onMouseOver={() => setShow('show')}>
                    {item}
                  </Link>
                </div>
              </li>
            )
          })
        }
        <li>
          <Link className="topbar-item-link" to="/">
            <div>
              <i className="fas fa-shipping-fast"></i>
            </div>
            <span>
              Sipariş Takibi
            </span>
          </Link>
        </li>
      </ul>
      <div className={`mega-menu ` + show}>
        <div className="row w-full">
          <div className="col col-4">
            <ul style={{listStyle: 'none'}}>
              <li>
                <Link className="mega-menu-title" to={MegaMenuItems.url}>
                  {MegaMenuItems.title}
                </Link>
              </li>
            </ul>
            <ul style={{listStyle: 'none'}}>
              {
                MegaMenuItems.childs.map((child) => {
                  return (
                    <li>
                      <Link className="mega-menu-item" to={child.url}>
                        {child.name}
                      </Link>
                    </li>
                  )
                })
              }
              <Link to="/">
                <span style={{marginRight: '.5rem'}}>
                  Tümünü Göster
                </span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </ul>
          </div>
          <div className="col col-4">
          </div>
          <div className="col col-4">

          </div>
        </div>
      </div>
    </div>
  )
}