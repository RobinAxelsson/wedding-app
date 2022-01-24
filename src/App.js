import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestForm from './components/GuestForm';
import { useState, useEffect } from 'react';
import Devbar from './components/Devbar';
import LangBar from './components/LangBar';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
function App() {
  document.title = 'Wedding app';
  const [language, setLanguage] = useState('eng');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
          <Navbar language={language} toggle={toggle} />
          <Dropdown language={language} isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route
            path="/"
            element={
              <div>

                <GuestForm language={language} toggle={toggle} />
                <LangBar language={language} setLanguage={setLanguage}/>
                {process.env.REACT_APP_ENVIRONMENT === 'Development' && (<Devbar />)}
              </div>
            }
          />
          <Route path="/test" element={<h1>Hello Test</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
