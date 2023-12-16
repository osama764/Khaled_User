const firebaseConfig = {
  apiKey: "AIzaSyBt9O2sJ1kNdd-kAznzpOOsMBQ2s3iJXqE",
  authDomain: "khaled-b3c1a.firebaseapp.com",
  projectId: "khaled-b3c1a",
  storageBucket: "khaled-b3c1a.appspot.com",
  messagingSenderId: "742545932493",
  appId: "1:742545932493:web:7636d95a29c930cc1e6984"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to  RealTime Database service
const database = firebase.database();

let login = document.getElementById("login");
let signUp = document.querySelector(".signUp");
let loteFile = document.querySelector(".loteFile");
let myform = document.querySelector(".myform");
let body = document.querySelector("body");
let regester = document.querySelector(".regester");
let loading = document.querySelector(".loading");
let loginpage = document.querySelector(".loginpage");

const correct = document.querySelector(".correct");
const close = document.querySelector(".close");
const Message = document.querySelector(".error-message");

// smarttechminya@gmail.com
// oak_2030

// button log in to redirect page adding room
loginpage.addEventListener("click", (e) => {
  e.preventDefault();
  const email = myform.email.value;
  const password = myform.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // تم تسجيل الدخول بنجاح
      myform.email.value = "";
      myform.password.value = "";

      // قم بتوجيه المستخدم إلى صفحة إضافة الغرفة هنا
      window.location.href = "client/Pages/AddNewRooms.html";
    })
    .catch((error) => {
      // حدث خطأ أثناء تسجيل الدخول
      const errorCode = error.code;

      const errorMessage = error.message;

      Message.innerHTML = errorMessage;
      correct.style.transform = "scale(1)";
    });
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  correct.style.transform = "scale(0)";
});
