import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './Routes.jsx';
import UserProvider from '../state/context/UserContext.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';

export default function App() {
  return (
    <Router>
      <Toaster />
      <UserProvider>
        <FuzzyBunnyProvider>
          <Routes />
        </FuzzyBunnyProvider>
      </UserProvider>
    </Router>
  );
}
