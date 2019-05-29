---
title: "Create and deploy a Jekyll blog to Github pages"
description: "Obligatory 'here is how I made this blog' first post."
date: "2017-09-20"
slug: "/posts/jekyll-blog"
draft: false
category: "Tutorial"
tags:
  - "Tutorial"
template: "post"
---

What better way to inaugurate my blog than to explain how to set up something similar?

This blog uses a commonly used tool and service: **Jekyll** and **Github Pages**.

<br><br>

## What is Jekyll?

To quote their website:

"[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server."

It is widely used by the tech-blogging community and more importantly, is extremely easy to set up with Github pages !

<br><br>

## What is Github Pages?

[Github Pages](https://pages.github.com/) allows any Github user to host a static website directly from a Github repository, all free of charge.

The website you are currently viewing is one of them, and so is my [personal website](http://christopherkade.com) !

On this blog post we'll focus solely on the deployment of a **Jekyll blog**, but I might write about how to deploy an Angular4 website in the near future.

<br><br>

## Step 1: Setup Github Pages

<br>

#### Start by creating a repository named `username.github.io`

Replace `username` with your Github username (so in my case, I have inputed `christopherkade.github.io`):

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/32519362-68ac7a50-c404-11e7-8931-136c43710089.png">
</p>

<br>

#### Then clone your repository (this example uses a terminal):

```bash
git clone https://github.com/username/username.github.io
```

<br>

#### In order to test that everything works as intended, enter the project folder and add an `index.html` file:

```bash
cd username.github.io
echo "Hello World" > index.html
```

<br>

#### Finally, push it:

```bash
git add --all
git commit -m "Initial commit"
git push -u origin master
```

And that's all you need ! Open up your browser of choice and go to `https://username.github.io`.

<br><br>

## Step 2: Setup Jekyll

<br>

#### Let's start by generating Jekyll's starter blog (make sure you are root):

```bash
gem install jekyll bundler
jekyll new my-blog
cd my-blog
bundle exec jekyll serve
```

<br><br>

## Step 3: Deploy our Jekyll blog

Everything is explained [here](https://jekyllrb.com/docs/github-pages/), but in short:

You must use a gem (a Ruby package) created by the Github Pages team.
Add it to your `Gemfile`:

```Gemfile
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
```

Run `bundle update`.

<br>

#### Deploy everything to your Github Pages repository

All we have to do is push the contents of our Jekyll repository to our `username.github.io` repository.

To do so (in your Jekyll blog repository):

```bash
# initialize the local directory as Git repository
git init

# add the files in our Jekyll repository
git add .

# commit them
git commit -m "Initial blog commit"

# don't forget to replace the remote URL with your own
git remote add origin https://github.com/username/username.github.io

# check if the remote URL is correct
git remote -v

# finally, push everything to the master branch
git push origin master
```

And **voilà** ! Your Jekyll blog should be up and running, you can now start blogging at your hearts content.

<br><br>

## Optional: personalize your blog

You can always personalize your Jekyll blog with various themes, for example, this blog uses [John Otander](http://johnotander.com/)'s [Pixyll](https://github.com/johnotander/pixyll/) theme.

It might take a short while to have everything set up, but it's a rather simple process that is very similar to what you have just achieved. Don't forget to check out Jekyll's [official documentation](https://jekyllrb.com/docs/themes/) for more information on theming.

<br><br>

## Final thoughts

Github Pages and Jekyll are two very cool free tools that should be used by anyone who wishes to set up a personal blog, website or project. There is a **lot** of documentation out there to help you achieve your goals, like setting up a domain and custom domain.

I hope this post has been of help to some of you,  
Until next time,  
[@christo_kade](https://twitter.com/christo_kade)
