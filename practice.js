var firebaseConfig = {
    apiKey: "AIzaSyClIbzG1gAqBWzdQxAitthv3A5lbWEA984",
    authDomain: "kwiter-ff465.firebaseapp.com",
    databaseURL: "https://kwiter-ff465-default-rtdb.firebaseio.com",
    projectId: "kwiter-ff465",
    storageBucket: "kwiter-ff465.appspot.com",
    messagingSenderId: "170603267825",
    appId: "1:170603267825:web:3169f8a335f2fb1d330b50"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user = document.getElementById("user_name").value
      age = 12
firebase.database().ref("/").child(user).update({
    purpose :user,
    age_user: age
})


  }