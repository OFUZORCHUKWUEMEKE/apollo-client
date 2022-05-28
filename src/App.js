import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import 'semantic-ui-css/semantic'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from 'semantic-ui-react'
import ButtonAppBar from './components/Menu';
function App() {
  return (
    <Router>
        <ButtonAppBar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;
