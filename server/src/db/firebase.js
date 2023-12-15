const firebase = require("firebase/app");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyBt9O2sJ1kNdd-kAznzpOOsMBQ2s3iJXqE",
  authDomain: "khaled-b3c1a.firebaseapp.com",
  projectId: "khaled-b3c1a",
  storageBucket: "khaled-b3c1a.appspot.com",
  messagingSenderId: "742545932493",
  appId: "1:742545932493:web:7636d95a29c930cc1e6984"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = {
  firebase,
  db: database,
};
