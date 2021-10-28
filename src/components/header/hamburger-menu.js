import { useState } from 'react';

export default function HamburgerMenu(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="hamburger__menu">
      <button 
        className="btn"
        onClick={() => setShow(true)}  
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className={'hamburger__menu-wrapper ' + (show ? 'show' : '')}>
        <div className="row p-3">
          <div className="col col-3">
            <button className="btn p-0" onClick={() => setShow(false)}>
              <i className="fas fa-arrow-left m-2"></i>
              <span>LC WAIKIKI</span>
            </button>
          </div>
        </div>
        <div className="row g-0">
          <div className="title-item col d-flex flex-wrap">
            <div className="d-flex w-auto">
              <button className="btn p-0">
                <i className="fas fa-user"></i>
                <span>Üye Ol</span>
              </button>
            </div>
            <hr className="vertical-hr"/>
            <div className="d-flex w-auto">
              <button className="btn p-0">
                <span>Giriş Yap</span>
              </button>
            </div>
          </div>
          <div className="title-item col d-flex flex-wrap">
            <button className="btn p-0">
              <i className="fas fa-shipping-fast"></i>
              <span>Sipariş Takibi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}