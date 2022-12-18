---
title: "Styled components: what, why and how?"
description: "A great way of styling your React projects."
date: "2019-05-14"
path: "/styled-components"
---

---

title: "Styled components: what, why and how?"
description: "A great way of styling your React projects."
date: "2019-05-14"
slug: "/posts/styled-components"
isPublished: true
category: "React"
tags:

- "React"
- "Javascript"
  template: "post"

---

[Styled Components](https://www.styled-components.com/) are a way of styling your React components using CSS **and** the advantages offered by ES6, they are best explained by the official docs:

> Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

### Here's what we'll cover today:

- [What are styled components?](#introduction)
- [Advantages](#advantages)
- [Disadvantages](#disadvantages)
- [A concrete exercise](#example)
- [Good documentation](#documentation)

<br><br>

## <a name="introduction"></a> What are styled components?

Here's an example of a styled component:

```jsx
import styled from "styled-components";

// Creates a StyledButton component of a button with the given style
const StyledButton = styled.button`
  background-color: #710504;
  color: #ffc700;
  border: 2px solid #6a686a;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

// StyledButton can now be used like any other component
const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
```

As you can see, they are React components like the one's you've known until now. They are created by calling `styled` and invoking a method with the name of the HTML tag you wish to use while passing it its styles. Here's a [full list](https://github.com/styled-components/styled-components/blob/v3.3.3/src/utils/domElements.js#L4) of the available tags).

> `styled.button` is just a shortcut for `styled('button')`, this is an ES6 feature called [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) 😄

One of the best things about styled components is the fact that you can adapt your styles based on your component's props, for example:

```jsx
// https://www.styled-components.com/docs/basics#adapting-based-on-props

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

<br><br>

## <a name="advantages"></a> Advantages

<br>

### Reusable components

Styled components allow us to create components that are extremely easy to reuse as they directly contain their style values.

So the following JSX:

```jsx
<h1 className="title">Christopher Kade</h1>
```

Can be translated in the following component:

```jsx
const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;
```

And can be used like so:

```jsx
<Title>Christopher Kade</Title>
```

Which removes the need for a mapping between components and their respective CSS and making style an integral part of each component.

<br>

### Scoped styles

CSS is global by nature, David Khourshid puts it really well:

> You ever stop and think about why CSS has a global scope? Maybe we want to use consistent typography, colors, sizing, spacing, layout, transitions, etc. and have our websites & apps feel like one cohesive unit?

And yet its very nature is something that is often disliked by many people, as changing a value somewhere can "break" something elsewhere. That's where CSS scoping comes into play.

CSS scoping allows us to avoid these issues by limiting the impact of CSS to its component, and styled components are no exception.

Scoped styles make maintenance painless, where you won't have to hunt across multiple files for that one piece of CSS that's messing up your view.

<br>

### Easily create dynamic CSS

I already mentioned how styled components allow you to use a component's props to dynamically set style values.

For example, I'm currently working on a [side project](https://christopherkade.com/ReactCraft) where I'm building a component library based on World of Warcraft's UI, I have a `ProgressBar` component with a default size and a percent of completion that can be changed with a prop, like so:

```jsx
<ProgressBar text="Loading..." percent={25} width={500} />
```

I would then set the bar's size and advancement in styled components like so:

```jsx
// Set the bar's width based on the width prop
const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  // ...
`;

// Set the bar's advancement based on the percent prop
const Bar = styled.div`
  width: ${(props) => props.percent}%;
  // ...
`;

const Label = styled.span`
  // ...
`;

const ProgressBar = ({ width, text, percent }) => {
  return (
    <Wrapper width={width}>
      <Label>{text}</Label>
      <Bar percent={percent} />
    </Wrapper>
  );
};
```

<br>

### Support for server-side rendering

SSR is widely used, especially thanks to tools such as [Next](https://nextjs.org/), [Gatsby](https://www.gatsbyjs.org/) or [Nuxt](https://nuxtjs.org/) so the styled components team made sure to support this feature with a concept called stylesheet rehydration.

> The basic idea is that everytime you render your app on the server, you can create a ServerStyleSheet and add a provider to your React tree, that accepts styles via a context API.

> This doesn't interfere with global styles, such as keyframes or createGlobalStyle and allows you to use styled-components with React DOM's various SSR APIs.

More information on the [official docs](https://www.styled-components.com/docs/advanced/#server-side-rendering).

<br>

### Performance improvements

Styled components keep track of which components are rendered on a given page and inject their styles and **nothing else**. This means your user loads the least amount of styles necessary for a given component.

<br>

### Other advantages

Other advantages include native mobile support and unit/snapshot testing tools but I believe these three might be the most essential to keep in mind.

<br><br>

## <a name="disadvantages"></a> Disadvantages

<br>

### Learning curve

Styled components take some time to get used to, their syntax and the new way of thinking they introduce will require some patience but the payoff is worth it in my opinion.

<br>

### A smaller community

At the time of writing this article, the styled components repository has 23k ⭐on [Github](https://github.com/styled-components/styled-components). Despite that, getting fast support may be tough some times. Although I haven't truly encountered situations where I could not find any solutions to a given problem.

<br>

### Longevity

Just like any tool in the JS ecosystem, styled components may disappear one day, which would involve refactoring your code base. So it's important to keep that in mind before committing to it in production.

<br><br>

## <a name="example"></a> A concrete exercise

> Note: In order to do this exercise, you will need a good grasp of both CSS and React.

Alright, let's get our hands dirty.

Open up [codesandbox](https://codesandbox.io/s/), select the `create-react-app` starter and import the `styled-components` dependency.

We'll create a very simple layout displaying a navbar and cards, each step of the exercise will be composed of a component to create (with its associated styled components). Try to code them from scratch and once you are done (or end up stuck), feel free to click on the "Result" buttons to see the resulting code !

<div style="display: flex; align-items: center; justify-content: center">
<img width="50%" alt="" src="https://user-images.githubusercontent.com/15229355/57724548-5465cc00-768b-11e9-8425-b09cdf8d9d4e.png">
</div>

The resulting code can be found [here](https://codesandbox.io/s/7k93lz791j).

<br>

### 1. The Navbar component

This component will simply contain 3 links on its right and be displayed at the top of our view.

Start by creating a `Navbar.js` file under `/src/components/`.
Import both react and styled from `React` and `styled-components` respectively. Finally, create and export a `Navbar` component that doesn't return anything yet.

<details>
  <summary>Result</summary>

```jsx
// Navbar.js

import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (

  );
};

export default Navbar;
```

</details>

We now want to create a `Wrapper` styled component that will wrap around our links. Make sure to set its styles, including `flexbox` in order to align your items at the end of the container.  
Finally, make sure that your `Navbar` component returns the `Wrapper`.

<details>
  <summary>Result</summary>

```jsx
// Navbar.js

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #424651;
  height: 3rem;
`;

const Navbar = () => {
  return <Wrapper></Wrapper>;
};

export default Navbar;
```

</details>

Next up, we want to create a styled component that will take care of displaying our links. Create `NavbarItem` using the `a` tag, don't forget to set its `:hover` style !

<details>
  <summary>Result</summary>

```jsx
// Navbar.js

// ...

const NavbarItem = styled.a`
  font-size: 1rem;
  margin-right: 1rem;
  color: white;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </Wrapper>
  );
};

//...
```

</details>

Alright ! You've created the `Navbar` component from scratch, the thought process behind styled components may seem a bit hard to grasp at first, but it'll get more and more intuitive after each step.

Let's now create our card-related elements 😃

<br>

### 2. The CardList component

Let's create a `CardList` component that will contain our cards.

`CardList` will take the form of a simple `Wrapper` component and will `.map` through a list of data (you may use a `.json` file containing an array of blog posts for example) and render each card.

Start by creating the `CardList` component returning a `Wrapper` styled component, don't forget to use `flexbox` to have a nice layout.

<details>
  <summary>Result</summary>

```jsx
// CardList.js
import React from "react";
import styled from "styled-components";

import data from "../data";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = () => {
  return <Wrapper></Wrapper>;
};

export default CardList;
```

</details>

We'll come back to this component once our `Card` component is done.

<br>

### 3. The Card component

The `Card` component will receive props in the form of its title and description and will be composed of 3 styled components: `Title`, `Description` and a `Wrapper`.

Go ahead and create it, giving it any style you want. I personally made sure to use `flexbox` for my wrapper in order to display each card's content as a column. 🤷‍♂️

<details>
<summary>Result</summary>

```jsx
// Card.js
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: white;
`;

const Description = styled.p`
  color: white;
`;

const Card = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Card;
```

</details>

Let's now go back to `CardList` and make sure to render our newly created component through a `.map` of our data.

<details>
<summary>Result</summary>

```jsx
// CardList.js

// ...

// data is simply an imported .json file containing an "articles" array
const CardList = () => {
  return (
    <>
      <Wrapper>
        {data.articles.map((article) => (
          <Card title={article.title} description={article.description} />
        ))}
      </Wrapper>
    </>
  );
};
// ...
```

</details>

<br>

### Bonus: using styled-component's dynamic styling

To go a bit further, let's create a `Title` styled component that will be used in both our `Card` and `CardList` components. For example, we could display the article's title in the former and "List of articles" in the latter using the same component !  
But there's a twist: it should be displayed in white in our cards and black in our card list.

Hint: use props to conditionally set our color in the `Title` styled component !

<details>
  <summary>Result</summary>

```jsx
// Title.js
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: ${(props) => (props.main ? "black" : "white")};
`;

export default Title;
```

```jsx
// CardList.js

// ...
const CardList = () => {
  return (
    <>
      <Title main>List of articles</Title>
      <Wrapper>
        {data.articles.map((article) => (
          <Card title={article.title} description={article.description} />
        ))}
      </Wrapper>
    </>
  );
};

// ...
```

</details>

<br>

Congratulations, you've created a layout using styled components ! 🎉

<br><br>

## <a name="documentation"></a> Good documentation

If you want to learn how styled components work under the hood, you should definitely check out this article by Eugene Gluhotorenko: [link](https://medium.com/styled-components/how-styled-components-works-618a69970421).

This great introductory article by Robin Wieruch: [link](https://www.robinwieruch.de/react-styled-components/).

But of course, nothing beats the official documentation: [link](https://www.styled-components.com/docs).

<br><br>

## Wrapping up

I've been increasingly using styled components in my React projects and have found them super intuitive and elegant. I hope this article will push some of you to start using them 😄

As usual, if you have any questions or just want to chat about JS & CSS feel free to hit me up on Twitter [@christo_kade](https://twitter.com/christo_kade) !
