---
title: "My journey discovering Phaser, an HTML5 game framework"
description: "Nobody will play it but hey, it was fun."
date: "2017-11-17"
slug: "/posts/intro-phaser"
draft: false
category: "Javascript"
tags:
  - "Javascript"
  - "HTML5"
template: "post"
---

This blog post sums up my journey of learning how to use the famous (and free) HTML5 game framework Phaser.

> Phaser is an HTML5 game framework which aims to help developers make powerful, cross-browser HTML5 games really quickly and, unlike some others, has solely been built to work with the mobile browsers.

I will also try to add my struggles and little snippets of advice I get along the way.

<br><br>

## The beginning

Curiosity led me to Phaser's [getting started tutorial](http://phaser.io/tutorials/getting-started/index), where I got to follow basic steps to set up my working environment.

These steps included:

- **Installing an http server**: I chose [`http-server`](https://www.npmjs.com/package/http-server) as it is simple to use, requires little to no configuration and is powerful enough for production usage.
- **Selecting my editor**: I decided to keep on using my favorite text editor, namely [Atom](https://atom.io/).
- **Downloading Phaser**: as it is an open-source project, it was as easy as cloning the repository locally.
- **Testing it out**: using their "Hello World" example where I displayed a black game area with their logo by launching my HTTP server, having it serve my game's folder (`http-server ./my-game/`) and navigating to the displayed link.

<br><br>

## The next step

As the tutorial recommended, I then proceeded to the [Making your first Phaser game](http://phaser.io/tutorials/making-your-first-phaser-game) tutorial.

It's a thoroughly well explained tutorial, where little to no prior knowledge is required.  
All the assets can be found [here](https://github.com/photonstorm/phaser/raw/master/v2/resources/tutorials/02%20Making%20your%20first%20game/phaser_tutorial_02.zip) and the code is already available in the Phaser repository cloned beforehand (in the `resources/tutorials` folder).

It is divided as follows:

- **Introduction**: where we download the tutorial's files and check out an `html` file containing the baseline for our game (namely the instance of a `Phaser.Game` object).
- **Loading Assets**: where we load assets to our game in the `preload()` method defined in the previous step. We then create a sprite in our canvas. Let's not forget that all of this is accessible thanks to our HTTP server, just serve the right directory and launch `http://xxx.xxx.xxx.xxx:port/part3.html` in your browser of choice.

<p align="center">
  <img width="460" height="300" src="http://phaser.io/content/tutorials/making-your-first-phaser-game/part3.png">
</p>

- **World Building**: where we build a scene with a background and platforms. Similar to the previous section, but it is composed of a `sky` background instead of the `star`, the former is a 800x600 PNG that fills the game screen. We also create a `platform` group that contains the ground and the 2 ledges we can jump on.

<p align="center">
  <img width="460" height="300" src="http://phaser.io/content/tutorials/making-your-first-phaser-game/part4.png">
</p>

- **Groups (and a player)**: where we learn about the usage of `group`s, as they allow to group together similar objects and control them as one unit (we have already created a group that contained the platforms). We then create a new variable called player giving it a position and a sprite sheet (loaded in the _Loading assets_ part), enable its physics, set its physics properties (bounce, gravity & collisions) and finally add its walking animations (right and left), while defining the corresponding images in our sprite sheet, the amount of FPS and if it should loop.

<p align="center">
  <img src="http://phaser.io/content/tutorials/making-your-first-phaser-game/dude.png">
  <br/>
  Here's what our player's sprite sheet looks like, it contains our running and standing frames
</p>

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/15229355/32609741-8dd1362c-c558-11e7-9f93-e32ca03b4a1d.png">
</p>

- **Body and velocity (physics)**: where we learn that _Phaser_ supports a lot of different physics systems (it ships with Arcade and Ninja and P2.JS Full-Body Physics). We must enable the physics property for every sprite or group that should be affected. This gives a new `body` property to our element which offers a lot of properties such as `player.body.gravity.y`. We also notice that the player does not stand on the ground we have set beforehand, that's because we need to introduce a _collision check_ between the player and the platforms.

<p align="center">
  <img width="460" height="300" src="http://phaser.io/content/tutorials/making-your-first-phaser-game/part6.png">
</p>

- **Controls**: where we set up our keyboard controls. To do so we start by setting our player's body velocity to 0 in order to reset his movements, then we define a `cursors` variable containing `game.input.keyboard.createCursorKeys()` that will be checked at every frame in `update()` in order to catch a keypress, for example if `cursors.left.isDown` is true, then our user has pressed the left key. We can also let our user jump by checking if he is touching the ground (in order to avoid mid-air jumps) and if the up key has been pressed.

- **Goals**: in this part, we create a star group that contains 12 stars to our scene (evenly spread out), set each of their gravity value and randomly assign a bounce value (between 0 - no bounce and 1 - full bounce). Let's not forget to enable physics for every star using `stars.enableBody = true` and to add collision between our newly created stars and the platform. Finally, using the `overlap` method, we catch when our player touches a star and call the `collectStar` method that simply kills a star in order to have it disapear from the scene using `star.kill()`.

<p align="center">
  <img width="460" height="300" src="http://phaser.io/content/tutorials/making-your-first-phaser-game/part8.png">
</p>

- **Score**: finally, using the `Phaser.Text` object, we add the player's score in the scenes top-left. We also add an incrementation in the previously created `collectStar` method and change the text at the same time to display the player's progress.

<p align="center">
  <img width="460" height="300" src="http://phaser.io/content/tutorials/making-your-first-phaser-game/part9.png">
</p>

<br><br>

### Thoughts on this tutorial

This tutorial was a pleasure to go through, it explains Phaser's core concepts with the right amount of details, is illustrated and progresses to a reasonable pace. Finishing it gives you so many ideas to add to this little example, and the possibilities seem endless (with proportional work of course).

I will add content to this post as I keep on using Phaser in the near future, but I hope this introduction was interesting enough to tingle your interest, feel free to check out the amazing documentation and examples given on Phaser's [website](http://phaser.io/).

### Game updates

- I have cleaned up the tutorial's code by splitting it into distinct methods (for example `setUpStars()` which simply creates our star group and its content)
- I added enemies to the game using the 'baddie.png' asset, when a user touches an ennemy, he dies and may restart the game by pressing [Space]
- I have added an 'end' to this little game, when all of our stars are collected, the user is congratulated and may restart the game by pressing [Space]

_Please keep in mind that I do not know any of the best practices yet !_

All of these changes can be found on this [repository](https://github.com/christopherkade/phaser-game-example).

# To be continued
