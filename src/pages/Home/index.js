import React from 'react';
import "./home.css";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Featured from '../../components/Featured';
import PropertyList from '../../components/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties';
import MailList from '../../components/MailList';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className='home-title'>Tesis tipine göre göz atın</h1>
        <PropertyList />
        <h1 className='home-title'>Konukların beğendiği evler</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home