import React, { useState } from 'react';
import { Style } from 'util';
import './App.css';

import AddModal from './components/AddModal';
import Navbar from './components/Navbar';

function App() {
  
  const [modalStyle, setModalStyle]= useState<React.CSSProperties>({visibility: "hidden"});
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const updateVisibility = () => {
    const isVisible = !modalIsVisible;
    setModalIsVisible(isVisible);
    isVisible ? setModalStyle({visibility: "visible"}) : setModalStyle({visibility: "hidden"})
  }

  return (
    <div className="App">
      <AddModal style={modalStyle} setVisibility={updateVisibility}/>
      <Navbar />
      <button className="addButton" onClick={updateVisibility}>+</button>
    </div>
  );
}

export default App;
