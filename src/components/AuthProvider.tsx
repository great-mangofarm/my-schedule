import { useEffect } from 'react';
import { onAuthChanged, isAllowedUser } from '../lib/auth';
import { useAuthStore } from '../store/authStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthChanged((user) => {
      if (user && isAllowedUser(user)) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [setUser, setLoading]);

  return <>{children}</>;
}
