import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { LoginAndRegisterPage } from './pages/LoginAndRegisterPage'
import { MyProfilePage } from './pages/MyProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginAndRegisterPage/>}/>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/profile/my' element={<MyProfilePage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
