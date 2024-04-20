import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './unAuth/login';
import { Dashboard } from './auth/dashboard';
import { ApexChart } from './apexChart';
import { Chart, ChartShow } from './auth/chart';
import { ChartDetails } from './auth/chartDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chart' element={<ChartShow />} />
        <Route path='/chartDetails' element={<ChartDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
