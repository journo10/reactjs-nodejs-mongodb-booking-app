import React, { useState } from 'react';
import "./header.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { tr } from 'date-fns/locale'

//date
const initialDate = [{
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}]

//options
const initialOptions = {
  adult: 1,
  children: 0,
  room: 1
}

const Header = ({ type }) => {
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false)

  const [openOptions, setOpenOtions] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  const handleOptions = (name, operation) => {//operation=>artır ve azalt button
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1
    }))
  }

  return (
    <header className='header'>
      <div className={type === "list" ? "header-container list-mode" : "header-container"}>
        <div className="header-list">
          <div className="header-item active">
            <i className="fa-solid fa-bed"></i>
            <span>Konaklama</span>
          </div>
          <div className="header-item">
            <i className="fa-solid fa-plane"></i>
            <span>Uçak Biletleri</span>
          </div>
          <div className="header-item">
            <i className="fa-solid fa-car"></i>
            <span>Araba Kiralama</span>
          </div>
          <div className="header-item">
            <i className="fa-solid fa-location-crosshairs"></i>
            <span>Turistik Noktalar</span>
          </div>
          <div className="header-item">
            <i className="fa-solid fa-taxi"></i>
            <span>Havaalanı Taksileri</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <div className="title">
              <h1>Sıradaki konaklamanızı bulun</h1>
              <p>Oteller, evler ve çok daha fazlasındaki fırsatları arayın...</p>
              <button className="header-btn">Giriş Yap / Kaydol</button>
            </div>
            <div className="header-search">
              <div className="search-item">
                <i className="fa-solid fa-bed"></i>
                <input type="text" className='search-input' placeholder='Nereye gidiyorsunuz?' />
              </div>
              <div className="search-item">
                <i className="fa-solid fa-calendar-days"></i>
                <span onClick={() => setOpenDate(!openDate)} className='search-text'>
                  {`${format(date[0].startDate, "dd.MM.yyyy")} /
              ${format(date[0].endDate, "dd.MM.yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    locale={tr}
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="search-item">
                <i className="fa-solid fa-user"></i>
                <span onClick={() => setOpenOtions(!openOptions)}
                  className='search-text'>{`${options.adult} yetişkin ${options.children} çocuk ${options.room} oda`}</span>
                {openOptions && (
                  <div className="options" >
                    <div className="options-item">
                      <span className='options-text'>Yetişkin</span>
                      <div className="options-counter">
                        <button
                          disabled={options.adult <= 1}
                          className='options-button'
                          onClick={() => handleOptions("adult", "d")}
                        >-</button>
                        <span className='options-num'>{options.adult}</span>
                        <button
                          className='options-button'
                          onClick={() => handleOptions("adult", "i")}
                        >+</button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className='options-text'>Çocuk</span>
                      <div className="options-counter">
                        <button
                          disabled={options.children <= 0}
                          className='options-button'
                          onClick={() => handleOptions("children", "d")}
                        >-</button>
                        <span className='options-num'>{options.children}</span>
                        <button
                          className='options-button'
                          onClick={() => handleOptions("children", "i")}
                        >+</button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className='options-text'>Oda</span>
                      <div className="options-counter">
                        <button
                          disabled={options.room <= 1}
                          className='options-button'
                          onClick={() => handleOptions("room", "d")}
                        >-</button>
                        <span className='options-num'>{options.room}</span>
                        <button
                          className='options-button'
                          onClick={() => handleOptions("room", "i")}
                        >+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className='header-btn' type='button'>Ara</button>
            </div>
          </>
        }
      </div>
    </header>
  )
}

export default Header;

