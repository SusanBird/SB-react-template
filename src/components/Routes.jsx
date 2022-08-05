import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import UserAuth from './UserAuth/UserAuth.jsx';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import About from './About/About.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';
import Bunnies from './FuzzyBunny/Bunnies.jsx';

export default function Routes() {
  return (
    <RRoutes>
      <Route path="auth/*" element={<UserAuth />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="about" element={<About />} />
        <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
          <Route index element={<Families />} />
          <Route path="bunnies" element={<Bunnies />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
