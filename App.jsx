import{BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import NotFound from './pages/NotFound' 
import Admin from './pages/Admin'
import Contact from './pages/Contact'

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import GlobalProvider from './State/globalProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <div>
         <Navbar/>

         <main className='bg-light py-4 px-5'>
          <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path= '/contact' element={<Contact/>}></Route>
           <Route path="/admin" element = {<Admin/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
         
          
          </Routes>
         </main>    

   <Footer/>
           </div>
         </BrowserRouter>
         </GlobalProvider>
     
  
  
  )
}


export default App
