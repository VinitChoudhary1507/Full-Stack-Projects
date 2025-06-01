import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import ChatContainer from './pages/ChatContainer'
import { userAuthStore } from './store/Users'

function App() {
  const {authUser} = userAuthStore();
  console.log(authUser);
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      
        <div className="navbar-nav">
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
          <Link className="nav-link" to="/chat">Chat</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
             <Route path="/" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<ChatContainer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
