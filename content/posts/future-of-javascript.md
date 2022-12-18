---
title: "The future of Javascript - features to keep an eye on"
description: "Let's discover JS features that should be available in the near future."
date: "2019-10-24"
slug: "/posts/future-of-javascript"
isPublished: true
category: "Javascript"
tags:
  - "Javascript"
template: "post"
---

We take a lot of Javascript features for granted, `map`, `filter`, `reduce`, `const`/`let`, ternaries... each one of these had a major impact on our code bases when they were introduced & allow for us to write cleaner and often times more performant code.

Let's cover who decides on the future of Javascript briefly, and then introduce some features that should arrive in the near & not so near future.

If you're only interested in concrete features, skip to the next section below by clicking [here](#stage-4-features) 👇

![paul-esch-laurent-oZMUrWFHOB4-unsplash](https://user-images.githubusercontent.com/15229355/67385541-94fb3700-f593-11e9-84e3-042ff8a73dee.jpg)

## ECMA? TC39?

In 1959, computers were being used more and more, which brought in multiple new manufacturers. Something was clear: they needed to find a way to standardize technical operations such as (but not only) programming.

And so, the 27th of April 1960 in Brussels, the European Computer Manufacturers Association (or ECMA) was born, looking to standardize this mess.

> Note: in 1994, ECMA became ecma international, where they dropped the acronym and used the latter word to show their international scale.

ECMA elects a new president every single year, usually someone from a major actor in computer science: IBM, HP, Siemens, Philips etc. Jochen Friedrick from IBM currently resides as president for the 2018-2019 period.

Here's how it's structured:

<img width="867" alt="Screenshot 2019-10-23 at 09 18 17" src="https://user-images.githubusercontent.com/52913438/67367591-180d9480-f576-11e9-8386-2eebf29d748b.png">

The general assembly includes ordinary members of ecma and is its highest authority. It controls its management, secretariat & executive committee. It's currently composed of some of the biggest names in tech, including Apple, AirBnb, Facebook, Netflix & Google. [Full list of members](https://www.ecma-international.org/memento/members.htm)

It's the secretariat's role to organize and create Technical Committees (TCs) and Technical Groups (TGs) who handle specific aspects of computer science.

Each TC manages the evolution & future of things such as Programming Languages, Product Safety and of course: ECMAScript.

<img width="1223" alt="Screenshot 2019-10-23 at 09 22 50" src="https://user-images.githubusercontent.com/52913438/67367895-b4379b80-f576-11e9-89a9-b966c4907ea0.png">

You now have a general overview of how things work, but what's the lifecycle of a new JS feature?

## TC39 proposals

So TC39 manages the evolution of our beloved (and sometimes hated) language, almost everything they do is [open-sourced](https://github.com/tc39/proposals) so it's always cool to check out new proposals and how they evolve over time.

## The stages of an ECMAScript feature

A new ECMAScript feature goes through 5 stages:

- **Stage 0** (Strawperson): which allows initial input into the specification
- **Stage 1** (Proposal): allows to make the case for the addition, describe the shape of the solution & identify potential challenges
- **Stage 2** (Draft): allows to precisely describe the syntax and semantic using formal specification language
- **Stage 3** (Candidate): indicates that further refinement will require feedback from implementations & users. Basically requires that all semantics, syntax and APIs are completely described
- **Stage 4** (Finished): Indicate that the addition is ready for inclusion in the formal ECMAScript standard

You can get more information and dive into great details about these stages [here](https://tc39.es/process-document/).

## Stage 4 features

Let's get to concrete stage 4 features, meaning features that are finished and that will be included in the soonest practical standard version of ECMAScript. I'll also display their current browser support.

### `Object.fromEntries`

![Code Snippet Object.fromEntries](https://user-images.githubusercontent.com/52913438/67385868-2e2a4d80-f594-11e9-930f-9ec03f0fb4d3.png)

<div class="sl-block is-focused" data-block-type="image" data-origin-id="53e1687c03903a53eec9c8676bb3624c"><div class="sl-block-content fragment visible" style="z-index: 13;" dat  a-fragment-index="0"><img data-natural-width="2500" data-natural-height="563" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654865/Screenshot_2019-10-15_at_09.52.44.png"></div></div>

<br>

### `Array.flatMap`

![flatMap snippet](https://user-images.githubusercontent.com/52913438/67392405-bf9fbc80-f5a0-11e9-9f30-036f5d8c624f.png)

The [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) docs mention that it's even slightly more efficient.

<div class="sl-block is-focused" data-block-type="image" data-origin-id="6829239f1c645ab929a55d0070f94342"><div class="sl-block-content fragment" style="z-index: 13;" data-fragment-index="0"><img data-natural-width="2500" data-natural-height="543" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654881/Screenshot_2019-10-15_at_09.53.45.png"></div></div>

<br>

### `BigInt`

![BigInt snippet](https://user-images.githubusercontent.com/52913438/67461189-1529a700-f63d-11e9-93ae-953e32eade57.png)

<div class="sl-block is-focused" data-block-type="image" data-origin-id="f9f9b23cfee1e446c1f18fb7e1c0cab5"><div class="sl-block-content fragment visible" style="z-index: 13;" data-fragment-index="0"><img data-natural-width="2500" data-natural-height="683" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654894/Screenshot_2019-10-15_at_09.54.21.png"></div></div>

<br>

### `globalThis`

![globalThis snippet](https://user-images.githubusercontent.com/52913438/67461395-879a8700-f63d-11e9-9780-ecd9fad9dd06.png)

<div class="sl-block is-focused" data-block-type="image" data-origin-id="473cde686ab16e3855675088f72d6d72"><div class="sl-block-content fragment visible" style="z-index: 17;" data-fragment-index="5"><img data-natural-width="2500" data-natural-height="552" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654903/Screenshot_2019-10-15_at_09.54.53.png"></div></div>

<br>

### `String.trimStart` & `String.trimEnd`

![trimStart snippet](https://user-images.githubusercontent.com/52913438/67461520-d34d3080-f63d-11e9-8947-352b5942e528.png)

<div class="sl-block is-focused" data-block-type="image" data-origin-id="4682964b8787c12240241a8731b55614"><div class="sl-block-content fragment visible" style="z-index: 13;" data-fragment-index="0"><img data-natural-width="2500" data-natural-height="551" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654914/Screenshot_2019-10-15_at_09.55.27.png"></div></div>

<br >

### `Promise.allSettled`

![Promise.allSettled snippet](https://user-images.githubusercontent.com/52913438/67461643-160f0880-f63e-11e9-91d8-bb2a80d658d7.png)

<div class="sl-block is-focused" data-block-type="image" data-origin-id="4105a570e4ff2b6ac5591a73c578e76b"><div class="sl-block-content fragment visible" style="z-index: 13;" data-fragment-index="0"><img data-natural-width="2500" data-natural-height="608" data-lazy-loaded="" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/6654917/Screenshot_2019-10-15_at_09.56.01.png"></div></div>

<br>

## Stage 3 features

Stage 3 features won't get released in the near future, but some of them are so cool that it's worth mentioning them.  
I won't mention their browser support though, as it's not relevant.

<br>

### Optional chaining

This one might be my favorites, bye bye `user && user.name` !

![Optional chaining snippet](https://user-images.githubusercontent.com/52913438/67461783-743beb80-f63e-11e9-996d-2b58fbb88b1a.png)

<br>

### Nullish Coalescing

Do you know how Javascript can be weird sometimes? Like how it considers `0` to be a falsy value? Well...

![Nullish Coalescing snippet](https://user-images.githubusercontent.com/52913438/67473055-57111800-f652-11e9-93d9-6be06c9b1dde.png)

<br>

Did you learn anything new? What feature excites you the most? I'd love to here your thoughts either here or on Twitter [@christo_kade](https://twitter.com/christo_kade) !
