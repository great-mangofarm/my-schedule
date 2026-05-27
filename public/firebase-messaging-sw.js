importScripts('https://www.gstatic.com/firebasejs/11.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.9.0/firebase-messaging-compat.js');

// 서비스워커는 Vite 환경변수를 사용할 수 없어 직접 지정
firebase.initializeApp({
  apiKey: 'AIzaSyCbIvhqVVax3L6jSSU_AmMyXnXeWei2Ty4',
  authDomain: 'my-schedule-6d1ca.firebaseapp.com',
  projectId: 'my-schedule-6d1ca',
  storageBucket: 'my-schedule-6d1ca.firebasestorage.app',
  messagingSenderId: '395688140026',
  appId: '1:395688140026:web:a01fc4896dc9675f1cbd43',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.data?.title ?? 'My Schedule';
  const body  = payload.data?.body  ?? '';
  self.registration.showNotification(title, {
    body,
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  });
});
