---
title: "The dangers of async/await "
date: "2020-01-16"
description: "Pretty, but dangerous."
slug: "/posts/async-await"
isPublished: true
---

After a few months consulting on the rewriting of a large-scale application, I've come to realize that `async`/`await` was used de facto for most asynchronous operation. For example, consider this Vue code snippet:

```javascript
 async initStore(query) {
    await this.getConfig();
    await this.getUser();
    await this.checkRussianContext(query);

    await this.getBasket(this.$store.state.config.selectedCurrency),

    await this.$store.dispatch('options/fetchOptions', {
      basket : this.$store.state.basket,
    });
 },
```

Here, each line of code is executed **when its predecessor is completed**. Meaning `getUser` will wait for `getConfig` to finish fetching data before being executed.  
Here are a few points that come to mind when seeing this snippet:

- What if one line does not need data from the previous one? Why block its execution and slow down our application?
- Could we run unrelated methods in parallel using something like `Promise.all`?
- Related methods should probably be using a `then` block to avoid blocking the rest of the method

The point this article will be to help you catch this [code smell](https://en.wikipedia.org/wiki/Code_smell) by showing you that using `async`/`await` by default in some cases can have a drastic impact on performance and UX.

## Unrelated queries should be executed in parallel

Let's see some concrete data, shall we?

Here's the code snippet we'll be analyzing:

```javascript
const getUserData = async () => {
  // Get a random dog as our user's avatar
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const { message } = await res.json();

  // Get our user's general data
  const user = await fetch("https://randomuser.me/api/");
  const { results } = await user.json();

  // ...
};
```

Running this snippet 100 times on fast 3G (using Chrome's dev tools), the average execution time is **1231.10ms**.

But why block the second query when it doesn't need the result of the first? Let's change our code to the following and re-run it 100 times.

```javascript
const getUserDataFaster = async () => {
  // Execute both requests in parallel
  const [res, user] = await Promise.all([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://randomuser.me/api/"),
  ]);
  const [{ message }, { results }] = await Promise.all([
    res.json(),
    user.json(),
  ]);

  // ...
};
```

We now have an average execution time of **612.50ms**, half the time needed when both queries were executed one after the other.

The point is: if you can execute time-consuming queries in parallel, do it.

Try it out yourself on this [codepen](https://codepen.io/christopherkade/pen/bGNjMeP?editors=1010).

## Unrelated code should not have to wait

Let's take my first example but with a twist:

```javascript
 async initStore(query) {
   await Promise.all([
     await this.getConfig(),
     await this.getUser(),
     await this.checkRussianContext(query)
   ])

   await this.getBasket(this.$store.state.config.selectedCurrency),

   await this.$store.dispatch('options/fetchOptions', {
     basket : this.$store.state.basket,
   });

   await initBooking()
 },
```

Here, the first 3 requests are executed in parallel, whereas the next ones rely on data fetched beforehand and will therefore be executed afterwards. Although this snippet poses a problem, did you spot it?

Poor little `initBooking` will have to wait for both `getBasket` and `fetchOptions` to finish before executing even though it has nothing to do with the data they'll fetch.  
An easy solution is to trade the `await` with a simple `then` block.

```javascript
  async initStore(query) {
    await Promise.all([
      await this.getConfig(),
      await this.getUser(),
      await this.checkRussianContext(query)
    ])

    this.getBasket(this.$store.state.config.selectedCurrency).then(async () => {
      await this.$store.dispatch('options/fetchOptions', {
        basket : this.$store.state.basket,
      });
    })

   await initBooking()
 },
```

This way, both `getBasket` and `initBooking` will be executed alongside one another.

Want to see it for yourself? Check out this [codepen](https://codepen.io/christopherkade/pen/BayOZqV?editors=0010) illustrating my example.

I'll stop the article there so I don't overload you with examples, but you should get the gist of it by now.

`async`/`await` are wonderful additions to the Javascript language but I hope you'll now ask yourself twice before using them !

Thank you for reading, I'd love it if you gave me a follow on Twitter [@christo_kade](https://twitter.com/christo_kade), this way we'll get to share our mutual skepticism towards `awaits` ❤️
