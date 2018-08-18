$('#donthaveacc').click(function(){
	$('#signin').css('display','none');
	$('#signup').css('display','block');
})
$('#gotanacc').click(function(){
	$('#signin').css('display','block');
	$('#signup').css('display','none');
})
$('#passforgot').click(function(){
	$('#forgotpassword').css('display','block');
	$('#signin').css('display','none');
})
$('#back').click(function(){
	$('#forgotpassword').css('display','none');
	$('#signin').css('display','block');
})
var config = {
	    apiKey: "AIzaSyBZgL1gKHAcaY-4Y4PGCNfnssztb8IarZU",
	    authDomain: "moviewebsite-b7ffe.firebaseapp.com",
	    databaseURL: "https://moviewebsite-b7ffe.firebaseio.com",
	    projectId: "moviewebsite-b7ffe",
	    storageBucket: "moviewebsite-b7ffe.appspot.com",
	    messagingSenderId: "348587192024"
	  };
	  firebase.initializeApp(config);
function createaccount(){
	var userEmail = document.getElementById("cEmail").value;
	var userpass = document.getElementById("cPassword").value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userpass).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);
});
}
function resetmyacc(){
	var email = document.getElementById('userpEmail').value;
	firebase.auth().sendPasswordResetEmail(email).then(function(){
		toastr["success"]("Error:" +"  "+"Password Reset Email Sent!");
	}).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode == 'auth/invalid-email') {
			alert(errorMessage);
		}
		else if (errorCode == 'auth/user-not-found'){
			alert(errorMessage);
		}
		toastr["error"]("Error:" +"  "+ errorMessage);
	});
}
document.getElementById('loginform').addEventListener('submit', submitForm);
function submitForm(e){
   e.preventDefault();
	 var email = document.getElementById('uEmail').value;
	 var password = document.getElementById('uPassword').value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  toastr["error"]("Error:" +"  "+"Bad email or password.Try Again!");
});
  document.getElementById('loginform').reset();
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     location.replace("file:///C:/Users/MR.GHOST/Desktop/MoviePro/Home.html");
  } else {
    
  }
});