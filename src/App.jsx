import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Landing from './components/pages/Landing'
import Login from './components/pages/Login'
import Home from './components/pages/Home'

function App() {
  const token = localStorage.getItem('auth_token')
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Landing/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App