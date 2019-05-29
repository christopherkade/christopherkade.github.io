---
title: "How to start contributing to the open-source community?"
description: "Contributing isn't as hard as it looks."
date: "2018-08-02"
slug: "/posts/open-source"
draft: false
category: "Tutorial"
tags:
  - "Tutorial"
  - "Open-source"
template: "post"
---

From my experience, the hardest step to contributing to the open-source ecosystem is actually jumping in and getting started. Although many tools and platforms are available to help developers with doing just that, I wanted to give a condensed list of steps **and** tools to make that experience as easy as possible.

Note that all terms that might be unknown to you will be defined in the annex!

<br><br>

### What should I do?

It's pretty straight forward:

- Find an open-source project to work on (ideally one you're using or used in the past)
- Fork it
- Clone it
- Read the contribution guidelines (usually in a `CONTRIBUTING.md` file in the root of the repo: [example](https://github.com/SSENSE/vue-carousel/blob/master/CONTRIBUTING.md))
- Create a branch
- Implement the new feature/fix
- Commit it
- Push it
- Submit your changes for review via a pull request
- Once your pull request is merged, delete the branch you worked on

Keep in mind that these steps might not be complete depending on the project you're working on. That's why it's essential to read the contribution guidelines thoroughly!

<br><br>

### Tools I can use

- [First Timers Only](https://www.firsttimersonly.com/), great guidelines on how/why to contribute
- [First contributions](https://github.com/Roshanjossey/first-contributions), practice environment to make your first ever contribution
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/), beautifully done website describing every aspect of open-source contribution
- [Up For Grabs](https://up-for-grabs.net/#/), exploration of beginner-friendly open-source projects to jump into

I hope that this short article will help some of you to start contributing to the open-source as it is a very rewarding process.

<br><br>

### Annex

<br>

##### Forking

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

_From Github Help_, [Link](https://help.github.com/articles/fork-a-repo/)

##### Cloning

When you create a repository on GitHub, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.

_From Github Help_, [Link](https://help.github.com/articles/cloning-a-repository/)

##### Branching (version control)

Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes.

_From Atlassian_, [Link](https://www.atlassian.com/git/tutorials/using-branches)

You can visualise a Git repository as a tree, with its trunk being _master_ (branch) and every branch its own encapsulation as mentioned before. This allows a developer to work on a feature without taking major risks in altering important code and allowing her or him to backtrack whenever necessary.

##### Commiting

Used to save changes to the local repository. The developer tells git which changes they want to include and run the `git commit` command. Note that these changes are only saved **localy** and not on the remote server.

##### Pushing

Used to _push_ commits (as mentioned above) to the remote repository.

##### Pull request

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

_From Github Help_, [Link](https://help.github.com/articles/about-pull-requests/)
