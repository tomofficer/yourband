import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import SignUpModal from './components/SignUpModal';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<SignUpModal isSignUp />} />
          <Route path='/login' element={<SignUpModal />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
