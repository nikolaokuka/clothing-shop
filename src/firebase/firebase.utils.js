import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCdvAL8-96_YoQDTZHeBIHF9eSOb6Z3TnQ",
  authDomain: "clothing-shop-fdcd4.firebaseapp.com",
  databaseURL: "https://clothing-shop-fdcd4.firebaseio.com",
  projectId: "clothing-shop-fdcd4",
  storageBucket: "clothing-shop-fdcd4.appspot.com",
  messagingSenderId: "142108421718",
  appId: "1:142108421718:web:96183d622a2f9ba53715f7",
  measurementId: "G-D08F32M5QN"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase