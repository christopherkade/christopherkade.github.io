---
title: "Deploy a project page or a custom subdomain on Github pages"
description: "Using AWS Route 53 and Github pages."
date: "2017-10-02"
slug: "/posts/subdomain-githubpages"
isPublished: true
category: "Tutorial"
tags:
  - "Tutorial"
template: "post"
---

Have you noticed the URL of this blog?

The first part, namely `blog`, is called a **subdomain**, it's a subset - a smaller part of a larger domain. In fact, `www` is also a subdomain, but you can make your web address unique by replacing it with almost anything you want (without spending an additional penny !). This subdomain will allow you to point to a specific directory in your Github Pages directories in order to display specific content.

In this blog post, I'll simply demonstrate how I deployed a subdomain using **AWS** as my DNS (Domain name System) and **Github Pages** as my host. I will also demonstrate how to create a project page for your Github page.

**There are two possible scenarios**: you either have a basic Github page or one with a custom domain.  
In the first scenario, you will be able to create a _project page_ that will work just like a normal subdomain but will be accessible like such: `username.github.io/project`.  
In the second scenario, you will be able to create a _subdomain_ that will be accessible in the normal way: `subdomain.website.com` (or any other extension you use).

<br><br>

## Step 1: Create a CNAME record pointing to your Github page

#### Note: Only follow this step if you already have a custom domain set-up and wish to have a custom subdomain like the one used by this blog, otherwise, jump to step 2.

#### Note (2): In this tutorial I use AWS Route 53 as my DNS of choice, but these steps can be done through any other DNS out there.

Head over to your AWS DNS console (Route 53), then click on `Hosted zones`:

<p align="center">
  <img width="70%" height="70%" src="https://user-images.githubusercontent.com/15229355/32547643-073c7f14-c47b-11e7-8c17-949cdc7c4d12.png">
</p>

Click on the hosted zone to which you wish to add a subdomain, then click on `Create Record Set`:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/32547711-4f933294-c47b-11e7-8038-2f24b7906946.png">
</p>

And fill in the right-hand side form like such:

<p align="center">
  <img width="90%" height="90%" src="https://user-images.githubusercontent.com/15229355/32547798-98972054-c47b-11e7-88db-468429af0912.png">
</p>

Where `Name` should contain your new subdomain's name (in my case `blog`), `Type` should be `CNAME - Canonical name` and `Value` should be your personnal Github pages URL.

A `CNAME` record is simply used to specify that a domain name is an alias to another domain name.

_Please keep in mind, that in my case, `christopherkade.github.io` actually uses the custom domain `christopherkade.com`_.

Finally, create your Record Set. These changes may take up to two days to occur, but that does not stop us from continuing our work.

<br><br>

## Step 2: Create your project's Github repository and deploy it

All we have to do now, is create our project's repository and push its contents to the Github pages branch.

So head over to [Github](https://github.com/) and create the repository that will be used to serve the contents of your subdomain once it is accessed. Note that the repository's name will be the value used in your new URL (for example: call you repository `blog` if you wish to access it via `username.github.io/blog` or `blog.website.com`)

#### Note: Only create the following file if you are working towards a custom subdomain, otherwise skip it.

Once this is done, add a `CNAME` file to the root of your project containing your new domain, in my case `blog.christopherkade.com`.

Then push your work to the `gh-pages` branch, this will automatically build your project and deploy it to your page.

```bash
# clone your new repository
git clone https://github.com/username/repo-name.git

cd repo-name

# create an index.html file to make sure everything works
echo "Hello World!" >> index.html

# create the gh-pages branch
git checkout -b gh-pages

# add the contents of your directory
git add .

# commit it all with a given message
git commit -m "Initial commit"

# push it to the gh-pages branch
git push origin gh-pages
```

After a few seconds, your new subdomain should be up and running ! You can now fiddle around, creating a Jekyll blog or any other static website you can think of.

You can now access your project:

`username.github.io/project`

Or your sub-domain:

`subdomain.website.extension`

<br><br>

## Summary

We have briefly learned a couple of things:

- The various usages of a subdomain (and its significance)
- How to create a CNAME record in our AWS DNS (and what it actually is)
- How to deploy a project page or a new subdomain for our Github page

<br><br>

## Final thoughts

This is a repeatable process, you can deploy as many projects / subdomains as you want. This can be useful if you wish to showcase one of your projects, create a blog, or simply have a safe development repository (under a `dev` subdomain for example).

Thanks for reading,  
[@christo_kade](https://twitter.com/christo_kade)
