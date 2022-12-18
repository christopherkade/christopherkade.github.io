---
title: "Up your Git game and clean up your history"
description: "Rebase & a few tricks"
date: "2019-06-18"
slug: "/posts/git-rebase"
isPublished: true
category: "Tutorial"
tags:
  - "Tutorial"
  - "Git"
template: "post"
---

<br>

> This post is aimed for people who want to learn how to use commands such as rebase & learn a few tricks to have a nicer Git experience.

<br>

Alright, let's start by watching the Git history of some of my first ever projects on Github:

![git history 01](https://thepracticaldev.s3.amazonaws.com/i/7vpkyr2vbo9ua1ymfmiy.png)

> Oh no

![git history 02](https://thepracticaldev.s3.amazonaws.com/i/21t7daye6xhkfhnnzc1v.png)

> Oh no no no no

![git history 03](https://thepracticaldev.s3.amazonaws.com/i/a68jim387s5o3v224dlr.png)

> OH LORD WHAT HAVE I DONE

Now that I've ridiculed myself, let's check out what most of my projects look like now 😄

![git history 04](https://thepracticaldev.s3.amazonaws.com/i/66wi8w9kdgl8x6m6ru4o.png)

> Oof, much better

<br>

If you don't know what this all means, let me explain briefly:

This is a representation of your Git history on Github, meaning the commits you've done over time on your project's branches.

> You can see your own by navigating to the "Insights" tab of one of your projects, then going to the "Network" tab on the left.

The black bar represents my `master` branch and each alternating blue & green bars are separate branches.  
As you can see on the more recent and nicer history, they alternately get merged into master, creating this nice flow of writing code & merging it (which is always recommended, instead of accumulating pull requests).

So, how can you have a cleaner history? Let's go over real use-cases.

Here's what we're covering today (make sure to do each section in order):

- [Rebasing](#the-magic-of-git-rebase)
  - [Fixing up a commit](#example-1-fixing-up-a-commit-with-rebase)
  - [Dropping a commit](#example-2-dropping-a-commit)
  - [Renaming a commit](#example-3-rewording-a-commit)
  - [Rebasing on master](#example-4-rebasing-on-master)
- [Getting a better git log](#bonus-a-better-git-log)

## The magic of `git rebase`

[Official documentation](https://git-scm.com/docs/git-rebase)

Git rebase lets your remodel your history to your will. See it as a way to manipulate your list of commits on a given branch.  
For example, you could drop commits completely (basically say goodbye to them in the abyss of git), rename them (rewriting your commit message), squash them into other commits (which is useful to hide commits that do small things such as adding a semicolon, you don't really want to see them in your history) and many more things.

### Learning by practice

Go to the following [project](https://github.com/christopherkade/up-your-git-game) I made for the occasion, **fork it** and let's get started.

Forking is basically creating a copy of my project for yourself, you'll be able to mess around with it without any problems ! To do it, click on the fork button on the top right:

![fork button](https://thepracticaldev.s3.amazonaws.com/i/1plindfnefqldmifa3b3.png)

Then, clone the repository you forked.

## Example 1: fixing up a commit with rebase

**Scenario**: you have committed something that does not deserve a commit of its own, or you want to reduce the number of commits on your branch to one before making a pull request.

- From the `master` branch, create a new branch.

- Create a new file, its content doesn't really matter.

- Commit that new file to your branch.

```bash
git add index.js
git commit -m "add index.js"
```

- Update something in that file

- Commit it again with a message such as "update index.js"

- Run `git log`, as you can see, we now have 2 commits

We now want to `fixup` the `update` commit into the `add` commit, because this small change does not deserve a commit of its own.

To do so, we'll use the **interactive** mode of `git rebase`, which lets us apply the rebasing with a nice interface.

- Run the rebase command like so:

```bash
git rebase -i HEAD~2
```

`HEAD~2` means start from the last commit on the branch (the head) and go back 2 commits. If we wanted to manipulate more commits, we could change the value to the far right.  
You should now have an interface that looks something like this:

![rebase interactive](https://thepracticaldev.s3.amazonaws.com/i/h4po6e92b0icvrpki9sz.png)

Don't panic, this only shows you the two commits you are changing at the top, and the available commands bellow them.  
By default, the rebase interface uses Vim, to write in it, simply press the **i** key. You are now in **"INSERT"** mode. As we want to fixup the second commit in the first one, all we have to do is write `fixup` or `f` instead of `pick` in front of it. Our `update index.js` commit will now be squashed into the `add index.js` but only the `add index.js`'s message will be kept.

- Update the second line like so:

```bash
pick c0091ec add index.js
f a19336e update index.js
```

Now, we want to apply the rebase, press **escape** to leave the **INSERT** mode, press **:** (colon) and enter **wq** for "write" and "quit" and press **ENTER** to apply these changes. The colon simply allows you to write commands for Vim to execute.

The following message should now appear in your console:

> Successfully rebased and updated refs/heads/{YOUR BRANCH NAME}.

Check your `git log`, you now have one beautiful and clean commit !

- Finally, force push to that branch to apply the rebase to the remote server

```bash
git push origin {BRANCH-NAME} -f
```

The `-f` is essential as a rebase modifies your git history and requires to be forced.

## Example 2: dropping a commit

These next 2 steps will be extremely similar to the first one because you now have the tools to do any kind of rebasing 🎉

**Scenario**: you want to completely remove a commit

We'll drop the `add FILENAME` commit we previously made:

- Run the rebase command

```bash
git rebase -i HEAD~1
```

- Add a `d` or `drop` in front of the commit you wish to drop.

![rebase drop](https://thepracticaldev.s3.amazonaws.com/i/nl7wqia23khpgf7by6jf.png)

- Run `:wq` in your Vim editor (and check with `git log` that the commit was dropped)

- Don't forget to force push it to your remote server 😀

## Example 3: rewording a commit

Pretty similar, with one change.

**Scenario**: you want to fix a typo or rewrite a commit's title or description

- Create a random commit

![git reword](https://thepracticaldev.s3.amazonaws.com/i/o88cmcyqj1596f52gyiy.png)

- Run the rebase command

```bash
git rebase -i HEAD~1
```

- Add a `r` or `reword` in front of the commit you wish to reword (no need to edit the title now).

- Run `:wq` in your Vim editor. This will open a similar editor with the commit(s) you wish to reword.

![git reword 2](https://thepracticaldev.s3.amazonaws.com/i/ou14d5c0l0wisqix9wr2.png)

- Update the commit's title and description to your will, run `:wq` and that's it ! Check with `git log` that the rewording was applied

![git reword 3](https://thepracticaldev.s3.amazonaws.com/i/b1o6v4ichuc69ruig868.png)

- Don't forget to force push it to your remote server 😀

## Example 4: rebasing on `master`

> This example isn't reproduced in the Github project, but feel free to test it out.

**Scenario**: you have multiple PRs (Pull Requests) open at the same time

![rebase master screenshot](https://thepracticaldev.s3.amazonaws.com/i/ja8pn2wr7pl39yhaxf76.png)

You merge one PR, now, your second PR is not up to date with `master`, oh no !

![rebase master screenshot 2](https://thepracticaldev.s3.amazonaws.com/i/bl9r2aajzi2384qa4f9n.png)

This very frequent scenario will have us rebase our second PR on `master` so that it gets the new code merged from the first PR.

- From the branch you want to rebase (in our case, the second PR's branch), run the following:

```bash
git fetch
```

This downloads all the references our branch needs to apply the rebase.

- Then, execute the rebase like so:

```bash
git rebase origin/master
```

- Finally, run a `git push origin {MY-BRANCH} -f` to apply the rebase to our remote server

![rebase master screenshot 3](https://thepracticaldev.s3.amazonaws.com/i/m220k16b638zl42xaqbo.png)

> Hurray !

## Bonus: a better `git log`

Is your `git log` too much to handle?

![git log screenshot](https://thepracticaldev.s3.amazonaws.com/i/pynf7hsq5tgdl43jr5ba.png)

Would you rather have a `git log` that is straight to the point and looks nicer?

![git log screenshot 2](https://thepracticaldev.s3.amazonaws.com/i/9k0v35fvzng378m4vftg.png)

Look no further ! Here's how you can achieve it, in your console, paste the following:

```bash
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

You've now created an alias to git log called `git lg` that will display the nicer output showed before. Try it out by typing `git lg` (or `git lg -p` to see the lines that have changed).

> Thanks to [Coderwall](https://coderwall.com/p/euwpig/a-better-git-log) for this bonus ✨

## Closing thoughts

Learning how to use Git is probably one of the most important skills we can acquire as developers. I hope some of you won't be as afraid of `rebase` as I was a while ago.

If this post has been helpful, please feel free to follow me on Twitter [@christo_kade](https://twitter.com/christo_kade) !
