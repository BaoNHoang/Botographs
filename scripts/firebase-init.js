// scripts/firebase-init.js
const firebaseConfig = {
  apiKey: "${{ secrets.MAIN }}",
  authDomain: "photography-website-8654f.firebaseapp.com",
  projectId: "photography-website-8654f",
  storageBucket: "photography-website-8654f.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
