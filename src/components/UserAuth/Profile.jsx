import { useState } from 'react';
import { useProfile } from '../../state/hooks/userAuth.js';
import {
  Form,
  FormButton,
  InputControl,
} from '../Forms/FormControls.jsx';
import Avatar from './Avatar.jsx';
import styles from './Profile.css';

export default function Profile() {
  const [, updateProfile] = useProfile();
  const [preview, setPreview] = useState();
  const [updating, setUpdating] = useState(false);

  const handlePreview = (e) => {
    const target = e.target;
    const [file] = target.files;
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (profile) => {
    setUpdating(true);
    await updateProfile(profile);
    setUpdating(false);
  };

  return (
    <section className={styles.Profile}>
      <Form onSubmit={handleSubmit}>
        <h1>User Profile</h1>

        <InputControl
          label="User Name"
          name="username"
          required
          placeholder="enter a user name"
        />

        <InputControl
          className={styles.Avatar}
          label="Avatar"
          name="avatar"
          type="file"
          required
          onChange={handlePreview}
        >
          <Avatar src={preview} username="avatar preview" />
        </InputControl>

        <FormButton disabled={updating}>
          {updating ? 'Updating...' : 'Update'}
        </FormButton>
      </Form>
    </section>
  );
}
