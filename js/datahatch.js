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
    var rootref = firebase.database().ref().child("hatchback");

    rootref.on("child_added", snap => {

        var name = snap.child("Name").val();
        var pri = snap.child("Price").val();
        var trans = snap.child("Transmission").val();
        var maxp = snap.child("Maxpower").val();
        var btype = snap.child("BodyType").val();
        var ftype = snap.child("FuelType").val();

        $("#tablebody").append("<tr><td>" + name + "</td><td>" + pri + " L</td><td>" + maxp + " Bhp</td><td>"+ trans + "</td><td>" + btype + "</td><td>" + ftype +"</td></tr>");
    });
});