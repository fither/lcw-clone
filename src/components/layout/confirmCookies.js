import { useState } from 'react';

export default function ConfirmCookies(props) {
  const [show, setShow] = useState(true);

  const closeConfirm = () => {
    setShow(false);
  }

  return (
    <div className={'confirm-cookies' + (show ? ' show' : '')}>
      <div className="head">
        <i 
          className="fas fa-times"
          onClick={closeConfirm}
        ></i>
      </div>     
      <div className="content">
        Alışveriş deneyiminizi iyileştirmek ve hizmetlerimizi daha iyi hale getirmek için yasal düzenlemelere uygun çerezler (cookies) kullanıyoruz. Web sitemizi ziyaret etmeye ve alışveriş yapmaya devam etmeniz durumunda, çerez kullanmaya devam edeceğiz. Çerez tercihlerinizi düzenlemek veya çerez politikamız hakkında detaylı bilgi almak için <a href="/">buraya tıklayınız</a>;
      </div>
      <div className="actions">
        <button 
          className="btn btn-primary"
          onClick={closeConfirm}  
        >Anladım</button>
      </div>
    </div>
  )
}