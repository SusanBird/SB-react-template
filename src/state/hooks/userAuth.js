import { useContext } from 'react';
import {
  UserStateContext,
//   UserActionContext,
} from '../context/UserContext.jsx';

export function useAuthStatus() {
  const { user, profile } = useContext(UserStateContext);

  return {
    hasUser: !!user,
    hasProfile: !!profile,
  };
}
