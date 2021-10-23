import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderAccount(props) {
  const [showDropdown, setShowDropdown] = useState('');

  return (
    <ul className="header__account">
      {
        !props.isLogged ?
          <li 
            onMouseOver={() => setShowDropdown('show')}
            onMouseLeave={() => setShowDropdown('')}
          >
            <Link className="btn" to="/users/login">
              <i className="far fa-user"></i>
              <span>Giriş Yap</span>
            </Link>
            <div 
              onMouseOver={() => setShowDropdown('show')}
              onMouseLeave={() => setShowDropdown('')}
              className={`dropdown-login ` +  showDropdown}
            >
              <div className="row dropdown-text g-0 pb-2 pt-2">
                <span>
                  İndirimlerden ilk sen haberdar ol
                  Yeni koleksiyonları önce sen <br/>
                  keşfet. <br/>
                  Kapıda nakit öde
                </span>
              </div>
              <div className="row g-0 px-3 pb-2">
                <Link className="btn btn-secondary" to="/users/register">Üye Ol</Link>
              </div>
              <div className="row g-0 px-3 pb-2">
                <Link className="btn btn-primary" to="/users/login">Giriş Yap</Link>
              </div>
            </div>
          </li> :
          <li>
            <Link className="btn" to="/users/logout">
              <i className="far fa-user"></i>
              <span>Çıkış Yap</span>
            </Link>
          </li>
      }
      
      <li>
        <button className="btn">
          <i className="far fa-heart"></i>
          <span>Favorilerim</span>
        </button>
      </li>
      <li>
        <button className="btn">
          <i className="fas fa-shopping-basket"></i>
          <span>Sepetim</span>
        </button>
      </li>
    </ul>
  )
}