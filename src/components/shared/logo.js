import LogoImage from '../../static/images/logo.png';

export default function Logo(props) {
  return (
    <div className="header__logo">
      <img src={LogoImage} alt="Logo"></img>
    </div>
  )
}