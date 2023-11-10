import React from 'react';


/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 
import './assets/css/App.css';
import './assets/css/App.scss';
import './assets/css/Responsivo-tablet.css';
import './assets/css/Responsivo-cel.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Comofunciona from './Components/Comofunciona';
import Apoiadores from './Components/Apoiadores';
import Ondeachar from './Components/Ondeachar';
import Estatistica from './Components/Estatistica';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Login from './Components/Login';



function App() {

  return (
    <>
      <Header/> 
      <Intro/>
      <Comofunciona/>
      <Apoiadores/>
      <Ondeachar/>
      <Estatistica/>
      <Login/>
      <Contato/>
      <Footer/>
    </>

  )
}

export default App;
