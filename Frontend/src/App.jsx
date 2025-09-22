import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landingpage from './pages/Landingpage.jsx';
import MainApp from './pages/MainApp.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landingpage/> } />
        <Route path='/MainApp' element={ <MainApp/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
