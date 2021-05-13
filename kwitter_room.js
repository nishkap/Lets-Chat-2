 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyD3xqbNUT6bkp5vr1ooHJ0osaG_wH75xpQ",
      authDomain: "social-website-1.firebaseapp.com",
      databaseURL: "https://social-website-1-default-rtdb.firebaseio.com",
      projectId: "social-website-1",
      storageBucket: "social-website-1.appspot.com",
      messagingSenderId: "364224354674",
      appId: "1:364224354674:web:9382f551dc6c7c8436e5eb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
