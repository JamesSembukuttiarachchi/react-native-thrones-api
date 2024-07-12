import auth from "@react-native-firebase/auth";

export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth().signOut();
}

export function onAuthStateChanged(callback) {
  return auth().onAuthStateChanged(callback);
}
