import { useState } from 'react';
import { Link } from "react-router-dom";
import MegaMenuItems from '../../data/categories/kadin';
import TopbarItemsList from '../../data/TopbarItemsList';
import MegamenuItem from './megamenuItem';

export default function TopbarItems(props) {
  const [show, setShow] = useState('')
  
  return (
    <div 
      className="topbar" 
      onMouseLeave={() => setShow('')}
    >
      <ul className="topbar-items">
        {
          TopbarItemsList.map((item) => {
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
          <Link className="topbar-item-link mx-2" to="/">
            <div>
              <i className="fas fa-truck-loading"></i>
            </div>
            <span>
              Hızlı Teslimat
            </span>
          </Link>
          <hr />
          <Link className="topbar-item-link mx-2" to="/">
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
        <div className="row w-full px-5">
          <div className="col col-4">
            <MegamenuItem MegaMenuItems={MegaMenuItems[0]} singleCol={false} />
          </div>
          <div className="col col-2">
            <MegamenuItem MegaMenuItems={MegaMenuItems[1]} singleCol={true} />
          </div>
          <div className="col col-2">
            <MegamenuItem MegaMenuItems={MegaMenuItems[2]} singleCol={true} />
          </div>
          <div className="col col-2">
            <MegamenuItem MegaMenuItems={MegaMenuItems[3]} singleCol={true} />
          </div>
          <div className="col col-2">
            <MegamenuItem MegaMenuItems={MegaMenuItems[4]} singleCol={true} />
          </div>
        </div>
      </div>
    </div>
  )
}