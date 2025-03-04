import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/dropdown/graphQL/Home';
import CountryStateDropdown from './components/dropdown/swr/CountryStateDropDown';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swr-dropdown" element={<CountryStateDropdown />} />
      </Routes>
    </Router>
  );
}

export default App;
