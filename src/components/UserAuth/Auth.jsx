import { Link, Route, Routes } from 'react-router-dom';
import {
  Form,
  InputControl,
  FormButton,
} from '../../components/Forms/FormControls.jsx';
import { useAuth } from '../../state/hooks/userAuth.js';
import styles from './Auth.css';

export default function Auth() {
  const { signIn, signUp } = useAuth();

  const signUpInfo = {
    header: 'Create a new account',
    button: 'Sign Up',
    prompt: 'Already have an account?',
    link: '../',
    onSubmit: signUp,
  };

  const signInInfo = {
    header: 'Sign in to your account',
    button: 'Sign In',
    prompt: 'Need to create an account?',
    link: 'sign-up',
    onSubmit: signIn,
  };

  return (
    <Routes>
      <Route index element={<AuthForm {...signInInfo} />} />
      <Route path="sign-up" element={<AuthForm {...signUpInfo} />} />
    </Routes>
  );
}

function AuthForm({ header, button, prompt, link, onSubmit }) {
  return (
    <section className={styles.Auth}>
      <Form onSubmit={onSubmit}>
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
      </Form>
    </section>
  );
}
