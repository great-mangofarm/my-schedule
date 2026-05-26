import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { auth, googleProvider } from './firebase';

const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL;

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const signOutUser = () => signOut(auth);

export const isAllowedUser = (user: User) => user.email === ALLOWED_EMAIL;

export const onAuthChanged = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);
