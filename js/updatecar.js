
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

const price = document.getElementById('price');
const fname = document.getElementById('model');
const bodyty = document.getElementById('bodytype');

const database = firebase.database();
//const rootref = database.ref('hatchback');

addbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    database.ref('/hatchback/'+bodyty.value).set({
        price = document.getElementById('Price');
        model = document.getElementById('Model');
        bodyty = document.getElementById('BodyType');
    });
});