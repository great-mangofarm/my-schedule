import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { doc, setDoc } from 'firebase/firestore';
import { app, db } from './firebase';

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY as string;

export async function initMessaging(): Promise<void> {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) return;
  if (!VAPID_KEY) {
    console.warn('[FCM] VITE_FIREBASE_VAPID_KEY가 설정되지 않았습니다.');
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return;

  try {
    // 서비스워커 등록 (이미 등록됐으면 기존 것 반환)
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/' });
    const messaging = getMessaging(app);

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      // Firestore에 토큰 저장 (토큰 자체를 doc id로 사용)
      await setDoc(doc(db, 'fcmTokens', token), {
        token,
        updatedAt: Date.now(),
      });
    }

    // 앱이 열려 있을 때 도착한 메시지 처리
    onMessage(messaging, (payload) => {
      const { title, body } = payload.notification ?? {};
      if (title && Notification.permission === 'granted') {
        new Notification(title, {
          body: body ?? '',
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
        });
      }
    });
  } catch (err) {
    console.error('[FCM] 초기화 실패:', err);
  }
}
