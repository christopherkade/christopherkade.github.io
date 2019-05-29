---
title: "Coding a desktop app with Electron and Angular"
description: "Lots of apps you might use on a daily basis use Electron."
date: "2017-12-20"
slug: "/posts/intro-electron"
draft: false
category: "Javascript"
tags:
  - "Javascript"
  - "Angular"
  - "Electron"
template: "post"
---

Everybody knows about [Electron](https://electronjs.org/), it's one of those open-source tools that the community is really grateful for as it gives us the liberty to develop amazing things such as the text editor I'm currently using: [Atom](https://atom.io/).

If you're not familiar with Electron, it's a framework that allows anyone to develop **cross platform** desktop applications using Javascript, HTTP and CSS, pretty cool, huh?

In this blog post, we'll be coding a small app to track accomplishments (a glorified to-do application).

<br><br>

### Getting started

Since Angular is my framework of choice to discover Electron, I'll be using the awesome bootstrapping project [angular-electron](https://github.com/maximegris/angular-electron) in order to get started as quickly as possible. This project offers great features, such as packaging my app into executables for Linux, Windows & Mac as easily as running `npm run electron:os`.

So I clone the repository, install the dependencies & run it:

```bash
git clone https://github.com/maximegris/angular-electron.git
npm install
npm start
```

Which opens the following window:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/33723183-db3892e0-db63-11e7-8cfe-5e68e3a345e8.png">
</p>

Note the inspection tool on the right, that's because Electron uses **Chromium** to render my project, therefore I have access to the usual inspection tool.

<br><br>

### Tweaking everything to my liking

There are two things that I wish to change:

- I'll use Sass instead of Scss
- I want to use the CSS framework [Bulma](https://bulma.io/)

<br>

#### Scss to Sass

All I need to do is tell `angular-cli` that I'm using Sass instead of Scss, change the existing file extensions and change a line in the `webpack` configuration.

I first run `ng set defaults.styleExt sass`, then I change the extensions of the following files: `styles.scss`, `app.component.scss`, `home.component.scss` without forgetting to adjust the syntax of their contents.  
And finally, I head to `webpack.config.js` and update the following block:

```javascript
const styles = ['./src/styles.scss']
```

I can now use Sass in my Angular project.

<br>

#### Using Bulma

First, run:  
`npm install bulma`

Then head to `styles.sass` and add the following lines:

```sass
@import ../node_modules/bulma/sass/utilities/initial-variables
@import ../node_modules/bulma/sass/utilities/functions

// Contents of the file

@import "~bulma"
```

Now that everything is ready, I can start coding my application.

<br><br>

## Step 1: The initial requirements

My application will contains a navigation bar to move from one list to another and a content panel to display the TODOs (and their status).

Therefore I'll need two distinct components, let's generate the nav with `angular-cli` and use the existing `home` component as our content panel:

`ng g component nav`

Which generates a `nav` folder containing my template, style sheet, component and test files.

As my navigation is independent to the currently existing routing, I'll add it parallel to my `router-outlet` like such:

```html
<app-nav></app-nav>
<router-outlet></router-outlet>
```

Which displays:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/33724972-c3f7d4d8-db68-11e7-9e3c-cc2bf780d83d.png">
</p>

_Note the little "nav works!" on top of the window._

Let's now make it look like an actual navigation bar:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/33726862-308d767a-db6e-11e7-8265-0e8a48c06319.png">
</p>

As you can see, I have made some changes:

- The navbar is now a section with a `fixed` position, containing several _Lists_ that will allow our user to navigate through the application.
- I have added a background picture I find pretty, if you know where it is, please let me know :-)

<br><br>

## Step 2: The essential feature

I now want to add actual Todos for each list and display them. Here is the current model for a `List`:

```javascript
export class List {
  // A list has a generic default name
  name: string = 'New List'
  // Each list contains a list of Todos
  todos: Todo[] = []
}
```

And the model for a Todo element:

```javascript
export class Todo {
  name: string = 'New TODO'
  description: string
  // A Todo element is either done or in progress
  done: boolean = false
}
```

All I have to do, is to add a button to create a new Todo, once clicked, I'll simply push a newly created `Todo` into my currently displayed `List`s array and display said array with an `ngFor`. With all of that said, here is the result:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/33740261-f40fa0c2-db97-11e7-84e5-ff9520be882f.png">
</p>

Note the undocumented changes such as the ability to create a new List (which uses the same concept applied to create a new Todo), the ability to mark a Todo as done and the ability to edit the name of a List. All of this is very basic and doesn't really need to be detailed.

<br><br>

## To be continued

Next steps will involve having a clean and professional design, saving the TODOs locally (in order to retrieve them from one session to another) and many more steps to make this little application as perfect as it can be.
