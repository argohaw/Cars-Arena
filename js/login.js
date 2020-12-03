/*
var firebaseConfig = {
    apiKey: "AIzaSyBwlpsqLxZafaLLJt3l7v8hIfHAhQnn0Es",
        authDomain: "carsarena-411ef.firebaseapp.com",
    databaseURL: "https://carsarena-411ef.firebaseio.com",
    projectId: "carsarena-411ef",
    storageBucket: "carsarena-411ef.appspot.com",
    messagingSenderId: "353649819455",
    appId: "1:353649819455:web:c62ead4a722ae6636d5d8a",
    measurementId: "G-8HVK82K5B9"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$(document).ready(function(){
    var rootref = firebase.database().ref().child("users");

    rootref.on("child_added", snap => {

        var userid = snap.child("user_id").val();
        var pass = snap.child("password").val();

        function loginvalidation()
        {
            var uid = document.login.user_id;
            var passid = document.login.pass_word;

            if(userid_validation(uid) && passid_validation(passid))
            {
                window.location.href = "/index1.html";
            }
            return false;
        }

        function userid_validation(uid)
        {
            if(uid == userid)
            {
                alert("Invalid User-ID");
                uid.focus();
                return false;
            }
            return true;
        }

        function passid_validation(passid)
        {
            if(passid == pass)
        {
            alert("Invalid Password");
            passid.foucs();
            return false;
        }
            return true;
        }        
    });
});
*/
function loginvalidation()
{
    var uid = document.login.user_id;
    var passid = document.login.pass_word;

    if(userid_validation(uid) && passid_validation(passid))
    {
        window.location.href = "/index1.html";
    }
    return false;
}

function userid_validation(uid)
{
    if(uid != "sriram")
    {
        alert("Invalid User-ID");
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(passid)
{
    if(passid != "sriram123")
    {
        alert("Invalid Password");
        passid.foucs();
        return false;
    }
    return true;
}

