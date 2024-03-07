import './App.css';
import Weather from './Components/Weather';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
