import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyC3D00JSHbKfPDoBm18tBo_ryWDZmnb9Q0",
	authDomain: "grayghost-test.firebaseapp.com",
	databaseURL: "https://grayghost-test.firebaseio.com",
	projectId: "grayghost-test",
	storageBucket: "grayghost-test.appspot.com",
	messagingSenderId: "408006832635",
	appId: "1:408006832635:web:1ce09105b7599f8c355b5e",
	measurementId: "G-8X02L7LSZH"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
