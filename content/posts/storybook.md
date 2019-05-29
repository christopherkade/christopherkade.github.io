---
title: "Automatically deploying your Storybook to Github Pages"
description: "Deploy your Storybooks to Github Pages using Travis CI in a matter of minutes."
date: "2019-05-17"
slug: "/posts/storybook"
draft: false
category: "Tutorial"
tags:
  - "Tutorial"
template: "post"
---

[Storybook](https://storybook.js.org/) is a great tool, it allows you to organize your components into a neat little interface that looks something like [this](https://christopherkade.com/ReactCraft).  
You basically create *stories* that take care of returning the component you want to display to your user.

Here's an example of a story for a React component:

```jsx
//...

import { Button } from "../components/Button"

storiesOf('Button', module)
  .add('With text', () => <Button>Enter World</Button>)
  .add('With emojis', () => <Button>🔥⚔️</Button>)
```

Pretty simple stuff, of course, there are many ways of [customizing](https://storybook.js.org/docs/configurations/options-parameter/) your Storybook, from its theme to adding awesome [addons](https://storybook.js.org/docs/addons/addon-gallery/).

But this article is not an introduction to Storybook, if you want one I truly recommend Emma Wedekind's ["Documenting React Components With Storybook"](https://dev.to/emmawedekind/documenting-react-components-with-storybook-4h3b). Today, we'll deploy an existing Storybook to Github Pages like [this one](https://christopherkade.com/ReactCraft) while automating the process at each push on a given branch.

<br><br>

## Setting up Travis CI

Travis CI is a continuous integration service that's used to build and test your software hosted on Github. It's free for open-source projects and will allow us to deploy to Github Pages super easily.

There are a few steps to follow before we can do all of that:

1. Go to [travis-ci.com](http://travis-ci.com) and Sign up with GitHub.
2. Accept the Authorization of Travis CI. You’ll be redirected to GitHub.
3. Click the green Activate button, and select the repository you want to deploy
4. Generate a personal access token on Github following the short instructions on this [link](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and give it the `public_repo` permissions.
5. Go to your project's settings on Travis, in the environment variables section, create a `GITHUB_TOKEN` variable and give it the token you've just generated. This token will allow Travis to push to your repository in order to deploy.

<div style="display: flex; align-items: center; justify-content: center">
<img width="70%" alt="render of the component mentioned" src="https://user-images.githubusercontent.com/15229355/57936079-78135700-78c3-11e9-8735-0aac4881d546.png">
</div>

We can now create a `.travis.yml` file at the root of our project and give it the following content:

```yml
# Tells Travis we're running on a Node environment
language: 'node_js'
node_js: '8'

# Script that is run before the script phase
before_script:
- yarn build-storybook

# Deployment information
deploy:
  provider: pages # Tell Travis we want to deploy to Github Pages
  skip-cleanup: true 
  github-token: $GITHUB_TOKEN # Will take the environment variable you created on step 5
  local_dir: storybook-static # The folder that needs to be deployed
  repo: christopherkade/ReactCraft # Add your username/project_name here
  target_branch: gh-pages # Tell Travis to deploy on the gh-pages branch
  on:
    branch: master # Tell Travis to trigger a deploy only when we push to master
```

> Note: If you wish to trigger the deployment when pushing to a specific branch, feel free to change the `branch: master` section of the configuration file.  

<br><br>

## Setting up our Storybook for deployment

We're almost done, we now need to export our Storybook into a static app. This way Travis will take care of pushing the generated app to our `gh-pages` branch, which will deploy it !

In your `package.json`, add the following script:

```json
{
  "scripts": {
    // ...
    "build-storybook": "build-storybook -s public",
  },
}
```

This script is the one run during our `before_script` phase in our `.travis.yml`. It will generate a `storybook-static` folder at the root of your project containing your website's static instance.

<br><br>

## Deploying your Storybook

We can now trigger our first deployment 😍

Push your `package.json` and `.travis.yml` files to your repository.   
If everything goes according to plan you should see a build being triggered on your Travis dashboard. After a short while (give it a few minutes at first), if your build is shown as successful, you'll find your Storybook under the following URL: username.github.io/project-name.

Keep in mind that a few things might make a build fail:  

1. Your tests failing
2. Forgetting a step in this article, for example setting up the environment variable containing your Github token on your Travis project.
3. Your linter throwing an error (if you have one set up)

So you can always fix these issues and push your changes to Github.

<br>

Congratulations on deploying your Storybook to Github Pages 🎉

If you have any questions or want to keep in touch, please feel free to follow me on Twitter [@christo_kade](https://twitter.com/christo_kade), I regularly post about JS and CSS there and will always inform you when new articles are out 😄
