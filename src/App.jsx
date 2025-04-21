import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import { MainPage, LoginPage, SignupPage, CategoryPage, CategoryDetailPage  } from './Pages';
import "./index.css";


const App = () => {
  return (
    <Router>
    <div className='container'>
    <Header />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/CategoryPage/:categoryId" element={<CategoryDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
