# Rewriting my website using Vue

I finally started fiddling with [Vue](https://vuejs.org/) in my free time and I'm happy to say I've fallen in love with this framework.

I'll go over the things I've learned and the changes I've had to implement in order to rewrite my website from Angular to Vue.

<br><br>

### Step 1: Understanding the framework

Vue is well known for being easy to use at first, and coming from an Angular background, the concepts were not that hard to understand.

I knew I wanted to have an overview of the whole ecosystem (or at least the most well known elements of it), namely:

- Vue
- Vuex
- Vue-router

After digging around, I found multiple tutorials explaining these concepts in detail: [state management](https://alligator.io/vuejs/intro-to-vuex/), [routing](https://scotch.io/tutorials/getting-started-with-vue-router), [Vue 2](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2) and started coding a cost management application.

Nothing too fancy, it simply allowed me to understand component management via the multiple boxes and elements of my interface and state management via the management of prices and their mutation.

<br><br>

### Step 2: Rewriting `christopherkade.com`

After hearing lots of good things over the performance of Vue, I wanted to take advantage of it by rewriting my personal website. This would allow me to understand the necessary changes for transitioning from an Angular to a Vue project and would allow me to fix multiple design issues.

First things first, I had to initialize my project:

```
# install vue-cli
$ npm install --global vue-cli
# create a new project using the "webpack" template
$ vue init webpack christopherkade.com
# install dependencies and go!
$ cd christopherkade.com
$ npm install
$ npm run dev
```

I now have an up and running Vue project and want to understand what will be needed in the near future:

- Multiple components
  - App (base component)
  - Navigation
  - Home
  - Work
  - Posts
  - Side (for the side text with my title, not truly necessary but useful).
- Routing
  - '/' &rarr; Home
  - '/work' &rarr; Work
  - '/posts' &rarr; Posts
  - '\*' &rarr; Home

Therefore, my root component's (`App`) template was as follows:

```html
<template>
  <div id="app">
    <!-- Navigation -->
    <navigation />
    <!-- Side text -->
    <side/>
    <!-- Content container (grey area) -->
    <div class="content">
        <!-- Router -->
        <router-view/>
    </div>
  </div>
</template>
```

With multiple changes here and there, such as centralizing my styles, templates and scripts into single `.vue` files and changing my `*ngFor`s and `ngIf`s into `v-for` and `v-if`s I had a finished product with little to no problems.

Both websites were identical with one exception: Vue's performance was notable.

<br><br>

### Final thoughts

It has been a pleasure learning the ways of VueJS, and I will surely keep on using and learning this framework in the future.

I've enjoyed multiple aspects of Vue:

- Having a single file per component
- Actually using JS and not JSX (I'm looking at you React)
- The ease of use of its router
- The use of a store to manage states
- Vue-CLI
- And many other little things that make the development process a pleasure.

Thanks for reading,  
[@christo_kade](https://twitter.com/christo_kade)
