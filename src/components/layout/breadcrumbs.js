import { Link } from "react-router-dom"

export default function Breadcrumbs(props) {
  return (
    <ul className="breadcrumbs">
      {
        props.breadcrumbs.map((breadcrumb, index) => {
          return (
            <li className="breadcrumb">
              <Link to={breadcrumb.url}>
                <span 
                  className={'m-2' + (index+1 === props.breadcrumbs.length ? ' last' : '')}>
                  {breadcrumb.title}
                </span>
              </Link>
              {(
                index+1 !== props.breadcrumbs.length ?
                <i className="fas fa-arrow-right"></i>: 
                ''
              )}
            </li>
          )
        })
      }
    </ul>
  )
}