import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search(props) {
  const [showResults, setShowResults] = useState('');

  return (
    <div 
      className={`search--bar ` + showResults}
      onFocus={() => setShowResults('show')}
      onBlur={() => setShowResults('')}
    >
      <i 
        className="fas fa-search search--bar__search-icon"
        style={{cursor: 'auto'}}
      ></i>
      <input 
        type="text"
        className="search--bar__search-input"
        placeholder="Ürün, kategori veya marka ara"
      ></input>
      <i className="fas fa-times search--bar__clear-icon"></i>
      <button className="btn search--bar__search-button">
        Ara
      </button>
      <div className="search--bar__menu">
        <div className="search--bar__search-results">
          <div className="result-item">
            Bebek <span className="result-item__highlight">Arabası</span>
          </div>
          <div className="result-item">
            Alışveriş <span className="result-item__highlight"> Arabası</span>
          </div>
        </div>
        <div className="frequently-searched my-3">
          <div className="frequently-searched__title mb-2">
            Sık Arananlar
          </div>
          <div className="frequently-searched__items">
            <Link to="/" className="frequently-searched__item">Mont</Link>
            <Link to="/" className="frequently-searched__item">Pantalon</Link>
            <Link to="/" className="frequently-searched__item">Sweatshirt</Link>
            <Link to="/" className="frequently-searched__item">Hırka</Link>
            <Link to="/" className="frequently-searched__item">Tişört</Link>
          </div>
        </div>
      </div>
    </div>
  )
}