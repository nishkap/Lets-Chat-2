 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCbaM1KAI6zQWja4LbVZlf4iy1iDLuAOR8",
  authDomain: "project-94-d0669.firebaseapp.com",
  projectId: "project-94-d0669",
  storageBucket: "project-94-d0669.appspot.com",
  messagingSenderId: "553789468471",
  appId: "1:553789468471:web:0c60166e90ca3f552ab4b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
 age : "11"
        });
}