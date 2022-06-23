import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import renderAdminRoutes from './modules/admin/Admin';

import './App.css';

const Home = () => (
  <>
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <nav>
      <Link to="/admin">Admin</Link>
    </nav>
  </>
);

const About = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, dont you think?</p>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
);

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      {renderAdminRoutes()}
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);

export default App;
