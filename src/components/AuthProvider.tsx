import { useEffect } from 'react';
import { onAuthChanged, isAllowedUser } from '../lib/auth';
import { useAuthStore } from '../store/authStore';
import { initMessaging } from '../lib/messaging';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthChanged((user) => {
      if (user && isAllowedUser(user)) {
        setUser(user);
        initMessaging(); // 로그인 성공 시 알림 권한 요청 + FCM 토큰 저장
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [setUser, setLoading]);

  return <>{children}</>;
}
