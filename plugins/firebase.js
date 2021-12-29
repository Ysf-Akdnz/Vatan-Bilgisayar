import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const config = {
    apiKey: "AIzaSyDdfRucjm8JfAzYVo6aYYMfuyZ_U-2KK94",
    authDomain: "vatan-bilgisayar-api.firebaseapp.com",
    databaseURL: "https://vatan-bilgisayar-api-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vatan-bilgisayar-api",
    storageBucket: "vatan-bilgisayar-api.appspot.com",
    messagingSenderId: "185395640105",
    appId: "1:185395640105:web:cb3897d0fc6c6e6c852938"
}
const app = initializeApp(config);
const realDb = getDatabase(app);
const auth = getAuth(app)
export { realDb, auth }