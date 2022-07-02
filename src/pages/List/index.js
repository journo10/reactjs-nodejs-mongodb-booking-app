import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import { tr } from 'date-fns/locale'
import "./list.css";
import SearchItem from "../../components/SearchItem"

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false)


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-title">Ara</h1>
            <div className="list-item">
              <label>Seyahat noktası/tesis adı:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="list-item">
              <label>Check-in tarihi</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd.MM.yyyy"
              )} / ${format(date[0].endDate, "dd.MM.yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  locale={tr}
                  className="date"
                />
              )}
            </div>
            <div className="list-item">
              <label>Seçenekler</label>
              <div className="options">
                <div className="options-item">
                  <span className="option-text">
                    Minimum fiyat
                  </span>
                  <input type="number" className="option-input" />
                </div>
                <div className="options-item">
                  <span className="option-text">
                    Maksimum fiyat
                  </span>
                  <input type="number" className="option-input" />
                </div>
                <div className="options-item">
                  <span className="option-text">Yetişkin</span>
                  <input
                    type="number"
                    min={1}
                    className="option-input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="options-item">
                  <span className="option-text">Çocuk</span>
                  <input
                    type="number"
                    min={0}
                    className="option-input"
                    placeholder={options.children}
                  />
                </div>
                <div className="options-item">
                  <span className="option-text">Oda</span>
                  <input
                    type="number"
                    min={1}
                    className="option-input"
                    placeholder={options.room}
                  />
                </div>
                <button>Ara</button>
              </div>
            </div>
          </div>
          <div className="list-result">
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List