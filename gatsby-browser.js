/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as firebase from 'firebase'

export const onClientEntry = () => {
    const firebaseConfig = {
  apiKey: "AIzaSyC4hbFWed4J4df1S8pmNguZaXQBegrS07E",
  authDomain: "sanlocal.firebaseapp.com",
  databaseURL: "https://sanlocal.firebaseio.com",
  projectId: "sanlocal",
  storageBucket: "sanlocal.appspot.com",
  messagingSenderId: "979239820007",
  appId: "1:979239820007:web:52c7abdf947bb138fa2042",
  measurementId: "G-Y9Z0JZ4RQW"
};
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
      firebase.analytics()
}