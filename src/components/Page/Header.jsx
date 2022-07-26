import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      Header
      <nav>
        <Link to="/">Home</Link> * <Link to="list">List</Link> *{' '}
        <Link to="about">About</Link>
      </nav>
    </header>
  );
}