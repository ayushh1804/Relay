import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
