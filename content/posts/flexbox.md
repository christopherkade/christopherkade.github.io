---
title: "Flexbox 101"
description: "Easy, responsive and elegant."
date: "2019-05-10"
slug: "/posts/flexbox"
draft: false
category: "CSS"
tags:
  - "CSS"
  - "Design"
template: "post"
---

Flexbox is a must in today's UI development world as it lets you create responsive and elegant layouts in record time 🙆‍♂️  

We'll go through concrete examples one at at time and build the following [UI](https://codepen.io/christopherkade/pen/MdyQJE) containing a navbar and a list of cards.  

<div style="display: flex; align-items: center; justify-content: center">
<img class="article-img" alt="render of the component mentioned" src="https://user-images.githubusercontent.com/15229355/57548653-cd9ab180-7361-11e9-9820-00ddda69e799.png">
</div>

Throughout each step, we'll learn essential Flexbox concepts to get you going on the right foot, so feel free to create your own [codepen](https://codepen.io/) to try them out.

<br>

## Learning the basics with a navbar

Our HTML will look something like this:

```html
<nav>
  <a href="#">
    <img src="https://image.flaticon.com/icons/svg/145/145867.svg"/>
  </a>
  <a href="#">Home</a>
  <a href="#">Blog</a>
</nav>
```

With an icon to the left and two links to the right, pretty standard stuff.

This navbar will use three Flexbox concepts: `display`, `justify-content` and `align-items`, so let's cover them one by one.

<br>

### display

```css
nav {
  display: flex;
}
```

The first thing you'll type when working with Flexbox. It makes it so that every child of our `nav` takes advantage of the flex context.  
We can now start moving around the container's children.

<br>

### justify-content

```css
nav {
  display: flex;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

It determines where we place our container's elements on the main axis.   
Each one is pretty self explanatory but it's worth playing around with it.

In our case, we want our items to be on the right (the end) of the navbar:

```css
nav {
  display: flex;
  justify-content: flex-end;
}
```

"But Chris, by using the value `flex-end` **everything** goes to the end of my container, even the icon !", and you're absolutely right, we want our icon to be on the left while everything else is on the right. To do so, we can use a pretty neat trick, we set the icon's `margin-right` to auto, telling our layout to automatically place the icon to the far left like so.

```css
/* Target the first link in our navbar (the icon)  */
nav > a:first-child {
  margin-right: auto;    
}
```

Everything is starting to look better, although we still need to center our icon vertically.

<br>

### align-items

```css
nav {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

It determines the position of the container's children on the cross axis (the axis perpendicular to the one used by `justify-content`).

In our case, we want to align our navbar items vertically, like so:

```css
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```

And that's it, we have a fully fledged navbar and we learned three essential concepts of Flexbox ! 🎉

<br>

### Bonus: flex-direction

Even though we're not using it here, I think it's worth mentioning `flex-direction`. 

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

Just like its name entails, it determines the container's main axis, think of it as creating a horizontal (by default) or vertical layout.

Try it out ! You'll see that defining it as `column` will have the expected result: a vertical layout.

<br>

## Going a bit further with a card list

Alright, you may have seen the [example UI](https://codepen.io/christopherkade/pen/MdyQJE) shared earlier, we'll now work on creating this card layout and have it be responsive (which is made very easy thanks to Flexbox).

Here what our HTML will look like:

```html
<article class="card-container">

  <div class="card">
    <a class="card-link" href="#">       
      <time>May 4, 2019 | 3 min read</time>
      <span>
        <h2 class="card-title">My awesome card</h2>
        <p class="card-description">...with a description !</p>
      </span>
    </a>
  </div>

  <!-- More cards below -->
</article>
```

We will display a large amount of cards on **multiple lines**, these can be articles (like on [christopherkade.com](https://christopherkade.com/blog)), TODOs or anything you'd like.

To do so, we only need one new concept: `flex-wrap`.

<br>

### flex-wrap

It tells our container to wrap its items onto multiple lines when needed. By default `flex` will fit every item on the same line.

```css
.card-container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

So, our `.card-container` will now look like the following:

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

> Try moving your window's size around, it's responsive and will render the the amount of cards that can fit each line automatically.

<br>

## Wait, that's it?

Yeah, it's not hard to get started with Flexbox. Of course there's much more to it, but that's more than enough to produce cool layouts.

If you want to go further, make sure to check out CSS-Trick's [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which was the main inspiration to write this post.

Of course, if you have any questions concerning Flexbox, CSS as a whole or Javascript, don't hesitate to send them to me on Twitter [@christo_kade](https://twitter.com/christo_kade) 😄
