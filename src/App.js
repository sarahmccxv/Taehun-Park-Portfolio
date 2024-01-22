import React, {useState} from 'react' 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Photography from './components/Photography';
import Modelling from './components/Modelling';
import Contact from './components/Contact';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  const [openPopup, setOpenPopup] = useState(null);

  const handlePopupChange = (value) => {
    setOpenPopup(value);
  };

  function handleClose(){
    setOpenPopup(null);
    console.log(openPopup);
  }


  return (
    <>
    <div className='left-container'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </div>

    <div className='right-container'>
      <Hero />
      <Photography openPage={openPopup} onPopupOpen={handlePopupChange}/>
      <Modelling />
      <Contact />
    </div>

  {openPopup === 'gallery-1' && (
    <div className='pop-up'>
        <button onClick={handleClose}>X</button>
        <div className="box">
      </div>
    </div>)
  }

  {openPopup === 'gallery-2' && (
      <div className='pop-up'>
          <button onClick={handleClose}>X</button>
      </div>)
  }

  {openPopup === 'gallery-3' && (
      <div className='pop-up'>
          <button onClick={handleClose}>X</button>
      </div>)
  }

  {openPopup === 'gallery-4' && (
      <div className='pop-up'>
          <button onClick={handleClose}>X</button>
      </div>)
  }
  </>
  );
}