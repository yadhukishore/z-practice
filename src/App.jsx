import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/dropdown/graphQL/Home';
import CountryStateDropdown from './components/dropdown/swr/CountryStateDropDown';
import Users from './components/dropdown/swr/BasicSWR';
import Providers from './components/dropdown/swr/project/Providers';
import Userzz from './components/dropdown/swr/project/components/Users';
import UserDetail from './components/dropdown/swr/project/components/UserDetail';
import ProtectedRoute from './components/dropdown/swr/project/components/ProtectedRoute';
import Login from './components/dropdown/swr/project/components/Login/Login';
function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/swr-dropdown" element={<CountryStateDropdown />} />
          <Route path="/users" element={<Users />} />
          <Route path='/userzz' element={
            <ProtectedRoute>
              <Userzz />
            </ProtectedRoute>
          } />
          <Route path='/userzz/:id' element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;