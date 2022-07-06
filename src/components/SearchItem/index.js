import React from 'react';
import "./search-item.css"

const SearchItem = () => {
  return (
    <div className="search-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="search-img" />
      <div className="search-desc">
        <h1 className="search-title">Eden Hotel Amsterdam</h1>
        <span className="search-distance">Merkez: 0,8 km</span>
        <span className="search-taxi-op">Ücretsiz havaalanı taksi</span>
        <span className="search-subtitle">
        Stüdyo Daire - Klimalı
        </span>
        <span className="search-features">
        Tüm stüdyo • 1 banyo • 21m² 1 tam yatak
        </span>
        <span className="search-cancel-op">Ücretsiz iptal </span>
        <span className="search-cancel-op-subtitle">
        Daha sonra iptal edebilirsiniz, bu yüzden bugün bu harika fiyatı kilitleyin!
        </span>
      </div>
      <div className="search-details">
        <div className="search-rating">
          <span>Harika</span>
          <button>8.9</button>
        </div>
        <div className="search-detail-texts">
          <span className="search-price">$112</span>
          <span className="search-tax-op">Vergi ve ücretler dahildir</span>
          <button className="search-check-button">Yer durumuna bak</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem