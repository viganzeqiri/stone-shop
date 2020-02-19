import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAdYOPfMuabeTuViHGu7axMXTkS1RwySOk",
	authDomain: "stone-db.firebaseapp.com",
	databaseURL: "https://stone-db.firebaseio.com",
	projectId: "stone-db",
	storageBucket: "stone-db.appspot.com",
	messagingSenderId: "879546667018",
	appId: "1:879546667018:web:af4970df92bf150e7e8ff3",
	measurementId: "G-WM6HM3TF6Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log(`Error creating user`, err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;