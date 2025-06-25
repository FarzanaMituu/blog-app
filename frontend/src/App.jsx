import React from 'react'
import "./App.CSS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SingleBlog from './pages/SingleBlog';
import SignUp from './pages/SignUp';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blog/:blogId' element={<SingleBlog />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App