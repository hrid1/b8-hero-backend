// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.apiKey,
//   authDomain: import.meta.env.authDomain,
//   projectId: import.meta.env.projectId,
//   storageBucket: import.meta.env.storageBucket,
//   messagingSenderId: import.meta.env.messagingSenderId,
//   appId: import.meta.env.appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyDm4sZDKa9OFoVRe6eSIFc-EbdEoXrLu8M",
  authDomain: "car-doctor-75821.firebaseapp.com",
  projectId: "car-doctor-75821",
  storageBucket: "car-doctor-75821.appspot.com",
  messagingSenderId: "741653841909",
  appId: "1:741653841909:web:191610118e570601bf82bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
