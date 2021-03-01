// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://todo-list-b4762-default-rtdb.firebaseio.com' })
  .database()
