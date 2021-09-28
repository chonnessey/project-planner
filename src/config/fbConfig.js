import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRqAr7ox5i_2OeoMHcVnOQfbPnnVRsenc",
  authDomain: "project-planner-4d1c7.firebaseapp.com",
  projectId: "project-planner-4d1c7",
  storageBucket: "project-planner-4d1c7.appspot.com",
  messagingSenderId: "749444373947",
  appId: "1:749444373947:web:6e4aa02330fc853f9bf89e",
  measurementId: "G-ECHCEVX2J0"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.firestore().settings({timestampsInSnapshots: true})

export default app