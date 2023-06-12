import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './routes/allRoutes';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <AllRoutes/>
    </div>
  );
}

export default App;
