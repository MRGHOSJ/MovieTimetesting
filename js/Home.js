var config = {
	    apiKey: "AIzaSyBZgL1gKHAcaY-4Y4PGCNfnssztb8IarZU",
	    authDomain: "moviewebsite-b7ffe.firebaseapp.com",
	    databaseURL: "https://moviewebsite-b7ffe.firebaseio.com",
	    projectId: "moviewebsite-b7ffe",
	    storageBucket: "moviewebsite-b7ffe.appspot.com",
	    messagingSenderId: "348587192024"
	  };
	  firebase.initializeApp(config);
function checkuser() {
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("all").style.display = "block"
  } else {
    // No user is signed in.
    location.replace("file:///C:/Users/MR.GHOST/Desktop/MoviePro/index.html");
  }
});
}function logout(){
	firebase.auth().signOut();
	location.replace("file:///C:/Users/MR.GHOST/Desktop/MoviePro/index.html");
}