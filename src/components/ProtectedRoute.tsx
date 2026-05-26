import { useAuthStore } from '../store/authStore';
import LoginPage from '../pages/LoginPage';
import { auth } from '../lib/firebase';
import { isAllowedUser } from '../lib/auth';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
      </div>
    );
  }

  const currentUser = auth.currentUser;
  const denied = !!currentUser && !isAllowedUser(currentUser);

  if (!user) return <LoginPage denied={denied} />;

  return <>{children}</>;
}
