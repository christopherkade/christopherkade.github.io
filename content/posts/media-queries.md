---
title: "Deep dive into @media queries"
description: "Practical examples of media queries"
date: "2019-07-27"
slug: "/posts/media-queries"
draft: false
category: "CSS"
tags:
  - "CSS"
  - "Tutorial"
template: "post"
---

Media queries are a huge part of our daily life as web developers, and yet, most of us have only touched the surface when it comes to what they can do.  

For those who aren't familiar with the concept, let me explain it briefly.

## What are media queries?

To illustrate, try changing the size of your browser's window. As you move it around, you'll notice that the size and positions of elements often move based on the width and height of your screen.  
This is done thanks to **media queries** who's job is to modify your site's layout based on a device's general type or on certain parameters (such as its size).

The general syntax of media queries goes as follows:

```css
@media screen and (min-width: 685px) {
  .title {
    font-size: 2rem;
  }
}
```

- `screen` is the media type to which the styles will apply. This media query is intended for screens.
- `and` is a logical operator, you can chain them as much as you want. For example, you could have a media query for `min-width: 685px` **and** `orientation: landscape`.
- `min-width:` is a media feature, in this example it tells our browser to apply the styles between the two brackets only when reaching a minimum width of 685 pixels. You can use many unit types, such as `rem`.

Alright, let's go over what `@media` queries can really do through concrete examples on Codepen 👇

## Media types

Most of us know of the `screen` media type, but there are two other lesser known types.

Media types simply describe the category of a device. By default, the `all` type is used except when using the `not` or `only` logical operators.

### `all`

Means the styles in the query are suitable for all devices.

[Codepen](https://codepen.io/christopherkade/pen/XLzgXX)

### `print`

Means the styles in the query are intended for paged material and documents viewed on a screen in print preview mode.  
For example, if we have a "reservation confirmation" page we'd like for our user to print, we could hide the social media links at the bottom using this media query.

[Codepen](https://codepen.io/christopherkade/pen/XLzgEp)

Right clicking and trying to print this page should display the preview without the bottom text.

### `screen`

Our usual go-to. Means the styles are intended for screens.

[Codepen](https://codepen.io/christopherkade/pen/RzjZxb)

### `speech`

This type is intended for screen readers.   
A very limited amount of CSS attributes have an impact on screen reader behavior but it's worth knowing this type. You could, for example, hide a specific element of the screen that shouldn't be read by screen readers or have code punctuation be read out loud.

[Codepen](https://codepen.io/christopherkade/pen/ZdaJmo)

## Essential media features

I won't cover the full list of media features, as some of them are obscure and have very little use-cases. If you're interested in the full list, check it out [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features).

### `width` and `height`

Our bread and butter, these features allow us to apply styles based on the width and height of our viewport.  
For example, [DEV](http://dev.to) hides the `navigation` and `newest listings` side views when reaching respectively `950px` and `1120px` (try it out yourself !).

[Codepen](https://codepen.io/christopherkade/pen/ZdrgzY)

### `orientation`

As the name suggests, it allows us to apply styles based on the orientation of a device. Either `portrait` or `landscape`.

[Codepen](https://codepen.io/christopherkade/pen/ZdxgVO)

### `display-mode`

Applies styles based on the display mode of an application.  
Available modes are: `fullscreen`, `standalone`, `minimal-ui` and `browser`. [More information](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode#Syntax).

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

## Complex media queries

With the use of logical operators such as `and`, `not`, `only` and `,` (comma) we can now build complex media queries for specific use-cases.

In this example, we want our video frame to take the full width and height of the screen when in landscape mode and on a tablet (for a better viewing experience):

[Codepen](https://codepen.io/christopherkade/pen/wLjwMv)

Additionally, you can use the comma to apply any given styles to multiple queries, for example:

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

I hope you've learned at least a couple of things in this article, if you have, feel free to follow me on Twitter [@christo_kade](twitter.com/christo_kade) 🤗  

