---
title: "Introduction to React Hooks"
description: "From class to functional components."
date: "2019-05-04"
slug: "/posts/react-hooks"
isPublished: true
category: "React"
tags:
  - "React"
  - "Javascript"
template: "post"
---

React Hooks have been on everyone's mind for a while now, and now that the hype has died down, I thought it would be nice to write a short introduction on them and go through concrete use-cases.

React Hooks have been introduced with React version 16.8, they allow us to use features that were once reserved to class components (such as internal state, lifecycle hooks etc.) in functional components.

This is great, as writing functional components is often preferred by the community as they offer advantages, namely: code that is easier to read and maintain, easier to test and often following better practices. For example, it's easier to create presentational, container and business logic **functional** components than it is using a class-based components.

**Today, we'll only cover two of the most used hooks: `useState` and `useEffect`.**

> Make sure you have a grasp of React's fundamentals to take full advantage of this lesson, especially the concept of internal state and lifecycle hooks.

To follow along, feel free to clone the following [repository](https://github.com/christopherkade/hooks-example) where we'll transform class components into functional components using these two hooks. These components can be found under `/components/ExampleUS` and `/components/ExampleUE`.

<br>
<br>

## useState

Alright, we have the following class-based component:

```javascript
class ExampleUS extends React.Component {
  state = {
    value: "",
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <article>
        <h1>useState example</h1>

        <input type="text" value={this.state.value} onChange={this.onChange} />

        <p>Value: {this.state.value}</p>
      </article>
    );
  }
}
```

All it does is allow the user to input something, which is saved in the components internal state and displayed bellow, like so:

<div style="display: flex; align-items: center; justify-content: center">
<img width="50%" alt="render of the component mentioned" src="https://user-images.githubusercontent.com/15229355/57177519-cb69bc00-6e64-11e9-9871-5cf31f4c874e.png">
</div>

This component requires an **internal state**, so using a class-based approach made sense before 16.8, but the `useState` hook will allow us to transform it into its functional counterpart.

<br>

### useState syntax

The `useState` syntax is very easy to grasp:

```js
const [value, setValue] = useState("");
```

Where `value` is the variable to which we will bind the state, `setState` is the method to be called to update it and the parameter passed to `useState` is the state's default value. Pretty easy, right?

<br>

### Transforming the component

Going from a class component to a functional one will take 2 easy steps:

1. First, we change the declaration of the component into a functional one

```js
// Changed the declaration of the component
const ExampleUS = () => {
  state = {
    value: "",
  };

  // onChange is now assigned to a constant variable
  const onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  // Removed the render method,
  // Functional components directly return the JSX to be rendered
  return (
    <article>
      <h1>useState example</h1>
      <input type="text" value={this.state.value} onChange={this.onChange} />
      <p>Value: {this.state.value}</p>
    </article>
  );
};
```

2. Let's now remove all traces of the class' context (this) and state

```js
const ExampleUS = () => {
  // Removed the state declaration

  // Removed the call to this.setState()
  const onChange = (event) => {};

  // Removed all calls to the context
  return (
    <article>
      <h1>useState example</h1>
      <input type="text" onChange={onChange} />
      <p>Value:</p>
    </article>
  );
};
```

<br>

### The final result

Alright, we can now use `useState` with the syntax mentioned before to create an internal state.

Here's what the final component looks like (don't forget to import the hook):

```js
import React, { useState } from "react";

const ExampleUS = () => {
  // We declare the state and the method to update it
  const [value, setValue] = useState("");

  // On input, call setValue with the new state value
  const onChange = (event) => {
    setValue(event.target.value);
  };

  // Bind the input to the state value and display it
  return (
    <article>
      <h1>useState example</h1>
      <input type="text" value={value} onChange={onChange} />
      <p>Value: {value}</p>
    </article>
  );
};
```

<br>
<br>

## useEffect

For this example, we have the following component:

```js
class ExampleUE extends React.Component {
  state = {
    url: "",
  };

  /**
   * Fetch a random dog photo and save its URL in our state
   */
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          url: data.message,
        })
      );
  }

  render() {
    return (
      <article>
        <h1>useEffect example</h1>
        <img src={this.state.url} alt="dog picture" />
      </article>
    );
  }
}
```

Where, on mount, we fetch a picture, save it in the internal state and display it, it looks something like this:

<div style="display: flex; align-items: center; justify-content: center">
<img width="50%" alt="render of the component mentioned" src="https://user-images.githubusercontent.com/15229355/57177873-0110a400-6e69-11e9-820e-727f47c5192d.png">
</div>

The focal point being the lifecycle hook `componentDidMount` that is called whenever the component is mounted (meaning whenever it is inserted into the DOM tree). We will use the `useEffect` hook to do the exact same thing but in a functional component.

<br>

### useEffect syntax

Once again, this hook's syntax is easy to understand and use:

```js
useEffect(() => {
  // ...
});
```

It takes as its first parameter a callback that will be triggered **each time the component is rendered**.

But in our case, we only wish to trigger it once, when the component is mounted, right?  
To do so, we can pass `useEffect` a second parameter, an array of variables that will trigger the callback only when they are modified (instead of triggering it at every render of the component). We can also pass an empty array (`[]`) to tell the callback to be triggered only on mount and dismount of the component, making it look like so:

```js
useEffect(() => {
  // ...
}, []);
```

<br>

### Transforming the component

We'll skip this part, as it doesn't change much from the previous iteration.

<br>

### The final result

```js
// Don't forget to import both hooks
import React, { useState, useEffect } from "react";

const ExampleUE = () => {
  const [url, setUrl] = useState("");

  // On component mount, the callback is called
  // Fetch retrieves a picture and saves it in our internal state
  // The second parameter tells useEffect
  // to only be triggered on mount and dismount
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setUrl(data.message));
  }, []);

  return (
    <article>
      <h1>useEffect example</h1>
      <img src={url} alt="dog picture" />
    </article>
  );
};
```

<br>
<br>

## Wrapping up

React Hooks are a great addition to the library, they provide considerable advantages and make the developer experience much smoother.  
One important thing to note is that there are [many](https://reactjs.org/docs/hooks-reference.html) other hooks, some more used than others and I invite you to read up on the official documentation as it is very well produced.

Other references include:

- Robin Wieruch's ["How to fetch data with React Hooks?"](https://www.robinwieruch.de/react-hooks-fetch-data/)
- Matthieu Lux's ["React Hooks, my introduction"](https://medium.zenika.com/react-hooks-my-introduction-81b15e6eff20)

Thank you for reading, if you've learned something feel free to follow me on Twitter [@christo_kade](https://twitter.com/christo_kade) as I'll share all my new blog posts about React, Vue and the JS ecosystem as a whole ❤️
