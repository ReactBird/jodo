// import React from 'react';
import './App.scss';
import HeaderNav from './layout/HeaderNav';
import Middle from './layout/Middle';
import Modal from './components/Modal';
import React, { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <HeaderNav />
      <Middle />
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
