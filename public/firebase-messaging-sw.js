importScripts('https://www.gstatic.com/firebasejs/11.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: self.FIREBASE_CONFIG?.apiKey,
  authDomain: self.FIREBASE_CONFIG?.authDomain,
  projectId: self.FIREBASE_CONFIG?.projectId,
  storageBucket: self.FIREBASE_CONFIG?.storageBucket,
  messagingSenderId: self.FIREBASE_CONFIG?.messagingSenderId,
  appId: self.FIREBASE_CONFIG?.appId,
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification ?? {};
  self.registration.showNotification(title ?? 'My Schedule', {
    body: body ?? '',
    icon: icon ?? '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  });
});
