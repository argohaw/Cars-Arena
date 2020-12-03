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
    var rref = firebase.database().ref().child("hatchback");

    rootref.on("child_added", snap => {

        var fname = snap.child("first_name").val();
        var lname = snap.child("last_name").val();
        var mail = snap.child("email").val();
        var phone = snap.child("phone_number").val();
        var userid = snap.child("user_id").val();

        $("#tablebody").append("<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + userid + "</td><td>"+ mail + "</td><td>" + phone +"</td></tr>");
    });
});


     /*var ref = firebase.database().ref('users');

    ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    var formd = snapshot.val();
    var fd = '<tr>'+ '<td>'+ formd.email + '</td>' + '</tr>';
    }, function (error) {
    console.log("Error: " + error.code);
    });*/