import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Landing from './components/pages/Landing'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'

function App() {
  const token = localStorage.getItem('auth_token')
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="*" element={<Landing/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App