import React from "react"
import { Link } from "react-router-dom"

export default function MegamenuItem(props) {
  return (
    <React.Fragment>
      <ul className={ props.singleRow ? 'one-row' : '' }>
        <li>
          <Link className="mega-menu-title" to={props.MegaMenuItems.url}>
            {props.MegaMenuItems.title}
          </Link>
        </li>
      </ul>
      <ul className={ props.singleCol ? 'one-col' : ''}>
        {
          props.MegaMenuItems.childs.map((child) => {
            return (
              <li>
                <Link className="mega-menu-item" to={child.url}>
                  {child.title}
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
    </React.Fragment>
  )
}