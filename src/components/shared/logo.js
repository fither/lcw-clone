import LogoImage from '../../static/images/logo.png';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={LogoImage} alt="Logo"></img>
      </Link>
    </div>
  )
}