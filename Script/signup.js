// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxnzoCa7-hCR-koRV5jqGHPLypcVGAcVw",
  authDomain: "todo-app-70cfa.firebaseapp.com",
  projectId: "todo-app-70cfa",
  storageBucket: "todo-app-70cfa.appspot.com",
  messagingSenderId: "57196472062",
  appId: "1:57196472062:web:f4d0a8ed3ef682365767af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// console.log(app);

let onSubmit = document.getElementById("onSubmit");

onSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password, name)
    .then((Credential) => {
      console.log(Credential);
      window.location.href = "todo.html";
    })

    .catch((error) => {
      document.getElementById(
        "error"
      ).innerHTML = `please provide a valid email and password`;
    });
});
