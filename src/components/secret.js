var app = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyBYPZeVcd4aEJ_TMpIgI59MFk5KTl2-nXM",
    authDomain: "nugenlemen.firebaseapp.com",
    databaseURL: "https://nugenlemen.firebaseio.com",
    projectId: "nugenlemen",
    storageBucket: "nugenlemen.appspot.com",
    messagingSenderId: "252095633203",
    appId: "1:252095633203:web:63b0eaa17e52dd68021046"
  };

app.initializeApp(firebaseConfig);
export default app;