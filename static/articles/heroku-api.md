# Deploying an API to Heroku

Anyone that has met me knows that I love theme parks, that's why I recently deployed [Parks](https://christopherkade.com/parks/), a platform to retrieve wait times at most Disneyland Park around the world.

To do so I implemented an unofficial API called [themeparks](https://github.com/cubehouse/themeparks) by setting up endpoints on an Node server deployed to the free platform [Heroku](https://www.heroku.com/).

In this post I'll go through the steps necessary to have your own API up and running on that same platform; let's get started !

### Step 1: Setting up your API

#### Node

First, create your project's repository and initialize it:

```bash
mkdir my-awesome-api
cd my-awesome-api
npm init
```

Which will prompt you with some basic npm configuration questions, you can go through them by pressing enter, once asked `entry point: (index.js)`, input `server.js`. That simply defines the entry point to our node program.  
This process will create a `package.json` file, it holds metadata relevant to the project.

#### Heroku

Let's make sure you are logged in to Heroku's CLI, if you don't have it installed, you can do it [here](https://devcenter.heroku.com/articles/heroku-cli). Once installed run `heroku login`, which will prompt you for Heroku account information.

Once logged in, we can set up our project on Heroku by running `heroku create`, which will display:

```bash
Creating app... done, ⬢ ancient-garden-55847
https://ancient-garden-55847.herokuapp.com/ | https://git.heroku.com/ancient-garden-55847.git
```

Heroku sets up your application with a random (and rather soothing) name. Check out your Heroku dashboard, your project should be present.

We're all set up and ready to create some endpoints !

### Step 2: The first endpoint

Let's start by installing the necessary packages like so:  
`npm install express body-parser`

Create a `server.js` file with the following contents:

```javascript
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Server works !')
})

app.listen(port)
console.log('Server listening on port: ' + port)
```

And navigate to `localhost:3000` on your browser, you should see the following: `Server works !`.

### Another example

That should be enough for you to get started on declaring your own endpoints, but I'll show a more elaborate example using the Themeparks API mentioned before.

First, I'll install the necessary package:  
`npm install themeparks`

Then, I'll load the Themeparks module, set up options for my header and define a basic endpoint to retrieve every theme park the API handles (in the same `server.js` file):

```javascript
const Themeparks = require('themeparks')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/api/parks', (req, res) => {
  let parks = []
  for (var park in Themeparks.Parks) {
    console.log('* ' + new Themeparks.Parks[park]().Name + ' (' + park + ')')
    parks.push(new Themeparks.Parks[park]().Name)
  }
  res.status(200).json(parks)
})
```

I should now be able to target the `/api/parks` endpoint and have a list of parks displayed on my server's console.  
To test it locally I can run my server and navigate to `localhost:3000/api/parks` which displays a **long** list of theme parks.

An application to this endpoint could be to return an array of Park objects to my client in order to inform the user of the supported parks.

### Deploying it to Heroku

Deploying to Heroku is extremely easy:

```bash
# Start by initializing your repository
git init
# Create a .gitignore file and ignore the node_modules folder
echo "/node_modules" > .gitignore
# Add and commit all of the other files
git add .
git commit -m "Initial commit"
# Set up the remote to push to as the one created by Heroku
# Replace ancient-garden-55847 by the name of your Heroku project
heroku git:remote -a ancient-garden-55847
# Push everything
git push heroku master
```

Once pushed, Heroku will deploy your server in a matter of seconds, head to the Heroku dashboard and make sure your build has succeeded in the `Latest activity` panel.

You can now navigate to your API's URL (or click on Open app) and test it out in any browser !

In my case [https://ancient-garden-55847.herokuapp.com/api/parks](https://ancient-garden-55847.herokuapp.com/api/parks) returns a list of parks !

Please note that Heroku's free version has your server sleep when not used for a certain period of time, so if it's the first time you're launching it it will probably take more time than usual.

### Wrapping it up

We covered how to set up a very basic Node API from scratch and how to deploy it on the great platform that is Heroku. From here, you can build anything you want using the vast documentation that can be found anywhere on the web.

I hope that this post was helpful to some of you,

Happy coding,  
Christopher Kade
