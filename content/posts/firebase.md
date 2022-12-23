---
title: "Using Firebase Google Authentication in your web projects"
description: "It's extremely easy to set up and should get your project up and running in a minute."
date: "2019-03-05"
slug: "/posts/firebase"
isPublished: true
---

[Firebase](https://firebase.google.com/) is a pretty great tool to build applications without having to worry about an infrastructure. It allows you to manage a multitude of aspects that would normally take many hours to implement such as authentication, databases, storage, monitoring and so on.  
This short blog post will cover how to add Google authentication to any web project in a matter of minutes.

## Step 1: Create and set up your Firebase project

Head to the [Firebase console](https://console.firebase.google.com/u/0/) and create your new project, input the necessary information such as the project's name and your location (no need to touch your project's ID).

![](https://user-images.githubusercontent.com/15229355/53787786-37d94500-3f20-11e9-8f4d-fc4838934155.png)

Once this is done and your project has been created, you'll find yourself on your project's overview. Click on the following button

![](https://user-images.githubusercontent.com/15229355/53788105-14fb6080-3f21-11e9-9b52-d6e020108401.png)

Which will display your project's configuration, including its API key, ID etc.

![](https://user-images.githubusercontent.com/15229355/53788194-5ee44680-3f21-11e9-9920-77ee0aedf4ac.png)

Copy this information, you'll need it to initialize your Firebase app. To do so, you must simply call the `initializeApp` method with your configuration.

```javascript
const firebase = require("firebase/app");

// ...

const config = {
  apiKey: "API_KEY",
  authDomain: "ID.firebaseapp.com",
  databaseURL: "https://ID.firebaseio.com",
  projectId: "ID",
  storageBucket: "ID.appspot.com",
  messagingSenderId: "senderID",
};

firebase.initializeApp(config);
```

_Tip: In the case of a Nuxt project, initialize Firebase directly in a plugin._

## Step 2: Allow the user to sign in via Google

The authentication flow is as follows:

User clicks on a button ➡️ a pop-up opens, allowing the user to chose one of their Google accounts ➡️ the user clicks on an account ➡️ the pop-up closes and the user is signed in.

So how can we achieve this? It's extremely simple. Once you have caught the user's click, call the following method:

```javascript
// Don't forget to require firebase/auth !
const firebase = require("firebase/app");
require("firebase/auth");

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      // The signed-in user info
      const user = res.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used
      const email = error.email;
    });
}
```

Calling the `signInWithPopup` method will automatically open the pop-up for you and handle any edge cases. In case of a successful sign in you can access the user's data directly though the `res.user` object. In case of an error, the error response object contains lots of useful information for you to display error messages for example.

## Bonus step: Handling user disconnection

To disconnect a user, simply call:

```javascript
firebase
  .auth()
  .signOut()
  .then(() => {
    // User has been signed out
  });
```

Additionnaly, Firebase offers a very useful method to catch any authentication state changes, appropriately called `onAuthStateChanged`. I personally use it to redirect my user to the login page when they disconnect, or to simply store my user's information upon sign in. It can be used like so:

```javascript
firebase.auth().onAuthStateChanged((user) => {
  // ...
});
```

As you can see it is very easy to set up authentication with Firebase, remember that there are multiple methods of authentication offered by this tool so feel free to explore them more in detail on their [official documentation](https://firebase.google.com/docs/auth/web/start).
