---
title: "Improving your Git workflow"
date: "2019-08-12"
description: "Naming conventions, labels, code reviews and more."
slug: "/posts/git-workflow"
isPublished: true
---

Whether you are on your own or with a team, having an efficient Git workflow can go a long way to boost your productivity.  
For the past month, I've been consulting with a team that truly values the points I'll share with you today, and I've been able to see the positive effects they've had on a large-scale project.

![](https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80)

## Naming conventions

Git naming conventions are **key**. They allow you to understand the context of somebody's work in a matter of seconds and can help you filter through your team's work when well executed.

There isn't a perfect naming convention out there, but some of them, like [Vincent Driessen's](https://nvie.com/posts/a-successful-git-branching-model/) make a lot of sense and will clarify the mess that can be naming Git branches.  
In short, other than your usual `master` and `dev` branches, your _supporting_ branches can be of the following types:

- **Feature branches** (`feature-*`): takes the form of a user story, or a feature that will be merged later on
- **Release branches** (`release-*`): support the preparation of new product release, say a future rebranding of your website and will be eventually merged when ready
- **Hotfix branches** (`hotfix-*`): your typical bug fix. You could, for example, branch off in order to fix a bug in production

But naming conventions also apply to **commit messages**. I truly recommend Chris Beam's ["How to Write a Git Commit Message"](https://chris.beams.io/posts/git-commit/) in order to grasp the importance of carefully naming your commits. But I think the following guidelines are a good summary:

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

A good rule of thumb is to use the sentence: _if applied, this commit will..._ and end it with your commit's title. If it makes no sense, you might want to reconsider it.  
For example: _if applied, this commit will remove all deprecated methods_ sounds great, whereas _if applied, this commit will fix bug #123_ doesn't.

> Note: if you're using a tool such as Jira you could incorporate your ticket numbers in both your branch names and commit messages in order to make it easier to cross check.  
> Also, don't forget that these are just tips, and that at the end of the day you can always follow your own path. We'll all end up with some 'please work' commit messages here and there. 😄

## Github labels

Github labels are another great way of filtering through your pull requests. So here are some labels I've found useful in the past and their meaning (when it isn't obvious):

- **Good first issue**: especially great when your project is open-source and looking for new contributors. It's a great entry point for anyone too afraid to help out
- **Feature**
- **Bug**
- **Tech**: means the associated pull request isn't about a client-facing feature. It could be about your project's `eslint` or `storybook` configurations for example
- **Critical**: helps your team know which PRs are worth reviewing first, especially when on a tight deadline
- **Help wanted**
- **In progress**
- **XS**, **S**, **M**, **L** and **XL**: represents the size of the PR at a quick glance. It's hard to determine how many lines changed will make up for any of these sizes, it's all up to you
- **Review needed**
- **Reviewed**

Labels can be changed by clicking on the following link in your pull requests page:

![labels link screenshot](https://thepracticaldev.s3.amazonaws.com/i/cr3l08b0ijqgdlhnj2n5.png)

It's now as simple as clicking on "New label", setting a name, optional description and a color.

![new label screenshot](https://thepracticaldev.s3.amazonaws.com/i/sfb9stdlkkea9pasf4pm.png)

## Protecting Git branches

You can limit branch manipulation by, for example, enforcing a required status before merging a given branch. This is great when you've set code review rules and don't want anyone to mistakenly merge a branch.

As admin of a project, go to `Settings` => `Branches` => `Add rule` and input the name of the branch you wish to protect.

You can chose from a number of rules, including:

- Requiring X pull request reviews before merging
- Requiring status checks to pass before merging, great when you have a robust CI process in place

## Creating Git hooks

I'll quote the [official docs](https://githooks.com/) for this one:

> Git hooks are scripts that Git executes before or after events such as **commit**, **push** and **receive**. Git hooks are a built-in feature - no need to download anything.

> Every Git repository has a .git/hooks folder with a script for each hook you can bind to. You're free to change or update these scripts as necessary, and Git will execute them when those events occur.

I'd recommend using awesome tools such as [Husky](https://github.com/typicode/husky) in order to create them easily.

Automatically executing your tests and blocking a push if they fail will go a **long way** to avoid polluting your git history.

## Honorable mentions

I'd like to mention something I use regularaly on personal projects such as [Foodpicker](https://github.com/christopherkade/foodpicker), [Banner Generator](https://github.com/christopherkade/banner-generator) or [Gitignore It](https://github.com/christopherkade/gitignore-it) (if you're curious, check out their Git history): 🎨 ⚡️ [Gitmoji](https://gitmoji.carloscuesta.me/) 🔥 🐛! It's a way of codifying your commit messages using emojis, this way you can understand the **context** of a commit at a glance. Some might dismiss it right away due to its colorful nature, but I've found it very useful to generate changelogs for example.

Some awesome tools such as [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) and [gitmoji-changelog](https://github.com/frinyvonnick/gitmoji-changelog) make my Git experience smoother on a daily basis, so make sure to check them out if you're interested !

I hope you've learned a couple of things reading this article ! As always, I'd love for you to tweet at me [@christo_kade](https://twitter.com/christo_kade) if you have any questions 😄  
Take care, and don't forget: always rebase locally ❤️
