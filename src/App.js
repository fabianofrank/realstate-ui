import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import Navbar from './components/Navbar';
import PropertyHome from './components/PropertyHome';
import PropertyCreate from './components/PropertyCreate';
import PropertyDetails from './components/PropertyDetails';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PropertyHome />} />
          <Route path="/create" element={<PropertyCreate />} />
          <Route path="/details/:id" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
