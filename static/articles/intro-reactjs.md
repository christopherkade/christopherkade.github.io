# Discovering React - The basics

As much as I love the ever-evolving world of web development, I have not taken full advantage of it by discovering two major libraries/frameworks, namely [ReactJS](https://reactjs.org/) and [VueJS](https://vuejs.org/).

I have stuck to Angular for many reasons, one of them being expertise and another comfort. Angular being somewhat opinionated actually made my development process more enjoyable, and seeing that ReactJS is a library that offers many ways to produce one results, I did not feel the need nor the curiosity to delve deeper into it.

But that has changed, as I truly want to have as many tools as I can on my belt, and feel the need to actually start discovering this extremely popular library. This blog post serves as documentation for my progress, but may help some people to have an approachable structure if they find themselves in a similar situation.

## Installation

I always love this part, so let's head to React's [installation guidelines](https://reactjs.org/docs/installation.html) and get started.

We're creating an application from scratch, so we'll use the convenient `create-react-app` package. Since we are using `npm` 5.2.0+, we will use `npx`, which will install create-react-app and execute it:

```bash
npx create-react-app my-app
```

What does `create-react-app` do?  
_It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production._

Great, we now have generated a boilerplate React project, let's try it out:

```bash
cd my-app
npm start
```

Which opens up my browser to display:

![react](https://user-images.githubusercontent.com/15229355/32899842-efd05c0a-cae3-11e7-8187-759c55cd10fd.png)

## Learning the basics

### JSX

React uses the Javascript syntax extension called **JSX**, it produces React elements and can embed any Javascript expression when wrapped in curly braces.

The example given illustrates it rather well:

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

// JSX element with embedded Javascript
const element = <h1>Hello, {formatName(user)}!</h1>

ReactDOM.render(element, document.getElementById('root'))
```

After compilation, JSX becomes regular Javascript objects, therefore we can use it "inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions" like such:

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
```

Now that's pretty cool, I can already see many use cases where JSX would have been useful in my previous projects.

### Elements

The concept is very simple to understand, an element defines what we want to see on our screen, just like the one we have defined previously.

To render an element into the DOM, React uses a **root** DOM node, and will manage every element inside said node.

For example:

```javascript
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```

Simply renders "Hello, world" on the page.

One thing to remember is that elements are **immutable**, once created, we can't change its children or attributes and the only way to update the UI is to create a new element and pass it to `ReactDOM.render()`.

Check out this [Codepen example](https://codepen.io/gaearon/pen/gwoJZk?editors=0010) given by the tutorial.

### Components

React defines components as a way to "split the UI into independent, reusable pieces, and think about each piece in isolation.".

Angular offers the component feature, so this shouldn't be too hard to understand and apply.

The easiest way to define a component is using a Javascript function:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

But we can also use an ES6 class:

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

We can render a component through elements like such:

```javascript
// props is an arbitrary input that was set in our element
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// Notice 'name="Sara"' which gives value to our prop
const element = <Welcome name="Sara" />
ReactDOM.render(element, document.getElementById('root'))
```

This allows reusability when extracting components.

Lastly, something to keep in mind:

> All React components must act like pure functions with respect to their props.

### States

In React, states are similar to props but are private and fully controlled by the component, but **they may only be used by components defined in a class** (as opposed to a function).

Here is how we can define a state:

```javascript
class Clock extends React.Component {
  // Declare a class constructor and pass props to it
  // Don't forget to call the base constructor with super(props)
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  // Call this.state to access state data
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

// No need to pass any props to our component since we are using states
ReactDOM.render(<Clock />, document.getElementById('root'))
```

In order to update a state's value, we may use the following method from within our component (**and only this method**, states may not be accessed directly outside the contructor):

```javascript
this.setState({
  date: new Date()
})
```

### Lifecycle

It is essential to free up resources when components are destroyed, let's check out how we can do exactly that using React.

**Mounting** is when a component in rendered in the DOM for the first time.  
**Unmounting** is when the DOM produced by our component is removed.

The respective methods (known as _lifecycle hooks_) in React are as follows:

```javascript
componentDidMount() {

}

componentWillUnmount() {

}
```

They are called automatically when the conditions written previously are met.  
As simple as it gets !

### Events

Event handling in React is very simple.

```javascript
<button onClick={activateLasers}>Activate Lasers</button>
```

This example shows two important things:

- React events use camelCase rather than lowercase (`onClick`).
- With JSX we pass a function rather than a string to our event handler (`{activateLasers}`).

Normally, I should bind my methods called by event handlers, otherwise `this` would be undefined. But we can avoid all of that hassle by using the `public class fields syntax` like such:

```javascript
class Button extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}
```

Otherwise, we would have to do the following in our constructor:

```javascript
constructor(props) {
   super(props);
   this.state = {isToggleOn: true};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
 }
```

Even though it is experimental, I will lean towards the first option for now as it is enabled with the `Create React App` package we used earlier.

In order to pass arguments to an event handler, we must do the following:

```javascript
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

Where the second argument will always be the synthetic event.

### Conditional Rendering

Where Angular uses `*ngIf`, React seems to offer something that fits its components design.

A basic example would be:

```javascript
class Greet extends Component {
  // Set our boolean as a state variable
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  render() {
    // If true display one component, otherwise display the other
    if (this.state.isLoggedIn) {
      return <UserGreeting />
    } else {
      return <GuestGreeting />
    }
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

ReactDOM.render(<Greet />, document.getElementById('root'))
```

Note that there are other ways to evaluate component's rendering such as with **inline If with logical && operator** or **inline If-Else with conditional operator**.

If we wish to prevent a component from rendering, all we have to do is return `null`.

### Lists and Keys

Where Angular uses `*ngFor`, React uses the `map` function to generate multiple elements. For example:

```javascript
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => <li>{number}</li>)
```

> **Keys** help React identify which items have changed, are added, or are removed.

We should give them to the elements inside the array to give them a stabe identity. For example:

```javascript
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => (
  <li key={number.toString()}>{number}</li>
))
```

> A good rule of thumb is that elements inside the map() call need keys.

## Thoughts so far

React's concepts seem somewhat odd and will take time to get accustomed to, but it seems worth it as there are many advantages in their design.

We haven't seen everything that React has to offer, we still need to go through some notions such as **forms** and **lifting state up**. I will try to document them very soon.

Thanks for reading,  
[@christo_kade](https://twitter.com/christo_kade)
