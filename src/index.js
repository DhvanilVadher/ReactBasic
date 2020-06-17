import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import bkgrd from './jd222.jpg';
ReactDOM.render(
  <div style = {{height:1000}}>
    <Header className = "hei"/>
    <div style={{
      //backgroundImage: `url(${bkgrd})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className = "hei8">
    <Main2 />
    </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);
