// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3zTwnAgTGhuAd9k6-XClJs8I6ZleRRxg",
  authDomain: "asifkamboh-84558.firebaseapp.com",
  databaseURL: "https://asifkamboh-84558-default-rtdb.firebaseio.com",
  projectId: "asifkamboh-84558",
  storageBucket: "asifkamboh-84558.appspot.com",
  messagingSenderId: "301391001076",
  appId: "1:301391001076:web:c512de016956958c37b5a1",
  measurementId: "G-QXB4HD1ECP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const hitCounter = document.getElementById("hit-counter");
hitCounter.style.display = "none";

const db = firebase.database().ref("totalHits");
db.on("value", (snapshot) => {
  hitCounter.textContent = snapshot.val();  
});

db.transaction(
  (totalHits) => totalHits + 1,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      hitCounter.style.display = "inline-block";
    }
  }
);
