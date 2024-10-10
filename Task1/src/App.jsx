import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import UpdateForm from './pages/UpdateForm/UpdateForm'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/registration' element={<Registration />} />

      <Route path="/edit/:id" element={<UpdateForm />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
