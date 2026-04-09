import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { LoginAndRegisterPage } from './pages/LoginAndRegisterPage'
import { MyProfilePage } from './pages/MyProfilePage'
import { OtherProfilePage} from './pages/OtherProfilePage'
import { AllProfilesPage} from './pages/AllProfilesPage'
import { EditMyProfilePage} from './pages/EditMyProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginAndRegisterPage/>}/>
        <Route path='/' element={<Navigate to={'/login'}/>}/>

        <Route path='/profile' element={<Navigate to={'/login'}/>}/>
        <Route path='/profile/my' element={<MyProfilePage/>}/>
        <Route path='/profile/my/edit' element={<EditMyProfilePage/>}/>
        <Route path='/profile/other/:id' element={<OtherProfilePage/>}/>
        <Route path='/profile/other' element={<Navigate to={'/profile/all'}/>}/>
        <Route path='/profile/all' element={<AllProfilesPage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
