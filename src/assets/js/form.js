   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUB4H4rzqnex4--4UV-7xWHsDB3bx2ryE",
    authDomain: "save-planet-earth.firebaseapp.com",
    databaseURL: "https://save-planet-earth.firebaseio.com",
    projectId: "save-planet-earth",
    storageBucket: "save-planet-earth.appspot.com",
    messagingSenderId: "282713433858",
    appId: "1:282713433858:web:079b911e8636b21137441b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  
  
  
  //SIGN UP FUNCTION
  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    auth.onAuthStateChanged(function(user){
  
      if(user){
       
       var email = user.email;
       alert( email + "Successful sign up");
       
       location.replace("login.html");
    }
      else{}
      });
    }
   
   
   
   
    //SIGN IN FUNCTION
   function signIn(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    
    promise.catch(e => alert(e.message)) 
   
      auth.onAuthStateChanged(function(user){
  
        if(user){
         
         var email = user.email;
         alert( email + "Successful sign in");
         location.replace("index.html");
     }
        else{}
           });
    }
  
  
  
    //SIGN OUT FUNCTION
   function signOut(){
  
    auth.signOut();
    alert("Signed Out");
    auth.onAuthStateChanged(function(user){
  
      if(user){
       
       
       }
       else{
       
       
       location.replace("login.html");
       //no user is signed in
      }
      
      
      
     });
    
   }

   
   
   
