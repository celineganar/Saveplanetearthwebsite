
    function createAccount(){
        var u, p;
        var valid = true;
    
        u=document.getElementById("email").value;
        p=document.getElementById("psw").value;
    
        if(localStorage.getItem(u) != undefined) {
            alert("Username taken! retry");
            document.getElementById("email").value ="";
            document.getElementById("psw").value ="";
            document.getElementById("email").focus();
            valid = false;
        }
        else{
            localStorage.setItem(u,p);
            alert("Account "+ u +" Created!");
    
        }
    
        return valid;
    }

    function validateForm() {
        var em = document.loginform.email.value;
        var pw = document.loginform.password.value;
        var username = "username"; 
        var password = "password";
        if ((em == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }
