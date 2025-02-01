// Firebase Configuration (for potential future use if needed)
const firebaseConfig = {
  apiKey: "AIzaSyDqM3RtWOynG72MBKueIReCu2S-ZQcLESo",
  authDomain: "tell-and-talk.firebaseapp.com",
  databaseURL: "https://tell-and-talk-default-rtdb.firebaseio.com",
  projectId: "tell-and-talk",
  storageBucket: "tell-and-talk.firebasestorage.app",
  messagingSenderId: "579539761154",
  appId: "1:579539761154:web:a8c7c2ad083cb0fb34cf1b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to add user
function addUser() {
    const user_name = document.getElementById("user_name").value;

    // Check if the username is already stored in localStorage
    if (localStorage.getItem("user_name") === user_name) {
        alert("This username is already taken in this session. Please choose a different one.");
    } else {
        // If the username is unique, store it in localStorage
        localStorage.setItem("user_name", user_name);

        // Redirect to the next page where the user can join rooms or chat
        window.location = "talkchat_room.html";
    }
}
