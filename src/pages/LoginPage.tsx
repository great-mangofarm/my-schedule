import { signInWithGoogle } from '../lib/auth';

export default function LoginPage({ denied }: { denied?: boolean }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-soft-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-10 shadow-md text-center">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50">
            <svg className="h-7 w-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-foreground-100">My Schedule</h1>
          <p className="mt-1 text-sm text-text-100">나만의 개인 캘린더</p>
        </div>

        {denied && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            접근 권한이 없는 계정입니다.
          </div>
        )}

        <button
          onClick={signInWithGoogle}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="h-5 w-5" alt="Google" />
          Google로 로그인
        </button>
      </div>
    </div>
  );
}
