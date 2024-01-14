import * as React from 'react';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddMusicPage from './pages/AddMusicPage';

function App() {
  //Modal toggle
  const [modalToggle, setModalToggle] = useState(''); //Toggle content
  const [modalIsOpen, setModalIsOpen] = useState(false); //Open Modal

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
              />
            }
          />
          <Route
            path='/dashboard'
            element={
              <Dashboard
                setModalToggle={setModalToggle}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
              />
            }
          />
          <Route path='/add-music' element={<AddMusicPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
