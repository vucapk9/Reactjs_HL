import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NvvNavBar from './components/NvvNavBar'
import NvvHome from'./pages/NvvHome'
import NvvAbout from './pages/NvvAbout'
import NvvContact from'./pages/NvvContact'
import NvvProduct from'./pages/NvvProduct'
import NvvProductDetail from'./pages/NvvProductDetail'
import NvvNotFound from'./pages/NvvNotFound';

export default function NvvApp() {
  return (
    <div className='container border'>
        <h1>React Route- Demo [Nguyễn Văn Vũ]</h1>
        <hr/>
        <BrowserRouter>
             <NvvNavBar/>
             <Routes>
                   <Route path='/' element={<NvvHome/>} />
                   <Route path='/about' element ={<NvvAbout/>} />
                   <Route path='/contact' element ={<NvvContact/>} />
                   {/*nested route */}
                   <Route path='/products' element={<NvvProduct/>}>
                   <Route path=":id" element ={<NvvProductDetail/>}/>
                   </Route>
                   {/*404 page */}
                  <Route path="*" element={<NvvNotFound />} />

             </Routes>
        </BrowserRouter>
    </div>
  )
}