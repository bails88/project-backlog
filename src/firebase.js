import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQwRPapH4xsYZt6epxHdEugfr2eCzz19I",
    authDomain: "backlog-tool-66db2.firebaseapp.com",
    projectId: "backlog-tool-66db2",
    storageBucket: "backlog-tool-66db2.appspot.com",
    messagingSenderId: "736338976966",
    appId: "1:736338976966:web:4252cb0ab7bc73d632f7c7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };