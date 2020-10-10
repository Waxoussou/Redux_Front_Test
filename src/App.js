import React, { useState } from 'react';
import Nav from './Components/Nav';
import Body from './Components/Body';


import './App.css';

function App() {
  const [router, setRouter] = useState({ current_page: 'default' })

  const handleRouter = ({ target: { innerText: content } }) => {
    content === 'Accueil' ?
      setRouter({ current_page: 'default' }) :
      setRouter({ current_page: 'contact' })
  };

  return (
    <div className="App">
      <Nav handleRouter={handleRouter} />
      <Body router={router} />
    </div>
  );
}

export default App;
