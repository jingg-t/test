// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKQ7SbuDkeqsN8d22tAC_a52kpwaKSJVA",
  authDomain: "oebcalendar-c34e0.firebaseapp.com",
  databaseURL: "https://oebcalendar-c34e0-default-rtdb.firebaseio.com",
  projectId: "oebcalendar-c34e0",
  storageBucket: "oebcalendar-c34e0.appspot.com",
  messagingSenderId: "1043573677372",
  appId: "1:1043573677372:web:4978178c657d44f6e81239",
  measurementId: "G-9LX414H8FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);


onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("user is logged in");
    } else {
        console.log("no user");
    }
});