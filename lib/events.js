
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
//import firebase from 'firebase';
import { useRouter } from 'next/router'
import fetch from 'node-fetch'

const eventsDirectory = path.join(process.cwd(), 'events')
const config = {
    apiKey: "AIzaSyDgVyCdPGq09cIDKOkZ3Kk4HnhDDI8U4SY",
    authDomain: "https://wtc-next.firebaseio.com/",
    databaseURL: "https://wtc-next.firebaseio.com/",
  };




  // class fireBaseHelper () {
  //   try {
  //     firebase.initializeApp(config);
  //   }
  //   catch (err) {
  //       if (!/already exists/.test(err.message)) {
  //     console.error('Firebase initialization error', err.stack)
  //   }
  //   }


  // }


  export async function getSortedEventsData() {
     // Set the configuration for your app    
     const firebase = require("firebase");
 
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    // Get a reference to the database service
    var database = firebase.database();

      return new Promise ((resolve) => {
      database.ref("Form").once("value").then((snapshot) => {
        resolve(snapshot.val());
      });
})

     // return database.ref("Form").once("value").then((snapshot) => {
     //  console.log(snapshot.val())
     //    Promise.resolve(snapshot.val());
     //  })
    // .catch( function(){
    //   return "There was a problem"
    // });

      // var query = Firebase.database().ref("Form").orderByKey();
      //     query.once("value")
      //       .then(function(snapshot) {
      //         snapshot.forEach(function(childSnapshot) {
      //           // key will be "ada" the first time and "alan" the second time
      //           var key = childSnapshot.key;
      //           // childData will be the actual contents of the child
      //           var childData = childSnapshot.val();
      //       });
      //     });
  }


// export async function getSortedEventsData() {
      
//       var database = firebase.database();
//       var rootRef = firebase.database().ref();
//       return rootRef
// }

  // Get a reference to the database service
// export function getSortedEventsData() {

//   const fileNames = fs.readdirSync(eventsDirectory)
//   const allEventsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(eventsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the events metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
//   // Sort events by date
//   return allEventsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

