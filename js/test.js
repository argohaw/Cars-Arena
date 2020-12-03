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

function getdata()
{
    var user = document.getElementById('user').Value;

    firebase.database().ref('hatchback/'+'tataaltroz').once('value').then(function (snapshort){

        var name = snapshort.val().Name;
        var price = snapshort.val().Price;
        var fueltype = snapshort.val.FuelType;
        var trans = snapshort.val().Transmission;
        var bodytype = snapshort.val().BodyType;
        var maxp = snapshort.val().Maxpower; 


        document.getElementById('name').innerHTML=name;
        document.getElementById('price').innerHTML=price;
        document.getElementById('fueltype').innerHTML=fueltype;
        document.getElementById('transmission').innerHTML=trans;
        document.getElementById('bodytype').innerHTML=bodytype;
        document.getElementById('maxpower').innerHTML=maxp;

    })
}