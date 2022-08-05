import { useContext } from 'react';
import {
  signIn as signInService,
  signUp as signUpService,
} from '../services/user-service.js';
import { showError } from '../services/toaster.js';
import {
  UserStateContext,
  UserActionContext,
} from '../context/UserContext.jsx';

export function useStatus() {
  const { user, profile } = useContext(UserStateContext);

  return { user, profile };
}

export function useAuth() {
  const { setUser } = useContext(UserActionContext);

  const createAction = (service) => async (credentials) => {
    const { user, error } = await service(credentials);

    if (error) {
      showError(error.message);
    }
    if (user) {
      setUser(user);
    }
  };

  const signIn = createAction(signInService);
  const signUp = createAction(signUpService);

  return {
    signIn,
    signUp,
  };
}
