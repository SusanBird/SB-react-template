import { useContext } from 'react';
import {
  signIn as signInService,
  signUp as signUpService,
  signOut as signOutService,
  uploadAvatar,
  upsertProfile,
} from '../services/user-service.js';
import { showError, showSuccess } from '../services/toaster.js';
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
  const signOut = createAction(signOutService);

  return {
    signIn,
    signUp,
    signOut,
  };
}

export function useProfile() {
  const { user, profile } = useContext(UserStateContext);
  const { setProfile } = useContext(UserActionContext);

  const updateProfile = async ({ avatar, ...profile }) => {
    const { url, error } = await uploadAvatar(user.id, avatar);
    if (error) {
      showError(error.message);
    }
    if (url) {
      const { data, error } = await upsertProfile({
        ...profile,
        avatar: url,
      });

      if (error) {
        showError(error.message);
      }
      if (data) {
        setProfile(data);
        showSuccess(`Profile updated for "${data.username}"`);
      }
    }
  };

  return [profile, updateProfile];
}
