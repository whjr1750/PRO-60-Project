import firebase from "firebase"

const firebaseConfig = {
 apiKey: "AIzaSyBgU-ln16WCz30YPw7FKBELBBHMGWCh9ms",
  authDomain: "e-attendence-a05b6.firebaseapp.com",
  databaseURL: "https://e-attendence-a05b6-default-rtdb.firebaseio.com",
  projectId: "e-attendence-a05b6",
  storageBucket: "e-attendence-a05b6.appspot.com",
  messagingSenderId: "99845719584",
  appId: "1:99845719584:web:6f32702593ff3c2da31e45"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()