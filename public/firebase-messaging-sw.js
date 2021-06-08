// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    messagingSenderId:'117839553618',
    apiKey: "AIzaSyBpKhhd14IycGUfkau8HtxgH31KgriyvFM",
    authDomain: "trouve-e9737.firebaseapp.com",
    projectId: "trouve-e9737",
    storageBucket: "trouve-e9737.appspot.com",
    messagingSenderId: "117839553618",
    appId: "1:117839553618:web:19a0efe50ee8ac63bceb8b",
    measurementId: "G-F9Y6H69K7Y"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});