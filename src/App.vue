<template lang="pug">
  #app
    router-view
</template>

<script>
const firebase = require('./assets/js/firebase.js');
// import firebase from "firebase/app";
// import firestore from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyBCuYo9UyiOJbcRw3pAvPKUP0Fz67YMvQY",
//   authDomain: "daphne-d6497.firebaseapp.com",
//   projectId: "daphne-d6497",
//   storageBucket: "daphne-d6497.appspot.com",
//   messagingSenderId: "866108407577",
//   appId: "1:866108407577:web:439988a15d75b636cd0f88"
// };
export default {
  name: 'App',
  mounted() {
    // const app = initializeApp(firebaseConfig);
    // const db = app.database();
    console.log(firebase)
  }
}

</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
