---
title: "Writing elegant and resilient UI components"
date: "2019-08-06"
description: ""
slug: "/posts/elegant-components"
isPublished: true
---

As a Front-end developer, building resilient and reusable components is a top priority of mine, and there are so many arguments in favor of well thought out components.

Thankfully, most of today's UI libraries and frameworks go a long way to help you build the best components possible for your projects (and more importantly, for your team). Nevertheless, keeping a few guidelines in mind can help us avoid pitfalls, especially when it comes to large-scale applications.

In this article, we'll go through concepts I follow everyday that are **library and framework agnostic**, meaning they apply to UI components as a whole.

1. [Have a modular approach](#have-a-modular-approach)
2. [Name your components well](#name-your-components-well)
3. [Keep your props simple](#keep-your-props-simple)
4. [Keep your business logic in container components](#keep-your-business-logic-in-container-components)

## Have a modular approach

![](https://thepracticaldev.s3.amazonaws.com/i/4qcceiqmxrsbh9tfewod.png)

Ideally, your components should follow the [FIRST](https://addyosmani.com/first/) principle:

- **F**ocused: one component, one responsibility, if a component is doing too much, ask yourself if you can extract that logic somewhere.
- **I**ndependent: ideally, a component should not depend on another one to function. Passing simple and straight to the point props can help you create independent elements. If you've ever used [Storybook](https://storybook.js.org), think of it that way: _Can I extract this component into a story easily?_.
- **R**eusable: UI components are lego bricks, they should fit anywhere pretty easily. Once again, a component's reusability is often determine by the simplicity of its props (more on that topic later).
- **S**mall: I was horrified to see components reaching the 1000 lines mark on a project I'm currently consulting on. Keep 👏 them 👏 small. A small component can be read and explained easily and is simpler to test.
- **T**estable: _How much mocking is required to test this component?_ is usually a good question to ask yourself, complex components will require a complex context to mock beforehand. Keeping in mind that the easiest components to test are known as _pure components_, meaning that for a given input, the component will always render the same output, produces **no side effects** and relies on no external mutable states.

Of course, you'll be working on elements that are truly dependant on your business logic, meaning you probably won't be able to follow these guidelines completely, **and that's okay**. Some components aren't meant to be reusable and some components won't be independent; but keeping this principle in mind is a good start.

## Name your components well

![](https://thepracticaldev.s3.amazonaws.com/i/ba521gikvx8pp7r0e9xx.png)

I tend to try and keep my component names **short**, **meaningful** and **easy to pronounce**.

Here are some good and bad examples:

```html
<!-- Good -->
<user-button></user-button>
<payment-details></payment-details>
<user-card></user-card>

<!-- Bad -->
<user-btn></user-btn>
<!-- hard to pronounce -->
<user-guarantee-payment-tab></user-guarantee-payment-tab>
<!-- too long -->
<ui-dropdown></ui-dropdown>
<!-- every component is a UI element, no need to mention it -->
```

## Keep your props simple

![](https://thepracticaldev.s3.amazonaws.com/i/8m2zuyuos3rungws1pmm.png)

As mentioned in the first tip, props can make or break a component.

- Avoid passing down complex object structures, favour individual attributes as props whenever possible
- Use simple names for your props. We should be able to understand its purpose (even partially) upon reading it

Basically, **try using Javascript primitives** (strings, numbers, booleans) and functions as props whenever possible.

## Keep your business logic in container components

![](https://thepracticaldev.s3.amazonaws.com/i/6vnhey8xbr6upppmvs2h.png)

**Container components** (such as layouts) should take care of computation and business logic as a whole in order to pass its results as props to **presentational components**.

> This pattern isn't always valid, but the idea it promotes is important to keep in mind: complex and stateful logic is easier to maintain when kept separate. In the case of a React application for example, this business logic can be extracted in a custom hook, so this "smart/dumb" component pattern really is about separation of concern.

Often times, having each component handle their own logic can lead to them being hard to re-use throughout your application as they will be bound to a specific context.

## Don't overdo it

These are just general tips for building efficient components. Of course, each project has different requirements and may not allow for you to follow these guidelines all the time.

As Dan Abramov says in his [Writing Resilient Components](https://overreacted.io/writing-resilient-components/) article: _Don’t Get Distracted by Imaginary Problems_. Keep in mind that it's not worth it to over-engineer all of your components and to enforce rules that may not bring meaningful differences.

I hope this short list will help some of you build better UI components in your day-to-day. As always, if you have any questions, tweet at me [@christo_kade](http://twitter.com/christo_kade) ❤️
