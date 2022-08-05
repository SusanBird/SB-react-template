import { Link, Route, Routes } from 'react-router-dom';
import {
  InputControl,
  FormButton,
} from '../../components/Forms/FormControls.jsx';
import styles from './Auth.css';

const signUp = {
  header: 'Create a new account',
  button: 'Sign Up',
  prompt: 'Already have an account?',
  link: '../',
};

const signIn = {
  header: 'Sign in to your account',
  button: 'Sign In',
  prompt: 'Need to create an account?',
  link: 'sign-up',
};

export default function Auth() {
  return (
    <Routes>
      <Route index element={<AuthForm {...signIn} />} />
      <Route path="sign-up" element={<AuthForm {...signUp} />} />
    </Routes>
  );
}

function AuthForm({ header, button, prompt, link }) {
  return (
    <section className={styles.Auth}>
      <form>
        <h1>{header}</h1>

        <InputControl
          label="Email"
          name="email"
          type="email"
          required
          placeholder="email"
        />
        <InputControl
          label="Password"
          name="password"
          type="password"
          required
          placeholder="password"
        />

        <FormButton>{button}</FormButton>

        <Link to={link}>{prompt}</Link>
      </form>
    </section>
  );
}
