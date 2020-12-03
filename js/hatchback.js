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
//firebase.analytics();

const bodyt = document.getElementById('bt');
const fuelt = document.getElementById('ft');
const maxp = document.getElementById('mp');
const nam = document.getElementById('name');
const pri = document.getElementById('price');
const tran = document.getElementById('trans');
const addbtn = document.getElementById('submitbtn');

const database = firebase.database();
const rootref = database.ref('sedan');

addbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const autoid = rootref.push().key
    rootref.child(autoid).set({
        BodyType: bodyt.value,
        FuelType: fuelt.value,
        Maxpower: maxp.value,
        Name: nam.value,
        Price: pri.value,
        Transmission: tran.value
    });
});