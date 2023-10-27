import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4ofq5wxjJj_rEGqAXYChxmEPf8Serftw",
  authDomain: "netflix-clone-62317.firebaseapp.com",
  projectId: "netflix-clone-62317",
  storageBucket: "netflix-clone-62317.appspot.com",
  messagingSenderId: "907369924410",
  appId: "1:907369924410:web:29fbb911c2b878cd6bb203"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);