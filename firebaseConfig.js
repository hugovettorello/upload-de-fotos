
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQWnqLaho1Qr02k1jCHoqh5xqNccfU3L0",
  authDomain: "upload-de-fotos-1bd37.firebaseapp.com",
  projectId: "upload-de-fotos-1bd37",
  storageBucket: "upload-de-fotos-1bd37.firebasestorage.app",
  messagingSenderId: "5401502663",
  appId: "1:5401502663:web:2446a02a4c3c584084afe2",
  measurementId: "G-Z6RBVQB3KL"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);


const storage = getStorage(app);
export { storage };