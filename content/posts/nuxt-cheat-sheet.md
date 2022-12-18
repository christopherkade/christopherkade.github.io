---
title: "Nuxt.js cheat sheet"
description: "Nuxt.js development made easier."
date: "2019-05-21"
slug: "/posts/nuxt-cheat-sheet"
isPublished: true
category: "Vue"
tags:
  - "Vue"
  - "Javascript"
template: "post"
---

<br>

[Nuxt.js](https://nuxtjs.org/) is here to make your life easy, it's also here to make the Vue.js development process even nicer than it already is. But with all its good aspects, it has quirks that will have you click on every single link on Google.

This article is here to avoid these situations, it'll cover some normal use-cases and some edge-cases with quick and easy code snippets. It won't go into extreme detail on these matters, but will give you the documentation necessary to do so in case you want to.

> Note: You'll need a good grasp of Vue.js concepts to take full advantage of this article !

Before we get into anything concrete, let me explain what Nuxt.js is.

## What's Nuxt.js?

Nuxt.js is a framework based on [Vue.js](https://vuejs.org/) that allows you to build fully fledged [**server-rendered**](https://youtu.be/GQzn7XRdzxY?t=46) applications.

It comes out of the box with **loads** of useful packages:

- 💻 Vue
- ↩️ Vue Router (for easy routing)
- 💾 Vuex (for easy state management)
- 🏎 Vue Server Renderer (for server-side rendering out of the box)
- 🕵️‍♂️ Vue meta (for SEO)

Here's a list of what we'll cover (feel free to come back here if you're searching for something specific):

### General

- [Creating a Nuxt.js project](#creating-a-nuxtjs-project)
- [Testing with Nuxt.js](#testing-with-nuxtjs)

### Routing

- [Creating a new route](#creating-a-new-route)
- [Creating dynamic routes](#creating-dynamic-routes)
- [Navigating to a route in a component template](#navigating-to-a-route-in-a-component-template)
- [Navigating to a route programatically](#navigating-to-a-route-programatically)

### State management

- [Creating a new store module](#updating-a-store-before-rendering-a-component)
- [Updating a store before rendering a component](#updating-a-store-before-rendering-a-component)

### SEO

- [Changing a page's head properties dynamically](#changing-a-pages-head-properties-dynamically)
- [SSR for dynamic routes](#ssr-for-dynamic-routes)

### Miscellaneous

- [Displaying a fixed component throughout your app](#displaying-a-fixed-component-throughout-your-app)
- [Changing a project's router base](#changing-a-projects-router-base)
- [Handling internationalization (i18n)](#handling-internationalization-i18n)
- [Importing a font to your project](#importing-a-font-to-your-project)

> If you have any other requests or want to add anything new, please feel free to hit me up on Twitter [@christo_kade](https://twitter.com/christo_kadehttps://twitter.com/christo_kade) !

## Creating a Nuxt.js project

```bash
yarn create nuxt-app <project-name>
```

Which will prompt you to answer some questions, including:

- Choose between integrated server-side frameworks (None by default, Express, Koa etc.)
- Choose features to install (PWA Support, Linter / Formatter, Prettier, Axios)
- Choose your favorite UI framework (None by default, Bootstrap, Vuetify, Bulma etc.)
- Choose your favorite testing framework (None, Jest, AVA)
- The Nuxt mode you want (Universal or SPA, [more information](https://nuxtjs.org/guide#server-rendered-universal-ssr-))

Once done and your dependencies are installed:

```bash
$ cd <project-name>
$ yarn dev
```

<br>

[Documentation](https://nuxtjs.org/guide/installation)

## Testing with Nuxt.js

The majority of your testing syntax will depend on the testing framework chosen during the project's creation.  
Out of the box, Nuxt uses the `@vue/test-utils` package to render your components thanks to multiple methods such as `mount()`, `shallowMount()` and `render()`. You'll then be able to test that specific values have been displayed, that specific methods were called etc.

Nuxt will also make sure to set everything up for you, all you'll have to do is create your `*.spec.js` or `*.test.js` files and run the `yarn test` command.

Here's a classic (and brief) example of unit testing for a Vue component in a Nuxt project:

```js
import { shallowMount } from "@vue/test-utils";
import cmp from "~/components/navbar/navbar";

// Mocking an icon displayed in my navbar
jest.mock("~/static/icons/svg/icon-menu.svg", () => "");

describe("Navbar component", () => {
  // We shallow mount the component while mocking some internal elements
  // Most of the time, you'll have to mock context objects such as $store or $route in order to render your component whithout any errors
  const wrapper = shallowMount(cmp, {
    // Stubbing nuxt-links in the navbar
    stubs: ["nuxt-link"],
    mocks: {
      "nuxt-Link": true,
      // Mocking the $store context object
      $store: {
        state: {
          locale: "en",
        },
      },
      // Mocking the $route context object
      $route: {
        path: "mockedPath",
      },
    },
  });

  it("Snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Components validation", () => {
    it("should return a valid component", () => {
      expect(wrapper.is(cmp)).toBe(true);
    });
  });

  describe("Content validation", () => {
    it("should render the link's name", () => {
      expect(wrapper.html()).toContain("About");
    });

    // ...
  });
});
```

<br>

[Documentation](https://vue-test-utils.vuejs.org/)

## Creating a new route

In the `/pages` folder, create a file, its name will be the name of the route.

So for example:

```jsx
// /pages/about.vue

<template>
  <main>
    <h1>About page</h1>
  <main/>
</template>

<script>
export default {}
</script>

<style></style>
```

Navigating to `localhost:3000/about` will display this component's content

<br>

[Documentation](https://nuxtjs.org/guide/views#pages)

## Creating dynamic routes

In the `/pages` folder, create a directory and a file prefixed by an underscore.

For example, the following file tree:

```bash
pages/
--| users/
-----| _id.vue
--| index.vue
```

Will automatically generate the following router inside the `.nuxt` folder whenever you build your project:

```js
router: {
  routes: [
    {
      name: "index",
      path: "/",
      component: "pages/index.vue",
    },
    {
      name: "users-id",
      path: "/users/:id?",
      component: "pages/users/_id.vue",
    },
  ];
}
```

You can now navigate to `/users/:id`, with `id` being whatever value you need it to be.

To retrieve this value in your `_id.vue` component, just do the following:

```js
// $route is a Nuxt context object, more info: https://nuxtjs.org/api/context
const { id } = this.$route.params;
```

<br>

[Documentation](https://nuxtjs.org/guide/routing#dynamic-routes), including nested routes and dynamic nested routes.

## Navigating to a route in a component template

Inside of any of your components:

```jsx
// /components/example.vue

// Clicking on this nuxt-link will navigate to the /pages/about.vue component
// nuxt-link renders an <a> tag in your HTML
<template>
  <section>
    <nuxt-link to="/about">About</nuxt-link>
  </section>
</template>

// ...
```

<br>

[Documentation](https://nuxtjs.org/api/components-nuxt-link#the-lt-nuxt-link-gt-component)

## Navigating to a route programatically

```js
// Will add a history entry to the stack
this.$router.push({
  path: "/about",
});

// Will not
this.$router.replace({
  path: "/about",
});

// Goes back one record
this.$router.go(-1);
```

<a name="new-store"></a>

## Creating a new store module

In the `/store` folder, each file is a Vuex module.

```javascript
// /store/todos.js
export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false,
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};
```

Each module's mutations, actions & states are now available using the context object `$store`:

```html
// /components/todo.vue
<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span>{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    computed: {
      todos() {
        return this.$store.state.todos.list; // highlight-line
      },
    },
    methods: {
      addTodo(e) {
        this.$store.commit("todos/add", e.target.value); // highlight-line
        e.target.value = "";
      },
      ...mapMutations({
        // highlight-line
        toggle: "todos/toggle", // highlight-line
      }), // highlight-line
    },
  };
</script>
```

<br>

[Documentation](https://nuxtjs.org/guide/vuex-store#codefund_ad)

## Updating a store before rendering a component

Sometimes you need to fill up a given state variable before rendering a component, here's how:

```jsx
// In any component

export default {
  // Called before rendering the component
  fetch({ store, params }) {
    return axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      store.commit("setDog", res.data.message);
    });
  },
};
```

> Warning: You don't have access of the component instance through `this` inside fetch because it is called before initiating the component ([read more](https://nuxtjs.org/api/pages-fetch)).

<br>

[Documentation](https://nuxtjs.org/api/pages-fetch#the-fetch-method)

## Changing a page's head properties dynamically

For SEO purposes, defining the page's title, description keywords etc. can be useful. Here's how you can do it programmatically:

```js
// In any component
export default {
  head: {
    title: "Page title",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Page description",
      },
    ],
    // ...
  },
};
```

> Info: To avoid duplicated meta tags when used in child component, set up an unique identifier with the hid key for your meta elements ([read more](https://nuxtjs.org/api/pages-head#the-head-method)).

<br>

[Documentation](https://nuxtjs.org/api/pages-fetch#the-fetch-method)

## SSR for dynamic routes

When running `nuxt generate`, the HTML file for your dynamic routes won't be generated by default.

For example, if you have an `about.vue` page and a `_id.vue` one, when running `nuxt generate`, the resulting `dist` folder will contain `/about/index.html` but won't generate anything for your dynamic `_id.vue`.

This can lead to your dynamic routes to be missed by crawlers, and therefore not referenced by search engines !

Here's how you can generate them automacially:

```js
// nuxt.config.js

module.exports = {
  // ...

  // dynamicRoutes could be a JSON file containing your dynamic routes
  // or could be retrieved automatically based on the content of your /pages folder
  generate: {
    routes: () => {
      return dynamicRoutes.map((route) => `/articles/${route}`);
    },
  },

  // ...
};
```

`nuxt generate` will now generate the HTML file for each dynamic route returned by the `generate` property.

<br>

[Documentation](https://nuxtjs.org/api/configuration-generate#the-generate-property)

## Displaying a fixed component throughout your app

Sometimes you need to add a navbar or a footer that will be displayed no matter the current route.

There's a `/layout` folder that contains `default.vue` by default. This layout holds the `<nuxt/>` component that takes care of rendering the content of each one of your pages (see [Creating a new route](#new-route)).

Simply modify that component to fit your needs, for example:

```html
<template>
  <div>
    <navbar />
    <nuxt />
    <footer />
  </div>
</template>

<script>
  import navbar from "~/components/navbar/navbar";
  import footer from "~/components/footer/footer";

  export default {
    components: {
      cmpNavbar,
      cmpFooter,
    },
  };
</script>
```

<br>

[Documentation](https://nuxtjs.org/guide/views#layouts)

## Changing a project's router base

In some cases, when for example you're deploying your project on Github Pages under `username/my-project`, you'll need to change the project's router base so that your assets are displayed correctly.

```js
// nuxt.config.js

// Will change the router base to /my-project/ when DEPLOY_ENV equals GH_PAGES
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/my-project/",
        },
      }
    : {
        router: {
          base: "/",
        },
      };

module.exports = {
  // ...
  routerBase,
  // ...
};
```

And don't forget to change your `package.json` so that `nuxt.config.js` knows when you're building or generating for Github Pages.

```js
// package.json

"scripts": {
  "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
  "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate"
},
```

## Handling internationalization (i18n)

Start by running `yarn add vue-i18n`

Create the following file:

```js
// /plugins/i18n.js

import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it globally in our components
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: "fr",
    messages: {
      // Add the supported languages here AND their associated content files
      en: require("~/static/json/data-en.json"),
      fr: require("~/static/json/data-fr.json"),
    },
  });
};
```

And add the following line in your `nuxt.config.js` to inform it we're using that plugin:

```js
module.exports = {
  // ...
  plugins: ["~/plugins/i18n.js"],
  // ...
};
```

In this example, the current locale is based on my store's content, which looks like so:

```js
export const state = () => ({
  locales: ["en", "fr"],
  locale: "fr",
});

export const mutations = {
  setLanguage(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
};
```

So whenever we call `setLanguage`, the locale is automatically updated and the correct JSON file is loaded ! ✨

Your file contents are now available throughout your application like so:

```js
// Here we access the 'users' array in our JSON file
this.$t("users");
```

<br>

[Documentation](https://nuxtjs.org/examples/i18n#codefund_ad)

## Importing a font to your project

```js
// nuxt.config.js

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    // ...
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato",
      },
    ],
  },

  // ...
};
```

## Wrapping up

Alright, I believe that's enough for one article. I've covered lots of use-cases which hopefully will be useful to some of you.  
If you have any questions or want to add anything to this article, feel free to message me on Twitter [@christo_kade](https://twitter.com/christo_kade), and make sure to follow me to be informed of any new articles I write or fun discoveries related to Javascript & CSS 😄
