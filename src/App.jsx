// Importaciones de React y React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Homepage from './components/homepage';

import About from './components/About';      // Asegúrate de crear este componente
import Mission from './components/Mission';  // Asegúrate de crear este componente
import Programs from './components/Programs';  // Asegúrate de crear este componente
import Contact from './components/Contact';   // Asegúrate de crear este componente
import Activities from './components/Activities';
import News from './components/News';


function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/programs" element={<Programs />} />
          <Route path='/activities' element={<Activities/>}/>
          <Route path='/news' element={<News/>}/>          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
