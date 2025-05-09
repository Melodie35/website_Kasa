import '@/App.css'

import { Outlet } from 'react-router-dom'
import Header from '@layout/Header.jsx'
import Footer from '@layout/Footer.jsx'

function App() {  
  return (
    <>
      <div>Containeur principal</div>
        <Header/>
        <Outlet/>
        <Footer/>      
    </>
  )
}

export default App
