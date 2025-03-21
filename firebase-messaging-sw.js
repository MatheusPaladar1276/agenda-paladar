importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCOSrYgOXPCbcT3_HQyLwOKDR1TLyOqchs",
  authDomain: "tarefas-51bbd.firebaseapp.com",
  projectId: "tarefas-51bbd",
  storageBucket: "tarefas-51bbd.firebasestorage.app",
  messagingSenderId: "284512397382",
  appId: "1:284512397382:web:0856f3ed1dff66e398c247"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em background ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
